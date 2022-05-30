import { Component, OnInit } from '@angular/core';
import {BoatOutputDTO, BoatOutputDTOGenericResponseDTO, BoatsService, BoatTypeOutputDTO} from "../../../shared/sdk";
import { HttpClient } from "@angular/common/http";
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'boats',
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.scss']
})
export class BoatsComponent implements OnInit {

  boats?: Array<BoatOutputDTO> | null;
  boatTypes: BoatTypeOutputDTO[] = [];

  form: any;

  constructor(private formBuilder: FormBuilder,
              protected boatsApiService: BoatsService,
              protected http: HttpClient,
              protected router: Router,
              private activatedRoute: ActivatedRoute) {
    this.setBoatTypes();

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      initialDate: [''],
      endDate: [''],
      typeBoat: ['']
    });

    this.activatedRoute.queryParams.subscribe(parameters => {
      let type = undefined;
      if(parameters['type'] && parameters['type'] !== '')
      {
        type = parameters['type'];
        this.form.get('typeBoat').setValue(type);
      }
      let initialDate = undefined;
      if(parameters['initialDate'] && parameters['initialDate'] !== '')
      {
        initialDate = decodeURIComponent(parameters['initialDate']);
        console.log(initialDate);
        this.form.get('initialDate').setValue(initialDate);
      }
      let endDate = undefined;
      if(parameters['endDate'] && parameters['endDate'] !== '')
      {
        endDate = decodeURIComponent(parameters['endDate']);
        this.form.get('endDate').setValue(endDate);
      }
      this.boatsApiService.apiBoatsGet(undefined, undefined, undefined, type, initialDate, endDate).subscribe(resp => {
        this.boats = this.handlerBoats(resp).items;
      });
    });
  }

  handlerBoats(resp: BoatOutputDTOGenericResponseDTO) {
    return resp;
  }

  searchAct() {
    if(this.form.valid) {
      let type = undefined;
      if (this.form.get('typeBoat').value) {
        type = this.form.get('typeBoat').value;
      }
      let initialDate = undefined;
      if (this.form.get('initialDate').value) {
        const date = this.form.get('initialDate').value as unknown as Date;
        if(this.form.get('initialDate') instanceof Date)
        {
          initialDate = date.toISOString();
        }
      }
      let endDate = undefined;
      if (this.form.get('endDate').value) {
        const date = this.form.get('endDate').value as unknown as Date;
        if(this.form.get('endDate') instanceof Date)
        {
          endDate = date.toISOString();
        }
      }
      this.boatsApiService.apiBoatsGet(undefined, undefined, undefined, type, initialDate, endDate).subscribe(resp => {
        this.boats = this.handlerBoats(resp).items;
      });
    }
  }

  private setBoatTypes() {
    this.boatsApiService.apiBoatsTypesGet()
      .subscribe((resp: BoatTypeOutputDTO[]) => {
        this.boatTypes = resp;
      });
  }
}
