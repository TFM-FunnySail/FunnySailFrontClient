import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChatComponent} from "./containers/chat.component";

@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChatComponent
  ]
})
export class ChatModule {
}
