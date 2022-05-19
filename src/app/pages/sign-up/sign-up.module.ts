import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { SignUpComponent } from "./containers/sign-up.component";
import { SignUpRoutingModule } from "./sign-up-routing.module";
import {MaterialModule} from "../../core/components/material/material.module";

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    MaterialModule
  ]
})
export class SignUpModule {
}
