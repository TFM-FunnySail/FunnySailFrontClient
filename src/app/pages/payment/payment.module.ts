import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaymentComponent} from "./containers/payment.component";
import {PaymentRoutingModule} from "./payment-routing.module";
import {MaterialModule} from "../../../../../FunnySailIonicApp/src/app/core/material/material.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    PaymentComponent
  ],
    imports: [
        CommonModule,
        PaymentRoutingModule,
        MaterialModule,
        SharedModule
    ]
})

export class PaymentModule {
}
