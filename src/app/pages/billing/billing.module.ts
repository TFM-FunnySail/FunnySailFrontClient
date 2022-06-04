import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {CoreModule} from "../../../../../FunnySailIonicApp/src/app/core/core.module";
import {SharedModule} from "../../shared/shared.module";
import {BillingComponent} from "./containers/billing.component";
import {BillingRoutingModule} from "./billing-routing.module";

@NgModule({
  declarations: [
    BillingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    BillingRoutingModule
  ]
})
export class BillingModule{
}
