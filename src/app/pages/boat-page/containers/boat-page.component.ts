import { Component, OnInit } from '@angular/core';
import {BoatOutputDTO, BoatOutputDTOGenericResponseDTO, BoatsService} from "../../../shared/sdk";
import {ActivatedRoute, Router} from "@angular/router";
import {StorageService} from "../../../shared/services/storage/storage.service";

@Component({
  selector: 'boat',
  templateUrl: './boat-page.component.html',
  styleUrls: ['./boat-page.component.scss']
})

export class BoatPageComponent implements OnInit {

  boat: BoatOutputDTO;
  boatId: any;
  initialDate: any;
  endDate: any;

  constructor(
    protected boatsApiService: BoatsService,
    protected activatedRoute: ActivatedRoute,
    private storageService: StorageService,
    private router: Router
  ) {
    this.boat={};
    this.activatedRoute.queryParams.subscribe(parameters => {
      this.boatId = parameters['id'] as string;
      this.initialDate = parameters['initialDate'];
      this.endDate = parameters['endDate'];
      if (this.boatId) {
        this.boatsApiService.apiBoatsGet(parseInt(this.boatId)).subscribe((resp: BoatOutputDTOGenericResponseDTO) => {
            if (resp.items)
              this.boat = resp.items[0];
          }
        );
      }
    });


  }

  ngOnInit(): void {
      console.log('BOAT PAGE')
  }

  booking(){
    if (this.boatId) {
      const bookingCart = this.storageService.getItem('bookingCart');
      let bookingCartJSON:any;
      if (bookingCart) {
        bookingCartJSON = JSON.parse(bookingCart);
        if (bookingCartJSON.boats) {
          bookingCartJSON.boats.push({id: this.boatId, initialDate: this.initialDate, endDate: this.endDate});
        } else {
          bookingCartJSON.boats = [{id: this.boatId, initialDate: this.initialDate, endDate: this.endDate}];
          console.log(bookingCartJSON);
        }
      } else {
        bookingCartJSON = {boats: [{id: this.boatId, initialDate: this.initialDate, endDate: this.endDate}]};
      }
      this.storageService.setItem('bookingCart', JSON.stringify(bookingCartJSON));
      console.log(bookingCartJSON);
      this.router.navigate(['/booking']);
    }
  }

}
