import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {
  BookingService,
  ServiceOutputDTO,
  ServicesService
} from "../../../shared/sdk";
import {StorageService} from "../../../shared/services/storage/storage.service";

@Component({
  selector: 'booking-service',
  templateUrl: './booking-services.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingServicesComponent implements OnInit {
  exist = false;
  service: ServiceOutputDTO;
  serviceId: number = -1;
  form: any;

  constructor(private bookingService: BookingService,
              private servicesService: ServicesService,
              private activatedRoute: ActivatedRoute,
              private storageService: StorageService,
              private formBuilder: FormBuilder,
              private router: Router) {
    this.service = {
      id: -1,
      name: '',
      active: false,
      price: 0,
      description: ''
    };
    console.log("estamos en booking services!!!!")
  }

  ngOnInit() {
    console.log("estamos en booking services!!!!")
    this.activatedRoute.params.subscribe(parameters => {
      this.serviceId = parameters['id'] as number;
      const id = this.serviceId;
      console.log(this.serviceId);
      this.servicesService.apiServicesIdGet(id).subscribe(resp => {
        if (resp) {
          console.log(resp);
          this.exist = true;
          this.service = resp;
        }
      });
    });

    this.form = this.formBuilder.group({
      initialDate: ['', Validators.required],
      endDate: ['',  Validators.required],
      totalPeople: ['',  [Validators.required, Validators.min(0), Validators.max(10)]]
    });
  }

  booking(){
    if(this.form.valid) {
      let initialDate = undefined;
      if (this.form.get('initialDate').value) {
        const date = this.form.get('initialDate').value as unknown as Date;
        console.log(date);
        initialDate = date.toISOString();
        console.log(initialDate);
      }
      let endDate = undefined;
      if (this.form.get('endDate').value) {
        const date = this.form.get('endDate').value as unknown as Date;
        endDate = date.toISOString();
      }

      const totalPeople = this.form.get('totalPeople').value;

      if (this.serviceId) {
        const bookingCart = this.storageService.getItem('bookingCart');
        let bookingCartJSON : any = {};
        if (bookingCart) {
          bookingCartJSON = JSON.parse(bookingCart);
          if (bookingCartJSON.services) {
            bookingCartJSON.services.push({id: this.serviceId, initialDate, endDate, totalPeople});
          } else {
            bookingCartJSON.services = [{id: this.serviceId, initialDate, endDate, totalPeople}];
            console.log(bookingCartJSON);
          }
        } else {
          bookingCartJSON = {services: [{id: this.serviceId, initialDate, endDate, totalPeople}]};
        }
        this.storageService.setItem('bookingCart', JSON.stringify(bookingCartJSON));
        console.log(bookingCartJSON);
        this.router.navigate(['/booking']);
      }
    }
  }

}


