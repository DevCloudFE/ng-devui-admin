import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PersonalizeService } from 'src/app/@core/services/personalize.service';
import { ThemeType } from '../../models/theme';

@Component({
  selector: 'da-personalize',
  templateUrl: './personalize.component.html',
  styleUrls: ['./personalize.component.scss'],
})
export class PersonalizeComponent implements OnInit {
  customColor = '';
  customDark = false;

  themeType = ThemeType;

  currentTheme;

  configs = [];

  themeColors = [
    {
      name: 'Light',
      isDark: false,
      icon: 'icon-code-editor-light',
      colors: [
        '#343a40',
        '#24316c',
        '#673AB7',
        '#4f7dff',
        '#4caf78',
        '#5faa15',
        '#ff6a0d',
        '#f36b7f',
      ],
    },
    {
      name: 'Dark',
      isDark: true,
      icon: 'icon-code-editor-dark',
      colors: [
        '#343a40',
        '#24316c',
        '#673AB7',
        '#4f7dff',
        '#4caf78',
        '#5faa15',
        '#ff6a0d',
        '#f36b7f',
      ],
    },
  ];
  currentValue = {
    themes: localStorage.getItem('theme'),
    font: localStorage.getItem('font'),
    radius: localStorage.getItem('radius'),
  };

  destroy$ = new Subject<void>();

  constructor(private personalizeService: PersonalizeService) {
    this.customColor = this.personalizeService.defaultCustom.brand;
    this.customDark = this.personalizeService.defaultCustom.isDark;
  }

  ngOnInit() {
    this.configs = this.personalizeService.configs;
    this.getCustomColor();
    this.personalizeService
      .getUiTheme()
      .pipe(takeUntil(this.destroy$))
      .subscribe((theme) => {
        this.currentTheme = theme;
      });
  }

  onChange(type, value) {
    switch (type) {
      case 'themes':
        this.personalizeService.changeTheme(
          value,
          localStorage.getItem('font'),
          localStorage.getItem('radius')
        );
        return;
      case 'font':
        this.personalizeService.changeTheme(
          localStorage.getItem('theme'),
          value,
          localStorage.getItem('radius')
        );
        return;
      case 'radius':
        this.personalizeService.changeTheme(
          localStorage.getItem('theme'),
          localStorage.getItem('font'),
          value
        );
        return;
    }
  }

  getCustomColor() {
    if (localStorage.getItem('user-custom-theme-config')) {
      const { brand, isDark } = JSON.parse(
        localStorage.getItem('user-custom-theme-config')
      );
      if (brand) {
        this.customColor = brand;
        this.customDark = isDark;
      }
    }
  }

  selectColor(color, theme) {
    if (!window['devuiThemeService']) {
      return;
    }
    this.customColor = color;
    this.customDark = theme.isDark;
    const themeData = this.personalizeService.getCustomThemeData(
      color,
      theme.isDark
    );
    this.personalizeService.setCustomThemeData(themeData, color, theme.isDark);
    this.currentValue.themes = ThemeType.Custom;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
