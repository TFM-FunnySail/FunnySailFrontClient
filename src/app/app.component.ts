import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FunnySailFrontClient';
  constructor(private translateService: TranslateService) {
    this.initTranslate();
  }

  private initTranslate() {
    this.translateService.addLangs(['es', 'en']);
    this.translateService.setDefaultLang('es');
    const browserLang = this.translateService.getBrowserLang() as string;
    this.translateService.use(browserLang.match(/es/) ? browserLang : 'es');
  }

}
