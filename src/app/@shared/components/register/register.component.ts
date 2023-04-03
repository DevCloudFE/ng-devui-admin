import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { DialogService, DValidateRules, FormLayout, Message } from 'ng-devui';
import { I18nService } from 'ng-devui/i18n';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PersonalizeService } from 'src/app/@core/services/personalize.service';
import { LANGUAGES } from 'src/config/language-config';
import { ThemeType } from '../../models/theme';

@Component({
  selector: 'da-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  private destroy$ = new Subject<void>();

  showPassword = false;
  showConfirmPassword = false;

  language: string;
  i18nValues: any;
  toastMessage: Message[];
  languages = LANGUAGES;

  formData = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  formRules: { [key: string]: DValidateRules } = {
    emailRules: {
      validators: [{ required: true }, { email: true }],
    },
    passwordRules: {
      validators: [{ required: true }, { minlength: 6 }, { maxlength: 15 }, { pattern: /^[a-zA-Z0-9\d@$!%*?&.]+(\s+[a-zA-Z0-9]+)*$/ }],
      message: 'Enter a password that contains 6 to 15 digits and letters.',
    },
    confirmPasswordRules: [
      { required: true },
      {
        sameToPassWord: this.sameToPassWord.bind(this),
        message: { 'en-us': 'Ensure that the two passwords are the same.', 'zh-cn': '请确保密码一致' },
      },
      { minlength: 6 },
      { maxlength: 15 },
      { pattern: /^[a-zA-Z0-9\d@$!%*?&.]+(\s+[a-zA-Z0-9]+)*$/, message: 'The password must contain 6 to 15 digits and letters.' },
    ],
  };

  verticalLayout: FormLayout = FormLayout.Vertical;

  constructor(
    private route: Router,
    private translate: TranslateService,
    private i18n: I18nService,
    private dialogService: DialogService,
    private personalizeService: PersonalizeService
  ) {}

  ngOnInit(): void {
    this.translate
      .get('registerPage')
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.i18nValues = this.translate.instant('registerPage');
      });

    this.translate.onLangChange.pipe(takeUntil(this.destroy$)).subscribe((event: TranslationChangeEvent) => {
      this.i18nValues = this.translate.instant('registerPage');
    });
    this.language = this.translate.currentLang;
    this.personalizeService.setRefTheme(ThemeType.Default);
  }

  register(result: any) {
    if (result.valid) {
      const results = this.dialogService.open({
        id: 'register-result',
        width: '350px',
        maxHeight: '600px',
        title: this.i18nValues.resultMessage.title,
        content: this.i18nValues.resultMessage.content,
        backdropCloseable: false,
        dialogtype: 'success',
        buttons: [
          {
            cssClass: 'primary',
            text: 'Ok',
            handler: ($event: Event) => {
              this.goToLogin(results);
            },
          },
        ],
      });
      setTimeout(() => {
        this.goToLogin(results);
      }, 3000);
    }
  }

  goToLogin(dialogResult: any) {
    dialogResult.modalInstance.hide();
    this.route.navigate(['/login']);
  }

  onLanguageClick(language: string) {
    this.language = language;
    localStorage.setItem('lang', this.language);
    this.i18n.toggleLang(this.language);
    this.translate.use(this.language);
  }

  sameToPassWord(value: string) {
    return value === this.formData.password;
  }
}
