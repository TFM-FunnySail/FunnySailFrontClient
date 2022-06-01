import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RefundsBookingComponent} from './containers/refunds-booking.component';

const routes: Routes = [
  {
    path: '',
    component: RefundsBookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefundsBookingRoutingModule {
}

