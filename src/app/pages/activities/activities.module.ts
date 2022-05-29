import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivitiesComponent} from "./containers/activities.component";
import {ActivitiesRoutingModule} from "./activities-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {CoreModule} from "../../core/core.module";

@NgModule({
  declarations: [
    ActivitiesComponent
  ],
  imports: [
    CommonModule,
    ActivitiesRoutingModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class ActivitiesModule {
}
