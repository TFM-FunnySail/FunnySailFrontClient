import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChangePasswordCardComponent} from "./containers/change-password-card.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    ChangePasswordCardComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        SharedModule
    ],
  exports: [
    ChangePasswordCardComponent
  ]
})
export class ChangePasswordCardModule {
}
