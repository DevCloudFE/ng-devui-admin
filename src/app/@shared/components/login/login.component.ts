import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { I18nService } from 'ng-devui/i18n';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/@core/services/auth.service';
import { PersonalizeService } from 'src/app/@core/services/personalize.service';
import { LANGUAGES } from 'src/config/language-config';
import { ThemeType } from '../../models/theme';

@Component({
  selector: 'da-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private destroy$ = new Subject();

  tabActiveId = 'tab1';
  showPassword = false;

  tabItems;
  language;
  i18nValues;
  toastMessage;
  languages = LANGUAGES;

  formData = {
    userAccount: 'Admin',
    userAccountPassword: 'DevUI.admin',
    userEmail: 'admin@devui.com',
    userEmailPassword: 'devuiadmin',
  };

  @HostListener('window:keydown.enter')
  onEnter() {
    this.onClick(this.tabActiveId);
  }

  constructor(
    private route: Router,
    private authService: AuthService,
    private translate: TranslateService,
    private i18n: I18nService,
    private personalizeService: PersonalizeService
  ) {}

  ngOnInit(): void {
    this.translate
      .get('loginPage')
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.i18nValues = this.translate.instant('loginPage');
        this.updateTabItems(res);
      });

    this.translate.onLangChange.pipe(takeUntil(this.destroy$)).subscribe((event: TranslationChangeEvent) => {
      this.i18nValues = this.translate.instant('loginPage');
      this.updateTabItems(this.i18nValues);
    });
    this.language = this.translate.currentLang;
    this.personalizeService.setRefTheme(ThemeType.Default);
  }

  onClick(tabId: string) {
    switch (tabId) {
      case 'tab1':
        this.authService.login(this.formData.userAccount, this.formData.userAccountPassword).subscribe(
          (res) => {
            this.authService.setSession(res);
            this.route.navigate(['/']);
          },
          (error) => {
            this.toastMessage = [
              {
                severity: 'error',
                summary: this.i18nValues['noticeMessage']['summary'],
                content: this.i18nValues['noticeMessage']['accountContent'],
              },
            ];
          }
        );
        break;
      case 'tab2':
        this.authService.login(this.formData.userEmail, this.formData.userEmailPassword).subscribe(
          (res) => {
            this.authService.setSession(res);
            this.route.navigate(['/']);
          },
          (error) => {
            this.toastMessage = [
              {
                severity: 'error',
                summary: this.i18nValues['noticeMessage']['summary'],
                content: this.i18nValues['noticeMessage']['emailContent'],
              },
            ];
          }
        );
        break;
      default:
        break;
    }
  }

  onLanguageClick(language) {
    this.language = language;
    localStorage.setItem('lang', this.language);
    this.i18n.toggleLang(this.language);
    this.translate.use(this.language);
  }

  updateTabItems(values) {
    this.tabItems = [
      {
        id: 'tab1',
        title: values['loginWays']['account'],
      },
      {
        id: 'tab2',
        title: values['loginWays']['email'],
      },
    ];
  }

  onKeyUp(e, tabId) {
    if (e.keyCode === 13) {
      this.onClick(tabId);
    }
  }
}
