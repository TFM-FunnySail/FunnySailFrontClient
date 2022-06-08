import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivityComponent} from "./containers/activity.component";
import {ActivityRoutingModule} from "./activity-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import { CoreModule } from "../../core/core.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    ActivityComponent
  ],
    imports: [
        CommonModule,
        ActivityRoutingModule,
        ReactiveFormsModule,
        CoreModule,
        SharedModule
    ]
})
export class ActivityModule {
}
