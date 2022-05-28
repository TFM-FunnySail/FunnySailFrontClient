import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommentComponent} from "./containers/comment.component";
import {MaterialModule} from "../../material/material.module";

@NgModule({
  declarations: [
    CommentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CommentComponent
  ]
})
export class CommentModule {
}
