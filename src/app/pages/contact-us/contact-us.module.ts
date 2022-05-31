import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactUsComponent} from "./containers/contact-us.component";
import {ContactUsRoutingModule} from "./contact-us-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../../core/material/material.module";
import {AgmCoreModule} from "@agm/core";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    ContactUsComponent
  ],
    imports: [
        CommonModule,
        ContactUsRoutingModule,
        ReactiveFormsModule,
        MaterialModule,
        AgmCoreModule.forRoot({apiKey: 'AIzaSyBEVLuALTNr5HLHfj6OgQ53ah-HvTS0lG8'}),
        SharedModule
    ]
})
export class ContactUsModule {
}
