import {NgModule} from '@angular/core';
import {RefundsBookingComponent} from './containers/refunds-booking.component';
import {RefundsBookingRoutingModule} from './refunds-booking-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {CoreModule} from "../../core/core.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    RefundsBookingComponent
  ],
  exports: [
    RefundsBookingComponent
  ],
  imports: [
    RefundsBookingRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule
  ]
})
export class RefundsBookingModule {
}
