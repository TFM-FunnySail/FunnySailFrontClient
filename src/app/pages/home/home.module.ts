import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './containers/home.component';
import {HomeRoutingModule} from './home-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {CoreModule} from "../../core/core.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    declarations: [
        HomeComponent
    ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule
  ]
})
export class HomeModule {
}
