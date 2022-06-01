import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ActivitiesService, ActivityOutputDTO} from "../../../shared/sdk";
import {StorageService} from "../../../shared/services/storage/storage.service";

@Component({
  selector: 'activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})

export class ActivityComponent implements OnInit {

  exist = false;
  activity: ActivityOutputDTO;

  constructor(private activatedRoute: ActivatedRoute,
              private activateService: ActivitiesService,
              private storageService: StorageService,
              private router: Router) {
    this.activity = {
      id: -1,
      activityDate: '',
      name: '',
      active: false,
      price: 0,
      description: ''
    };
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parameters => {
      let id = parameters['id'] as number;
      console.log(id);
        this.activateService.apiActivitiesIdGet(id).subscribe(resp => {
          if(resp){
            console.log(resp);
            this.exist = true;
            this.activity = resp;
          }
        });
    });
  }

  booking() {
    let id = this.activity.id;
    if (id) {
      const bookingCart = this.storageService.getItem('bookingCart');
      let bookingCartJSON;
      if (bookingCart) {
        bookingCartJSON = JSON.parse(bookingCart);
        if (bookingCartJSON.activities) {
          bookingCartJSON.activities.push({id});
        } else {
          bookingCartJSON.activities = [{id}];
        }
      } else {
        bookingCartJSON = {activities: [{id}]};
      }
      this.storageService.setItem('bookingCart', JSON.stringify(bookingCartJSON));
      console.log(bookingCartJSON);
      this.router.navigate(['/booking']);

      this.router.navigate(['/booking']);
    }
  }

}
