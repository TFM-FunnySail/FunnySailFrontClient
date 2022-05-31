import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ActivitiesService, ActivityOutputDTO, BookingService} from "../../../shared/sdk";
import {StorageService} from "../../../shared/services/storage/storage.service";

@Component({
  selector: 'booking-activity',
  templateUrl: './booking-activity.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingActivityComponent implements OnInit {
  exist = false;
  activity: ActivityOutputDTO;
  activityId: number = -1;
  form: any;

  constructor(private bookingService: BookingService,
              private activitiesService: ActivitiesService,
              private activatedRoute: ActivatedRoute,
              private storageService: StorageService,
              private formBuilder: FormBuilder,
              private router: Router) {
    this.activity = {
      id: -1,
      activityDate: '',
      name: '',
      active: false,
      price: 0,
      description: ''
    };
    console.log("estamos en booking activity!!!!")
  }

  ngOnInit() {
    console.log("estamos en booking activity!!!!")
    this.activatedRoute.params.subscribe(parameters => {
      this.activityId = parameters['id'] as number;
      const id = this.activityId;
      console.log(this.activityId);
      this.activitiesService.apiActivitiesIdGet(id).subscribe(resp => {
        if (resp) {
          console.log(resp);
          this.exist = true;
          if (resp.id) {
            this.activity.id = resp.id;
          }
          if (resp.activityDate) {
            this.activity.activityDate = resp.activityDate;
          }
          if (resp.name) {
            this.activity.name = resp.name;
          }
          if (resp.active) {
            this.activity.active = resp.active;
          }
          if (resp.price) {
            this.activity.price = resp.price;
          }
          if (resp.description) {
            this.activity.description = resp.description;
          }
        }
      });
    });

    this.form = this.formBuilder.group({
      initialDate: ['', Validators.required],
      endDate: ['',  Validators.required],
      totalPeople: ['',  [Validators.required, Validators.min(0), Validators.max(10)]]
    });
  }

  booking(){
    if(this.form.valid) {
      let initialDate = undefined;
      if (this.form.get('initialDate').value) {
        const date = this.form.get('initialDate').value as unknown as Date;
        console.log(date);
        initialDate = date.toISOString();
        console.log(initialDate);
      }
      let endDate = undefined;
      if (this.form.get('endDate').value) {
        const date = this.form.get('endDate').value as unknown as Date;
        endDate = date.toISOString();
      }

      const totalPeople = this.form.get('totalPeople').value;

      if (this.activityId) {
        const bookingCart = this.storageService.getItem('bookingCart');
        let bookingCartJSON;
        if (bookingCart) {
          bookingCartJSON = JSON.parse(bookingCart);
          if (bookingCartJSON.activities) {
            bookingCartJSON.activities.push({id: this.activityId, initialDate, endDate, totalPeople});
          } else {
            bookingCartJSON.activities = [{id: this.activityId, initialDate, endDate, totalPeople}];
          }
        } else {
          bookingCartJSON = {activities: [{id: this.activityId, initialDate, endDate, totalPeople}]};
        }
        this.storageService.setItem('bookingCart', JSON.stringify(bookingCartJSON));
        console.log(bookingCartJSON);
        this.router.navigate(['/booking']);
      }
    }
  }


}
