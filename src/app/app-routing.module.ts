import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginModule} from "./pages/login/login.module";
import {HomeModule} from "./pages/home/home.module";
import {ContactUsModule} from "./pages/contact-us/contact-us.module";
import {SignUpModule} from "./pages/sign-up/sign-up.module";
import {ProfileModule} from "./pages/profile/profile.module";
import {BoatPageModule} from "./pages/boat-page/boat-page.module";
import {PaymentModule} from "./pages/payment/payment.module";
import {BoatsModule} from "./pages/boats/boats.module";
import {ActivitiesModule} from "./pages/activities/activities.module";
import {ServicesModule} from "./pages/services/services.module";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () => HomeModule
      },
      {
        path: 'login',
        loadChildren: () => LoginModule
      },
      {
        path: 'contact-us',
        loadChildren: () => ContactUsModule
      },
      {
        path: 'sign-up',
        loadChildren: () => SignUpModule
      },
      {
        path: 'profile',
        loadChildren: () => ProfileModule
      },
      {
        path: 'boat',
        loadChildren: () => BoatPageModule
      },
      {
        path: 'payment',
        loadChildren: () => PaymentModule
      },
      {
        path: 'boats',
        loadChildren: () => BoatsModule
      },
      {
        path: 'activities',
        loadChildren: () => ActivitiesModule
      },
      {
        path: 'services',
        loadChildren: () => ServicesModule
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
