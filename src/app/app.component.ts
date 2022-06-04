import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {StorageService} from "./shared/services/storage/storage.service";
import {AuthService} from "./shared/services/auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FunnySailFrontClient';
  constructor(private translateService: TranslateService,
              private storageService: StorageService,
              private authService: AuthService) {
    this.initTranslate();
    if(!this.authService.isLoggedIn() && this.storageService.getItem('userId')) {
      this.storageService.deleteItem('userId');
      this.storageService.deleteItem("User");
      this.storageService.deleteItem("userEmail");
      this.storageService.deleteItem("boatId");
      this.authService.logout();
    }

  }

  private initTranslate() {
    this.translateService.addLangs(['es', 'en']);
    this.translateService.setDefaultLang('en');
    const browserLang = this.translateService.getBrowserLang() as string;
    this.translateService.use(browserLang.match(/en/) ? browserLang : 'en');
    this.storageService.setItem('lang', this.translateService.currentLang);
  }


}
