import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from "./containers/profile.component";
import { ProfileRoutingModule } from "./profile-routing.module";
import { CoreModule } from "../../../../../FunnySailIonicApp/src/app/core/core.module";
import {SharedModule} from "../../shared/shared.module";
import {UsersBoatCardModule} from "../../core/components/users-boat-card/users-boat-card.module";

@NgModule({
  declarations: [
    ProfileComponent
  ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        CoreModule,
        SharedModule,
        UsersBoatCardModule
    ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule {
}
