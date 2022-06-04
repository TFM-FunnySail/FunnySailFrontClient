import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "../../../../../../FunnySailIonicApp/src/app/core/material/material.module";
import {CardMenuComponent} from "./containers/card-menu.component";
import {RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    CardMenuComponent
  ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        TranslateModule
    ],
  exports: [
    CardMenuComponent
  ]
})
export class CardMenuModule {
}
