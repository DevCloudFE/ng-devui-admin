import { Component, OnInit } from '@angular/core';
import getMenu from './menu';
import { DEFAULT_LANG, I18N_LANGUAGES } from './language-config';
import { TranslateService } from '@ngx-translate/core';
import { I18nUtil } from 'devui-commons/src/i18n/i18n.util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ThemeService } from 'ng-devui/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private destroy$ = new Subject<void>();

  currentLang = I18nUtil.getCurrentLanguage();
  innerMenuList = [
    {
      name: '首页',
      enName: 'Home',
      href: '/admin-page/home',
      target: '_blank',
    },
    {
      name: '文档',
      enName: 'Docs',
      href: '/admin-page/docs/getting-started',
      target: '_blank',
    },
    {
      name: 'Admin 区块',
      enName: 'Admin Materials',
      href: '/admin-materials/',
      target: '_self',
    },
  ];

  menu: any;
  themeService: ThemeService;
  isDark: boolean;

  constructor(private translate: TranslateService) {
    this.translate.addLangs(I18N_LANGUAGES);
    translate.setDefaultLang(DEFAULT_LANG);
    translate.use(this.currentLang);
  }

  ngOnInit() {
    this.themeService = window['devuiThemeService'];
    if (this.themeService.eventBus) {
      this.themeService.eventBus.add('themeChanged', this.themeChange);
    }
    this.themeChange();

    this.translate
      .get('menu')
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.updateMenu(res);
      });

    this.translate.onLangChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      const values = this.translate.instant('menu');
      this.updateMenu(values);
    });
  }

  themeChange = () => {
    if (this.themeService.currentTheme.id === 'devui-dark-theme') {
      this.isDark = true;
    } else {
      this.isDark = false;
    }
  };

  toggleLanguage(lang) {
    this.translate.use(lang);
    this.currentLang = lang;
  }

  updateMenu(value) {
    this.menu = getMenu(value);
  }
}
