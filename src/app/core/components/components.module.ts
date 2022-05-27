import { NgModule } from '@angular/core';
import { CardProductModule } from "./card-product/card-product.module";
import { FooterModule } from "./footer/footer.module";
import { HeaderModule } from "./header/header.module";
import { RentalHistoryCardModule } from "./rental-history-card/rental-history-card.module";

@NgModule({
  imports: [
    CardProductModule,
    FooterModule,
    HeaderModule,
    RentalHistoryCardModule
  ],
  exports: [
    CardProductModule,
    FooterModule,
    HeaderModule,
    RentalHistoryCardModule
  ]
})
export class ComponentsModule {
}
