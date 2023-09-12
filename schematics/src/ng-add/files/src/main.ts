import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ThemeServiceInit, devuiDarkTheme, Theme } from 'ng-devui/theme';
import { AppModule } from './app/app.module';

import {
  infinityTheme,
  sweetTheme,
  provenceTheme,
  deepTheme
} from 'ng-devui/theme-collection';

const customTheme = new Theme({
  id: `customize-theme`,
  name: 'custom',
  cnName: '自定义主题',
  data: {},
  isDark: false
});

ThemeServiceInit({
  infinityTheme,
  sweetTheme,
  provenceTheme,
  deepTheme,
  devuiDarkTheme,
  customTheme
});

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
