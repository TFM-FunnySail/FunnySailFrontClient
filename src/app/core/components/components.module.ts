import { NgModule } from '@angular/core';
import { FooterModule } from "./footer/footer.module";
import { HeaderModule } from "./header/header.module";
import { RentalHistoryCardModule } from "./rental-history-card/rental-history-card.module";

@NgModule({
  imports: [
    FooterModule,
    HeaderModule,
    RentalHistoryCardModule
  ],
  exports: [
    FooterModule,
    HeaderModule,
    RentalHistoryCardModule
  ]
})
export class ComponentsModule {
}
