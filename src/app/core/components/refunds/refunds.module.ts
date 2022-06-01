import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RefundsComponent} from "./containers/refunds.component";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    RefundsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    RefundsComponent
  ]
})
export class RefundsModule {
}
