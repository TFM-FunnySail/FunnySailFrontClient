import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ServicesService, ServiceOutputDTO} from "../../../shared/sdk";
import {StorageService} from "../../../shared/services/storage/storage.service";

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
              private storageService: StorageService,
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
          this.service = resp;
        }
      });
    });
  }

  booking(){
    const id = this.service.id;
    if (id) {
      const bookingCart = this.storageService.getItem('bookingCart');
      let bookingCartJSON:any;
      if (bookingCart) {
        bookingCartJSON = JSON.parse(bookingCart);
        if (bookingCartJSON.services) {
          let add = true;
          for (let ser of bookingCartJSON.services) {
            if (parseInt(ser.id) === id) {
              add = false;
            }
          }
          if(add){
            bookingCartJSON.services.push({id});
          }
        } else {
          bookingCartJSON.services = [{id}];
          console.log(bookingCartJSON);
        }
      } else {
        bookingCartJSON = {services: [{id}]};
      }
      this.storageService.setItem('bookingCart', JSON.stringify(bookingCartJSON));
      console.log(bookingCartJSON);
      this.router.navigate(['/booking']);
    }

  }
}
