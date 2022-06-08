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
  loading = true;
  exist = false;
  activity: ActivityOutputDTO;
  image: any = '';
  constructor(private activatedRoute: ActivatedRoute,
              private activateService: ActivitiesService,
              private storageService: StorageService,
              private router: Router) {
    this.activity = {
      id: -1,
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
            this.exist = true;
            this.activity = resp;
            if (resp && resp.activityResources) {
              this.image = resp.activityResources.find(x => x.main)?.uri ??
              resp.activityResources.length > 0 ? resp.activityResources[0].uri : '';
            }
          }
          this.loading = false;
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
          if(!this.existActivity(bookingCartJSON, id)){
            bookingCartJSON.activities.push({id});
          }
        } else {
          bookingCartJSON.activities = [{id}];
        }
      } else {
        bookingCartJSON = {activities: [{id}]};
      }
      this.storageService.setItem('bookingCart', JSON.stringify(bookingCartJSON));
      this.router.navigate(['/booking']);
    }
  }

  private existActivity(bookingCartJSON: any, id: number) {
    for (let act of bookingCartJSON.activities) {
      if (parseInt(act.id) === id) {
        return true;
      }
    }
    return false;
  }
}
