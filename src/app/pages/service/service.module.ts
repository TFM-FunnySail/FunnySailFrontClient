import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServiceComponent} from "./containers/service.component";
import {ServiceRoutingModule} from "./service-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {CoreModule} from "../../../../../FunnySailIonicApp/src/app/core/core.module";

@NgModule({
  declarations: [
    ServiceComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class ServiceModule {
}
