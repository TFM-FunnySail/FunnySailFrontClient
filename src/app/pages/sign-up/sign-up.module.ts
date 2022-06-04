import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { SignUpComponent } from "./containers/sign-up.component";
import { SignUpRoutingModule } from "./sign-up-routing.module";
import {MaterialModule} from "../../../../../FunnySailIonicApp/src/app/core/material/material.module";
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
        MaterialModule,
        SharedModule
    ]
})
export class SignUpModule {
}
