import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RentalHistoryCardComponent} from "./containers/rental-history-card.component";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    RentalHistoryCardComponent
  ],
    imports: [
        CommonModule,
        SharedModule
    ],
  exports: [
    RentalHistoryCardComponent
  ]
})
export class RentalHistoryCardModule {
}
