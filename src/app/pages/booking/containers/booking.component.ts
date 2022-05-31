import { Component, OnInit } from '@angular/core';
import {
  ActivitiesService,
  ActivityOutputDTO, AddBookingInputDTO,
  BoatOutputDTO,
  BoatsService,
  BookingService, ServiceOutputDTO,
  ServicesService
} from "../../../shared/sdk";
import {StorageService} from "../../../shared/services/storage/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  activities: Array<ActivityOutputDTO> = [];
  boats: Array<BoatOutputDTO> = [];
  services: Array<ServiceOutputDTO> = [];
  bookingCartJSON: any;
  entryDate: any;
  endDate: any;
  totalPeople: any;
  requestCapitan = false;
  boatsIds : Array<number> = [];
  servicesIds : Array<number> = [];
  activityIds : Array<number> = [];
  constructor(private bookingService: BookingService,
              private activitiesService: ActivitiesService,
              private boatsService: BoatsService,
              private servicesService: ServicesService,
              private storageService: StorageService,
              private router: Router) {
    console.log('estoy en booking')
  }

  ngOnInit() {
    console.log('estoy en booking')

    const bookingCart = this.storageService.getItem('bookingCart');
    if(bookingCart){
      this.bookingCartJSON = JSON.parse(bookingCart);
      if(this.bookingCartJSON.activities){
        this.entryDate = this.bookingCartJSON.activities[0].entryDate;
        this.endDate = this.bookingCartJSON.activities[0].endDate;
        this.totalPeople = this.bookingCartJSON.activities[0].totalPeople;
        for(let i = 0; i < this.bookingCartJSON.activities.length; i++){
          this.activityIds.push(this.bookingCartJSON.activities[i].id);
          const id = this.bookingCartJSON.activities[i].id as number;
          this.activitiesService.apiActivitiesIdGet(id).subscribe(resp => {
            this.activities.push(resp);
          });
        }
      }
      if(this.bookingCartJSON.boats){
        this.entryDate = this.bookingCartJSON.boats[0].entryDate;
        this.endDate = this.bookingCartJSON.boats[0].endDate;
        this.totalPeople = this.bookingCartJSON.boats[0].totalPeople;
        this.requestCapitan = this.bookingCartJSON.boats[0].requestCapitan;
        for(let i = 0; i < this.bookingCartJSON.boats.length; i++){
          this.boatsIds.push(this.bookingCartJSON.boats[i].id);
          const id = this.bookingCartJSON.boats[i].id as number;
          this.boatsService.apiBoatsIdGet(id).subscribe(resp => {
            this.boats.push(resp);
          });
        }
      }
      if(this.bookingCartJSON.services){
        this.entryDate = this.bookingCartJSON.services[0].entryDate;
        this.endDate = this.bookingCartJSON.services[0].endDate;
        this.totalPeople = this.bookingCartJSON.services[0].totalPeople;
        for(let i = 0; i < this.bookingCartJSON.services.length; i++){
          this.servicesIds.push(this.bookingCartJSON.services[i].id);
          const id = this.bookingCartJSON.services[i].id as number;
          this.servicesService.apiServicesIdGet(id).subscribe(resp => {
            this.services.push(resp);
          });
        }
      }
    } else {
      alert('no hay reservas aun');
    }
  }

  booking(){
    const userId = this.storageService.getItem('userId');
    if(userId) {
      const input : AddBookingInputDTO = {
        clientId: userId,
        entryDate: this.entryDate as string,
        departureDate: this.entryDate as string,
        totalPeople: this.totalPeople,
        requestCaptain: this.requestCapitan,
        boatIds: this.boatsIds,
        serviceIds: this.servicesIds,
        activityIds: this.activityIds
      };
      this.bookingService.apiBookingPost(input).subscribe((resp)=>{
        this.router.navigate(['booking/pay/'+ resp.id]);
      }, (error) => {
        alert(error);
      });
    } else {
      alert('debe registrarse primero!');
    }
  }
}
