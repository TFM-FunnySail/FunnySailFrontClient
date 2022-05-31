import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {CoreModule} from "../../core/core.module";
import {SharedModule} from "../../shared/shared.module";
import {BookingServicesComponent} from "./containers/booking-services.component";
import {BookingServicesRoutingModule} from "./booking-services-routing.module";

@NgModule({
  declarations: [
    BookingServicesComponent
  ],
  imports: [
    BookingServicesRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule
  ]
})
export class BookingServicesModule {
}
