import { NgModule } from '@angular/core';
import { MaterialModule } from '../../../../FunnySailIonicApp/src/app/core/material/material.module';
import { RouterModule } from '@angular/router';
import {SinfotoPipe} from "./pipes/sinfoto.pipe";
import {TranslateModule} from "@ngx-translate/core";
@NgModule({
  imports: [
    MaterialModule,
    RouterModule,
    TranslateModule
  ],
  providers: [
  ],
  exports: [
    MaterialModule,
    RouterModule,
    SinfotoPipe,
    TranslateModule
  ],
  declarations: [SinfotoPipe]
})
export class SharedModule {
}
