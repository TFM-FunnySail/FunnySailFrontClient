import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselComponent} from "./containers/carousel.component";
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MaterialModule} from "../../material/material.module";

@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    MaterialModule
  ],
  exports: [
    CarouselComponent
  ]
})
export class CarouselModule {
}
