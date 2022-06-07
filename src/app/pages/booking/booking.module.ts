import {NgModule} from '@angular/core';
import {BookingComponent} from './containers/booking.component';
import {BookingRoutingModule} from './booking-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import { CoreModule } from "../../core/core.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    BookingComponent
  ],
  imports: [
    BookingRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule
  ]
})
export class BookingModule {
}
