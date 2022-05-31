import { Component, OnInit } from '@angular/core';
import {BoatOutputDTO, BoatOutputDTOGenericResponseDTO, BoatsService} from "../../../shared/sdk";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'boat',
  templateUrl: './boat-page.component.html',
  styleUrls: ['./boat-page.component.scss']
})

export class BoatPageComponent implements OnInit {

  boat: BoatOutputDTO;
  boatId: string | null | number;

  constructor(
    protected boatsApiService: BoatsService,
    protected router: ActivatedRoute,

  ) {
    /*this.boatsApiService.apiBoatsGet(undefined, undefined, undefined, type, initialDate, endDate).subscribe(resp => {
      this.boats = this.handlerBoats(resp).items;
    });*/
    this.boat={};
    this.boatId = this.router.snapshot.paramMap.get('boatId');
    if (this.boatId)
      this.boatsApiService.apiBoatsGet(parseInt(this.boatId)).subscribe((resp: BoatOutputDTOGenericResponseDTO) => {
        if(resp.items)
          this.boat = resp.items[0];
        }
      );
  }

  ngOnInit(): void {

  }

}
