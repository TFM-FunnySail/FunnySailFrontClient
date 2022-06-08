import { Component, OnInit } from '@angular/core';
import {
  ActivitiesService,
  ActivityOutputDTO, AddBoatBookingInputDTO, AddBookingInputDTO,
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
  loading = true;
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
        this.loading = true;
        for(let activities of this.bookingCartJSON.activities){
          console.log(activities);
          if(activities) {
            this.activityIds.push(activities.id);
            const id = activities.id as number;
            this.activitiesService.apiActivitiesIdGet(id).subscribe(resp => {
              this.activities.push(resp);
              this.loading = false;
            });
          }
        }
      }
      if(this.bookingCartJSON.boats){
        this.loading = true;
        for(let boat of this.bookingCartJSON.boats){
          if(boat) {
            this.boatsIds.push(boat.id);
            const id = boat.id as number;
            this.boatsService.apiBoatsIdGet(id).subscribe(resp => {
              this.boats.push(resp);
              this.loading = false;
            });
          }
        }
      }
      if(this.bookingCartJSON.services){
        this.loading = true;
        for(let service of this.bookingCartJSON.services){
          this.servicesIds.push(service.id);
          const id = service.id as number;
          this.servicesService.apiServicesIdGet(id).subscribe(resp => {
            this.services.push(resp);
            this.loading = false;
          });
        }
      }
    } else {
      this.loading = false;
    }
  }

  booking(){
    const userId = this.storageService.getItem('userId');
    if(userId) {
      const boatsInput: Array<AddBoatBookingInputDTO> = [];
      for(let boat of this.boats){
          boatsInput.push({
            boatId: boat.id,
            entryDate: this.entryDate,
            departureDate: this.endDate
          })
      }
      const input : AddBookingInputDTO = {
        clientId: userId,
        totalPeople: this.totalPeople,
        boats: boatsInput,
        serviceIds: this.servicesIds,
        activityIds: this.activityIds
      };
      this.bookingService.apiBookingPost(input).subscribe((resp)=>{
        this.router.navigate(['/payment/'+ resp.id]);
      }, (error) => {
        alert(error);
      });
    } else {
      alert('debe registrarse primero!');
    }
  }

  deleteActivity(activity: any){
    if(this.bookingCartJSON && this.bookingCartJSON.activities) {
      for (let i = 0; i < this.bookingCartJSON.activities.length; i++) {
        if (parseInt(this.bookingCartJSON.activities[i].id) === parseInt(activity.id)) {
          this.bookingCartJSON.activities.splice(i, 1);
          this.activities.splice(i, 1);
          break;
        }
      }
    }
    this.storageService.setItem('bookingCart', JSON.stringify(this.bookingCartJSON));
  }

  deleteBoat(boat: any){
    if(this.bookingCartJSON && this.bookingCartJSON.boats) {
      for (let i = 0; i < this.bookingCartJSON.boats.length; i++) {
        if (parseInt(this.bookingCartJSON.boats[i].id) === parseInt(boat.id)) {
          this.bookingCartJSON.boats.splice(i, 1);
          this.boats.splice(i, 1);
          break;
        }
      }
    }
    this.storageService.setItem('bookingCart', JSON.stringify(this.bookingCartJSON));
  }

  deleteService(service: any){
    if(this.bookingCartJSON && this.bookingCartJSON.services) {
      for (let i = 0; i < this.bookingCartJSON.services.length; i++) {
        if (parseInt(this.bookingCartJSON.services[i].id) === parseInt(service.id)) {
          this.bookingCartJSON.services.splice(i, 1);
          this.services.splice(i, 1);
          break;
        }
      }
    }
    this.storageService.setItem('bookingCart', JSON.stringify(this.bookingCartJSON));
  }
}
