import {NgModule} from '@angular/core';
import {BookingBoatRoutingModule} from './booking-boat-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {CoreModule} from "../../core/core.module";
import {SharedModule} from "../../shared/shared.module";
import {BookingBoatComponent} from "./containers/booking-boat.component";

@NgModule({
  declarations: [
    BookingBoatComponent
  ],
  imports: [
    BookingBoatRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule
  ]
})
export class BookingBoatModule {
}
