import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselComponent} from "./containers/carousel.component";
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { SharedModule } from "../../../shared/shared.module";

@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    SharedModule
  ],
  exports: [
    CarouselComponent
  ]
})
export class CarouselModule {
}
