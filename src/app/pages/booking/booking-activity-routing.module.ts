import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookingActivityComponent} from "./containers/booking-activity.component";

const routes: Routes = [
  {
    path: '',
    component: BookingActivityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingActivityRoutingModule {
}

