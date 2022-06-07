import {NgModule} from '@angular/core';
import {ServicesComponent} from './containers/services.component';
import {ServicesRoutingModule} from './services-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import { CoreModule } from "../../core/core.module";

@NgModule({
  declarations: [
    ServicesComponent
  ],
  exports: [
    ServicesComponent
  ],
  imports: [
    ServicesRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule
  ]
})
export class ServicesModule {
}
