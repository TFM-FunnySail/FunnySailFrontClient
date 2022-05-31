import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommentComponent} from "./containers/comment.component";
import {MaterialModule} from "../../material/material.module";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    CommentComponent
  ],
    imports: [
        CommonModule,
        MaterialModule,
        SharedModule
    ],
  exports: [
    CommentComponent
  ]
})
export class CommentModule {
}
