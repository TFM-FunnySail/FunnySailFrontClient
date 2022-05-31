import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from "./containers/login.component";
import {LoginRoutingModule} from "./login-routing.module";
import {MaterialModule} from "../../core/material/material.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    LoginComponent,
  ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        MaterialModule,
        SharedModule,
    ]
})
export class LoginModule {
}
