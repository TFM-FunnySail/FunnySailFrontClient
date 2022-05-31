import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ActivitiesService, ActivityOutputDTO} from "../../../shared/sdk";

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
            if(resp.id){
              this.activity.id = resp.id;
            }
            if(resp.activityDate){
              this.activity.activityDate = resp.activityDate;
            }
            if(resp.name){
              this.activity.name = resp.name;
            }
            if(resp.active){
              this.activity.active = resp.active;
            }
            if(resp.price){
              this.activity.price = resp.price;
            }
            if(resp.description){
              this.activity.description = resp.description;
            }
          }
        });
    });
  }

  booking(){
    this.router.navigate(['booking/activity/' + this.activity.id]);
  }

}
