import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { SignUpComponent } from "./containers/sign-up.component";
import { SignUpRoutingModule } from "./sign-up-routing.module";
import {MaterialModule} from "../../core/material/material.module";
import {ProfileRoutingModule} from "../profile/profile-routing.module";

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    ProfileRoutingModule,
    MaterialModule
  ]
})
export class SignUpModule {
}
