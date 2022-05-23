import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from "./containers/footer.component";
import {ChatModule} from "../chat/chat.module";

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    ChatModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule {
}
