import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivitiesComponent} from "./containers/activities.component";
import {ActivitiesRoutingModule} from "./activities-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {CoreModule} from "../../../../../FunnySailIonicApp/src/app/core/core.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    ActivitiesComponent
  ],
    imports: [
        CommonModule,
        ActivitiesRoutingModule,
        ReactiveFormsModule,
        CoreModule,
        SharedModule
    ]
})
export class ActivitiesModule {
}
