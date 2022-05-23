import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ProfileComponent } from "./containers/profile.component";
import { ProfileRoutingModule } from "./profile-routing.module";
import {MaterialModule} from "../../core/components/material/material.module";
import {RentalHistoryCardComponent} from "../../core/components/rental-history-card/rental-history-card.component";

@NgModule({
  declarations: [
    ProfileComponent,
    RentalHistoryCardComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule
  ],
  exports: [
    RentalHistoryCardComponent
  ]
})
export class ProfileModule {
}
