import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoatPageComponent} from "./containers/boat-page.component";
import {BoatPageRoutingModule} from "./boat-page-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../../core/components/material/material.module";

@NgModule({
  declarations: [
    BoatPageComponent
  ],
  imports: [
    CommonModule,
    BoatPageRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class BoatPageModule {
}
