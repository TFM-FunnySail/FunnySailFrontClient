import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateBoatComponent} from "./containers/create-boat.component";
import { CreateBoatRoutingModule } from './create-boat-routing.module';
import { CoreModule } from "../../core/core.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    CreateBoatComponent
  ],
  imports: [
    CommonModule,
    CreateBoatRoutingModule,
    CoreModule,
    SharedModule
  ],
  exports: [
    CreateBoatComponent
  ]
})
export class CreateBoatModule {
}
