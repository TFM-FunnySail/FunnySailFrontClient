import { NgModule } from '@angular/core';
import { MaterialModule } from '../core/material/material.module';
import { RouterModule } from '@angular/router';
import {SinfotoPipe} from "./pipes/sinfoto.pipe";

@NgModule({
  imports: [
    MaterialModule,
    RouterModule
  ],
  providers: [
  ],
  exports: [
    MaterialModule,
    RouterModule,
    SinfotoPipe
  ],
  declarations: [SinfotoPipe]
})
export class SharedModule {
}
