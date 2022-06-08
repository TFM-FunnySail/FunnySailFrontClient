import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaymentComponent} from "./containers/payment.component";
import {PaymentRoutingModule} from "./payment-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {CoreModule} from "../../core/core.module";

@NgModule({
  declarations: [
    PaymentComponent
  ],
    imports: [
        CommonModule,
        PaymentRoutingModule,
        SharedModule,
        CoreModule
    ]
})

export class PaymentModule {
}
