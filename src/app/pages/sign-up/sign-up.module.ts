import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { SignUpComponent } from "./containers/sign-up.component";
import { SignUpRoutingModule } from "./sign-up-routing.module";
import {ProfileRoutingModule} from "../profile/profile-routing.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    SignUpComponent
  ],
    imports: [
        CommonModule,
        SignUpRoutingModule,
        ProfileRoutingModule,
        SharedModule
    ]
})
export class SignUpModule {
}
