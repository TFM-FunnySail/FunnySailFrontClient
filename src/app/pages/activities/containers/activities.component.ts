import { Component, OnInit } from '@angular/core';
import { ActivitiesService, ActivityOutputDTO, ActivityOutputDTOGenericResponseDTO } from "../../../shared/sdk";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  activities?: Array<ActivityOutputDTO> | null;
  images: any[] = [];
  form: any;
  loading = true;

  constructor(private formBuilder: FormBuilder,
              protected activitiesService: ActivitiesService,
              protected http: HttpClient,
              protected router: Router) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      minPrice: ['', Validators.min(0) ],
      maxPrice: ['']
    });

    this.activitiesService.apiActivitiesGet(undefined, true).subscribe(resp => {
      const items = this.handlerActivities(resp).items;
      this.activities = items;
      if(items != null) {
        for (let item of items) {
          if(item && item.activityResources) {
            this.images.push(item?.activityResources?.find(x => x.main)?.uri ??
            item?.activityResources.length > 0 ? item?.activityResources[0].uri : '');
          }
        }
      }
      this.loading = false;
    });
  }

  handlerActivities(resp: ActivityOutputDTOGenericResponseDTO) {
    return resp;
  }

  searchAct() {
    this.loading = true;
    if(this.form.valid) {
      let minPrice = undefined;
      if (this.form.get('minPrice').value) {
        minPrice = this.form.get('minPrice').value;
      }
      let maxPrice = undefined;
      if (this.form.get('maxPrice').value) {
        maxPrice = this.form.get('maxPrice').value;
      }
      this.activitiesService.apiActivitiesGet(undefined, undefined, undefined, undefined, minPrice, maxPrice).subscribe(resp => {
        const items = this.handlerActivities(resp).items;
        this.activities = items;
        if(items != null) {
          for (let item of items) {
            if(item && item.activityResources) {
              this.images.push(item?.activityResources?.find(x => x.main)?.uri ??
              item?.activityResources.length > 0 ? item?.activityResources[0].uri : '');
            }
          }
        }
        this.loading = false;
      });
    }
  }

}
