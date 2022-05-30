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

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      minPrice: ['', Validators.min(0) ],
      maxPrice: [''],
      initialDate: [''],
      endDate: ['']
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
      let initialDate = undefined;
      if (this.form.get('initialDate').value) {
        const date = this.form.get('initialDate').value as unknown as Date;
        if(this.form.get('initialDate').value instanceof Date)
        {
          initialDate = date.toISOString();
        }
      }
      let endDate = undefined;
      if (this.form.get('endDate').value) {
        const date = this.form.get('endDate').value as unknown as Date;
        if(this.form.get('endDate').value instanceof Date)
        {
          endDate = date.toISOString();
        }
      }
      this.activitiesService.apiActivitiesGet(undefined, undefined, initialDate, endDate, minPrice, maxPrice).subscribe(resp => {
        this.activities = this.handlerActivities(resp).items;
      });
    }
  }

}
