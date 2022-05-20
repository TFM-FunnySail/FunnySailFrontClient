import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginModule} from "./pages/login/login.module";
import {HomeModule} from "./pages/home/home.module";
import {ContactUsModule} from "./pages/contact-us/contact-us.module";
import {SignUpModule} from "./pages/sign-up/sign-up.module";
import {ProfileModule} from "./pages/profile/profile.module";
import {BoatPageModule} from "./pages/boat-page/boat-page.module";


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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
