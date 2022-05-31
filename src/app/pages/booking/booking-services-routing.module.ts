import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookingServicesComponent} from "./containers/booking-services.component";

const routes: Routes = [
  {
    path: '',
    component: BookingServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingServicesRoutingModule {
}

