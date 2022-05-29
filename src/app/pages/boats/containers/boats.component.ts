import { Component, OnInit } from '@angular/core';
import {BoatOutputDTO, BoatOutputDTOGenericResponseDTO, BoatsService, BoatTypeOutputDTO} from "../../../shared/sdk";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
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
              protected router: Router) {

    this.setBoatTypes();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      initialDate: [''],
      endDate: [''],
      typeBoat: ['']
    });

    this.boatsApiService.apiBoatsGet().subscribe(resp => {
      this.boats = this.handlerBoats(resp).items;
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
        console.log(type);
      }
      let initialDate = undefined;
      if (this.form.get('initialDate').value) {
        initialDate = this.form.get('initialDate').value;
      }
      let endDate = undefined;
      if (this.form.get('endDate').value) {
        endDate = this.form.get('endDate').value;
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
