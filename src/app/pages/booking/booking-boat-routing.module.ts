import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookingBoatComponent} from "./containers/booking-boat.component";

const routes: Routes = [
  {
    path: '',
    component: BookingBoatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingBoatRoutingModule {
}

