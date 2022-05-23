import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RentalHistoryCardComponent} from "./containers/rental-history-card.component";

@NgModule({
  declarations: [
    RentalHistoryCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RentalHistoryCardComponent
  ]
})
export class RentalHistoryCardModule {
}
