import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginModule} from "./pages/login/login.module";
import {HomeModule} from "./pages/home/home.module";
import {ContactUsModule} from "./pages/contact-us/contact-us.module";


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
