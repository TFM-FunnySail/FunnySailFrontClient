import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "../../material/material.module";
import {CardMenuComponent} from "./containers/card-menu.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    CardMenuComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    CardMenuComponent
  ]
})
export class CardMenuModule {
}
