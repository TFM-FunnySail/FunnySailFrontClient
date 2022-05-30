import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RefundsComponent} from './containers/refunds.component';

const routes: Routes = [
  {
    path: '',
    component: RefundsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefundsRoutingModule {
}

