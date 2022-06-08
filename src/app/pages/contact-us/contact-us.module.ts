import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactUsComponent} from "./containers/contact-us.component";
import {ContactUsRoutingModule} from "./contact-us-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {AgmCoreModule} from "@agm/core";
import {SharedModule} from "../../shared/shared.module";
import {CoreModule} from "../../core/core.module";


@NgModule({
  declarations: [
    ContactUsComponent
  ],
    imports: [
        CommonModule,
        ContactUsRoutingModule,
        ReactiveFormsModule,
        AgmCoreModule.forRoot({apiKey: 'AIzaSyBEVLuALTNr5HLHfj6OgQ53ah-HvTS0lG8'}),
        SharedModule,
        CoreModule
    ]
})
export class ContactUsModule {
}
