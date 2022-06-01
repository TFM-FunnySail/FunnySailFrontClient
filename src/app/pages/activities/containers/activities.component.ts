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

  form: any;

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

    this.activitiesService.apiActivitiesGet().subscribe(resp => {
      this.activities = this.handlerActivities(resp).items;
    });
  }

  handlerActivities(resp: ActivityOutputDTOGenericResponseDTO) {
    return resp;
  }

  searchAct() {
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
        this.activities = this.handlerActivities(resp).items;
      });
    }
  }

}
