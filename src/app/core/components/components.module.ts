import { NgModule } from '@angular/core';
import {CardProductModule} from "./card-product/card-product.module";
import {FooterModule} from "./footer/footer.module";
import {HeaderModule} from "./header/header.module";

@NgModule({
  imports: [
    CardProductModule,
    FooterModule,
    HeaderModule
  ],
  exports: [
    CardProductModule,
    FooterModule,
    HeaderModule
  ]
})
export class ComponentsModule {
}
