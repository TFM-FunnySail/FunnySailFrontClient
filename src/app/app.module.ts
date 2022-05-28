import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {sdkApiConfigurationProvider} from "./shared/services/sdkApiConfigFactory";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppHttpInterceptor} from "./shared/interceptors/app-http.interceptor";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    SharedModule
  ],
  providers: [sdkApiConfigurationProvider,{
    provide: HTTP_INTERCEPTORS,
    useClass: AppHttpInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
