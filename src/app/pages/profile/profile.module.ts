import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from "./containers/profile.component";
import { ProfileRoutingModule } from "./profile-routing.module";
import { CoreModule } from "../../../../../FunnySailIonicApp/src/app/core/core.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    ProfileComponent
  ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        CoreModule,
        SharedModule
    ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule {
}
