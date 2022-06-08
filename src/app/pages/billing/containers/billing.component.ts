import { Component, OnInit } from '@angular/core';
import {
  ClientInvoiceLinesOutputDTO,
  ClientInvoiceOutputDTO,
  ClientInvoiceService
} from "../../../shared/sdk";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})

export class BillingComponent implements OnInit {
  loading = true;
  clientInvoice: ClientInvoiceOutputDTO = {};
  clientInvoiceId: string = '';

  firstName: string = '';
  lastName: string = '';
  phoneNumber: string = '';
  address: string = '';
  city: string = '';
  zipCode: string = '';
  totalAmount: number = 0;
  invoices: Array<ClientInvoiceLinesOutputDTO> = [];
  constructor(
    protected clientInvoiceService: ClientInvoiceService,
    protected activatedRoute: ActivatedRoute
  ) {



  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parameters => {
      this.clientInvoiceId = parameters['id'] as string;
      console.log(this.clientInvoiceId);
      if(this.clientInvoiceId) {
        this.clientInvoiceService.apiClientInvoiceIdGet(parseInt(this.clientInvoiceId)).subscribe(resp => {
          if (resp) {
            console.log(resp)
            this.clientInvoice = resp;
            this.firstName = this.clientInvoice.client?.firstName as string;
            this.lastName = this.clientInvoice.client?.lastName as string;
            this.city = this.clientInvoice.client?.city as string;
            this.address = this.clientInvoice.client?.address as string;
            this.zipCode = this.clientInvoice.client?.zipCode as string;
            this.phoneNumber = this.clientInvoice.client?.phoneNumber as string;
            this.totalAmount = this.clientInvoice.totalAmount as number;
            this.invoices = this.clientInvoice.invoiceLines as Array<ClientInvoiceLinesOutputDTO>;
          }
          this.loading = false;
        });
      }
    });

  }

}
