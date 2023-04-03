import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { DValidateRules } from 'ng-devui';
import { FormLayout } from 'ng-devui';
import { I18nService } from 'ng-devui/i18n';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/@core/services/auth.service';
import { PersonalizeService } from 'src/app/@core/services/personalize.service';
import { LANGUAGES } from 'src/config/language-config';
import { environment } from 'src/environments/environment';
import { ThemeType } from '../../models/theme';

@Component({
  selector: 'da-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private destroy$ = new Subject<void>();

  horizontalLayout: FormLayout = FormLayout.Horizontal;

  tabActiveId: string | number = 'tab1';
  showPassword = false;

  tabItems: any;
  language: string;
  i18nValues: any;
  toastMessage: any;
  languages = LANGUAGES;

  formData = {
    userAccount: 'Admin',
    userAccountPassword: 'DevUI.admin',
    userEmail: 'admin@devui.com',
    userEmailPassword: 'devuiadmin',
  };

  formRules: { [key: string]: DValidateRules } = {
    usernameRules: {
      validators: [
        { required: true },
        { minlength: 3 },
        { maxlength: 20 },
        {
          pattern: /^[a-zA-Z0-9]+(\s+[a-zA-Z0-9]+)*$/,
          message: 'The user name cannot contain characters except uppercase and lowercase letters.',
        },
      ],
    },
    emailRules: {
      validators: [{ required: true }, { email: true }],
    },
    passwordRules: {
      validators: [{ required: true }, { minlength: 6 }, { maxlength: 15 }, { pattern: /^[a-zA-Z0-9\d@$!%*?&.]+(\s+[a-zA-Z0-9]+)*$/ }],
      message: 'Enter a password that contains 6 to 15 digits and letters.',
    },
  };

  @HostListener('window:keydown.enter')
  onEnter() {
    this.onClick(this.tabActiveId);
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private translate: TranslateService,
    private i18n: I18nService,
    private personalizeService: PersonalizeService
  ) {
    this.language = this.translate.currentLang;
  }

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
    this.personalizeService.setRefTheme(ThemeType.Default);

    // oauth认证回调
    this.route.queryParams.pipe(map((param) => param.code)).subscribe((code) => {
      if (code && code.length > 0) {
        setTimeout(() => {
          this.toastMessage = [
            {
              severity: 'success',
              content: this.i18nValues['callbackMessage'],
            },
          ];
        });
      }
    });
  }

  onClick(tabId: string | number) {
    switch (tabId) {
      case 'tab1':
        this.authService.login(this.formData.userAccount, this.formData.userAccountPassword).subscribe(
          (res) => {
            this.authService.setSession(res);
            this.router.navigate(['/']);
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
            this.router.navigate(['/']);
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

  onLanguageClick(language: string) {
    this.language = language;
    localStorage.setItem('lang', this.language);
    this.i18n.toggleLang(this.language);
    this.translate.use(this.language);
  }

  updateTabItems(values: any) {
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

  onKeyUp(e: KeyboardEvent, tabId: string | number) {
    if (e.keyCode === 13) {
      this.onClick(tabId);
    }
  }

  handleAuth(type: string) {
    console.log(type);
    //github oauth配置
    const config = {
      oauth_uri: 'https://github.com/login/oauth/authorize',
      redirect_uri: 'https://devui.design/admin/login',
      client_id: 'ef3ce924fcf915c50910',
    };
    if (!environment.production) {
      config.redirect_uri = 'http://localhost:8001/login';
      config.client_id = 'ecf5e43d804e8e003196';
    }
    window.location.href = `${config.oauth_uri}?client_id=${config.client_id}&redirect_uri=${config.redirect_uri}`;
  }
}
