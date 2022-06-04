import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivityComponent} from "./containers/activity.component";
import {ActivityRoutingModule} from "./activity-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {CoreModule} from "../../../../../FunnySailIonicApp/src/app/core/core.module";

@NgModule({
  declarations: [
    ActivityComponent
  ],
  imports: [
    CommonModule,
    ActivityRoutingModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class ActivityModule {
}
