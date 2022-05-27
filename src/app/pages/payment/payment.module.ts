import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaymentComponent} from "./containers/payment.component";
import {PaymentRoutingModule} from "./payment-routing.module";
import {MaterialModule} from "../../core/material/material.module";

@NgModule({
  declarations: [
    PaymentComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    MaterialModule
  ]
})

export class PaymentModule {
}
