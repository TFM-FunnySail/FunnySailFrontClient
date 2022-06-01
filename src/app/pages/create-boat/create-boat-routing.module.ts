import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CreateBoatComponent} from "./containers/create-boat.component";

const routes: Routes = [
  {
    path: '',
    component: CreateBoatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateBoatRoutingModule {
}
