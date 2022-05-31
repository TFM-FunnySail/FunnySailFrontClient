import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {CoreModule} from "../../core/core.module";
import {SharedModule} from "../../shared/shared.module";
import {BookingActivityComponent} from "./containers/booking-activity.component";
import {BookingActivityRoutingModule} from "./booking-activity-routing.module";

@NgModule({
  declarations: [
    BookingActivityComponent
  ],
  imports: [
    BookingActivityRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule
  ]
})
export class BookingActivityModule {
}
