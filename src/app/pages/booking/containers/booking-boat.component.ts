import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {
  BoatOutputDTO,
  BoatsService,
  BookingService
} from "../../../shared/sdk";
import {StorageService} from "../../../shared/services/storage/storage.service";

@Component({
  selector: 'booking-boat',
  templateUrl: './booking-boat.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingBoatComponent implements OnInit {
  exist = false;
  boat: BoatOutputDTO  = {};
  boatId: number = -1;
  initialDate?: string;
  endDate?: string;
  form: any;

  constructor(private bookingService: BookingService,
              private boatService: BoatsService,
              private activatedRoute: ActivatedRoute,
              private storageService: StorageService,
              private formBuilder: FormBuilder,
              private router: Router) {
    console.log("estamos en booking services!!!!")
  }

  ngOnInit() {
    console.log("estamos en booking services!!!!")
    this.activatedRoute.params.subscribe(parameters => {
      this.boatId = parameters['id'] as number;
      this.initialDate = parameters['initialDate'] as string;
      this.endDate = parameters['initialDate'] as string;
      const id = this.boatId;
      console.log(this.boatId);
      this.boatService.apiBoatsIdGet(id).subscribe(resp => {
        if (resp) {
          console.log(resp);
          this.exist = true;
          this.boat = resp;
        }
      });
    });
  }

  booking(){
    if (this.boatId) {
      const bookingCart = this.storageService.getItem('bookingCart');
      let bookingCartJSON : any = {};
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


