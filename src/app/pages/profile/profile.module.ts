import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from "./containers/profile.component";
import { ProfileRoutingModule } from "./profile-routing.module";
import { CoreModule } from "../../core/core.module";

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    CoreModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule {
}
