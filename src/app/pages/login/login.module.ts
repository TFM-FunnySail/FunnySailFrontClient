import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from "./containers/login.component";
import {LoginRoutingModule} from "./login-routing.module";
import {MaterialModule} from "../../core/material/material.module";

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
  ]
})
export class LoginModule {
}
