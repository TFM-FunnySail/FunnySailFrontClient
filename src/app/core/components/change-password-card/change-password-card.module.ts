import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChangePasswordCardComponent} from "./containers/change-password-card.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    ChangePasswordCardComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule
    ],
  exports: [
    ChangePasswordCardComponent
  ]
})
export class ChangePasswordCardModule {
}
