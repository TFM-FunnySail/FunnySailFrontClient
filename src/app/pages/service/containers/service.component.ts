import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ServicesService, ServiceOutputDTO} from "../../../shared/sdk";

@Component({
  selector: 'service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})

export class ServiceComponent implements OnInit {

  exist = false;
  service: ServiceOutputDTO;

  constructor(private activatedRoute: ActivatedRoute,
              private servicesService: ServicesService,
              private router: Router) {
    this.service = {
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
      this.servicesService.apiServicesIdGet(id).subscribe(resp => {
        if(resp){
          console.log(resp);
          this.exist = true;
          if(resp.id){
            this.service.id = resp.id;
          }
          if(resp.name){
            this.service.name = resp.name;
          }
          if(resp.active){
            this.service.active = resp.active;
          }
          if(resp.price){
            this.service.price = resp.price;
          }
          if(resp.description){
            this.service.description = resp.description;
          }
        }
      });
    });
  }

  booking(){
    this.router.navigate(['booking/service/' + this.service.id]);
  }
}
