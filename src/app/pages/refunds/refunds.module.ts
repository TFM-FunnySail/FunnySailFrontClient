import {NgModule} from '@angular/core';
import {RefundsComponent} from './containers/refunds.component';
import {RefundsRoutingModule} from './refunds-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {CoreModule} from "../../core/core.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    RefundsComponent
  ],
  exports: [
    RefundsComponent
  ],
  imports: [
    RefundsRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule
  ]
})
export class RefundsModule {
}
