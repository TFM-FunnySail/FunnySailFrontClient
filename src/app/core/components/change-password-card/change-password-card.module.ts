import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChangePasswordCardComponent} from "./containers/change-password-card.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [
    ChangePasswordCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  exports: [
    ChangePasswordCardComponent
  ]
})
export class ChangePasswordCardModule {
}
