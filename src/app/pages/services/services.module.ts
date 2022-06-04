import {NgModule} from '@angular/core';
import {ServicesComponent} from './containers/services.component';
import {ServicesRoutingModule} from './services-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {CoreModule} from "../../../../../FunnySailIonicApp/src/app/core/core.module";
import {SharedModule} from "../../shared/shared.module";

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
