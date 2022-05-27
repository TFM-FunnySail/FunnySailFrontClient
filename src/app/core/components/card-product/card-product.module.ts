import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardProductComponent} from "./containers/card-product.component";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    CardProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CardProductComponent
  ]
})
export class CardProductModule {
}
