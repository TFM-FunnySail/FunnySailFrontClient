import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { UsersBoatCardComponent } from "./containers/users-boat-card.component";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    UsersBoatCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    UsersBoatCardComponent
  ]
})
export class UsersBoatCardModule {
}
