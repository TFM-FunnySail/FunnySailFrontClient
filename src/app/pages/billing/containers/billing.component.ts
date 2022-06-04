import { Component, OnInit } from '@angular/core';
import {
  ClientInvoiceOutputDTO,
  ClientInvoiceService
} from "../../../shared/sdk";
import {ActivatedRoute, Router} from "@angular/router";
import {StorageService} from "../../../shared/services/storage/storage.service";

@Component({
  selector: 'billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})

export class BillingComponent implements OnInit {
  clientInvoice: ClientInvoiceOutputDTO = {};
  clientInvoiceId: string = '';

  constructor(
    protected clientInvoiceService: ClientInvoiceService,
    protected activatedRoute: ActivatedRoute,
    private storageService: StorageService,
    private router: Router
  ) {

    this.activatedRoute.queryParams.subscribe(parameters => {
      this.clientInvoiceId = parameters['id'] as string;
    });

  }

  ngOnInit(): void {
    this.clientInvoiceService.apiClientInvoiceIdGet(parseInt(this.clientInvoiceId)).subscribe(resp => {
      if(resp){
        this.clientInvoice = resp;
      }
    });
    console.log('Billing PAGE')
  }

}
