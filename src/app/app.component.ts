import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {StorageService} from "./shared/services/storage/storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FunnySailFrontClient';
  constructor(private translateService: TranslateService,
              private storageService: StorageService) {
    this.initTranslate();
  }

  private initTranslate() {
    this.translateService.addLangs(['es', 'en']);
    this.translateService.setDefaultLang('en');
    const browserLang = this.translateService.getBrowserLang() as string;
    this.translateService.use(browserLang.match(/en/) ? browserLang : 'en');
    this.storageService.setItem('lang', this.translateService.currentLang);
  }


}
