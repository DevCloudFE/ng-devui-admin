import { Injectable } from '@angular/core';
import { Theme } from 'ng-devui/theme';
import { ReplaySubject } from 'rxjs';
import { ThemeType } from 'src/app/@shared/models/theme';
import { LARGE_RADIUS, LARGE_SIZE, MEDIUM_RADIUS, MEDIUM_SIZE, NORMAL_RADIUS, NORMAL_SIZE } from 'src/config/custom-theme';
import { CustomThemeService } from './custom-theme.service';

@Injectable()
export class PersonalizeService {
  themes = [];

  private _themeChange = new ReplaySubject<any>(1); // 主题切换

  configs = [
    {
      name: 'themes',
      icon: 'icon-color',
      items: [],
    },
    {
      name: 'font',
      icon: 'icon-font',
      items: [
        {
          name: 'normal',
          id: 'normal',
          data: NORMAL_SIZE,
        },
        {
          name: 'medium',
          id: 'medium',
          data: MEDIUM_SIZE,
        },
        {
          name: 'large',
          id: 'large',
          data: LARGE_SIZE,
        },
      ],
    },
    {
      name: 'radius',
      icon: 'icon-quick-stop',
      items: [
        {
          name: 'normal',
          id: 'normal',
          data: NORMAL_RADIUS,
        },
        {
          name: 'medium',
          id: 'medium',
          data: MEDIUM_RADIUS,
        },
        {
          name: 'large',
          id: 'large',
          data: LARGE_RADIUS,
        },
      ],
    },
  ];

  defaultCustom = {
    brand: '#343a40',
    isDark: false,
  };

  constructor(private customThemeService: CustomThemeService) {}
  initTheme() {
    if (window['devuiThemes']) {
      //TODO 组件库开源版本这个色值错误
      window['devuiThemes'].devuiDarkTheme.data['devui-placeholder'] = '#8A8A8A';
      this.themes = Object.values(window['devuiThemes']);
      const { brand, isDark } = localStorage.getItem('user-custom-theme-config')
        ? JSON.parse(localStorage.getItem('user-custom-theme-config'))
        : this.defaultCustom;
      const themeData = this.getCustomThemeData(brand, isDark);
      this.setTheme(window['devuiThemes']['customTheme'], themeData, isDark);
      this.configs[0].items = this.themes;
      // 主题设置
      const themeId = localStorage.getItem('theme') || this.themes[0].id;
      // 字号设置
      const fontId = localStorage.getItem('font') || this.configs[1].items[0].id;
      const radiusId = localStorage.getItem('radius') || this.configs[2].items[0].id;

      this.changeTheme(themeId, fontId, radiusId);
    }
  }

  changeTheme(themeId, fId?, rId?) {
    let theme: Theme;
    const themes = (this.configs[0].items as any).filter((i) => {
      return i.id === themeId;
    });
    const { radiusId, fontId, fontData, radiusData } = this.getSizeAndRadiusData(fId, rId);
    const customData = Object.assign({}, fontData, radiusData);
    if (themes.length) {
      theme = themes[0];
    } else {
      // 重置默认
      theme = this.configs[0].items[0];
    }
    theme.data = Object.assign(theme.data, customData);
    window['devuiThemeService'].applyTheme(theme);
    localStorage.setItem('theme', theme.id);
    localStorage.setItem('font', fontId);
    localStorage.setItem('radius', radiusId);
  }

  getCustomThemeData(color, isDark) {
    const themeData = this.customThemeService.genThemeData(
      [
        {
          colorName: 'devui-brand',
          color: color,
        },
      ],
      isDark,
      'hsl'
    );
    return themeData;
  }

  setTheme(theme, themeData, isDark) {
    Object.assign(theme, {
      data: themeData,
      isDark,
    });
  }

  getSizeAndRadiusData(fId?, rId?) {
    const fontId = fId || localStorage.getItem('font') || this.configs[1].items[0].id;
    const radiusId = rId || localStorage.getItem('radius') || this.configs[2].items[0].id;
    const fonts = (this.configs[1].items as any).filter((font) => {
      return font.id === fontId;
    });
    const radiusList = (this.configs[2].items as any).filter((radius) => {
      return radius.id === radiusId;
    });
    return {
      fontId,
      radiusId,
      fontData: fonts[0].data,
      radiusData: radiusList[0].data,
    };
  }

  setCustomThemeData(themeData, color, isDark) {
    const len = this.configs[0].items.length;
    const theme = this.configs[0].items[len - 1];
    const { fontData, radiusData } = this.getSizeAndRadiusData();
    Object.assign(themeData, fontData, radiusData);
    this.setTheme(theme, color, isDark);
    theme.data = Object.assign(theme.data, themeData);
    window['devuiThemeService'].applyTheme(theme);
    localStorage.setItem('user-custom-theme-config', JSON.stringify({ brand: color, isDark }));
    localStorage.setItem('theme', ThemeType.Custom);
  }

  setUiTheme() {
    const currentTheme = window['devuiCurrentTheme'] || ThemeType.Default;
    this._themeChange.next(currentTheme);
  }

  getUiTheme() {
    const themeService = window['devuiThemeService'];
    this.setUiTheme();
    if (!(themeService && themeService.eventBus)) {
      return;
    }
    const themeChangedFunc = () => {
      this.setUiTheme();
    };
    themeService.eventBus.add('themeChanged', themeChangedFunc);
    return this._themeChange.asObservable();
  }

  setRefTheme(themeId) {
    const devuiThemes = Object.values(window['devuiThemes']);
    const themes = devuiThemes.filter((i: Theme) => i.id === themeId);
    if (themes.length) {
      window['devuiThemeService'].applyTheme(themes[0]);
    }
  }
}
