import zhCN from '../assets/i18n/zh-CN';
import enUS from '../assets/i18n/en-US';

export const LANGUAGES = [
  {
    code: 'zh-cn',
    lang: '简体中文',
    prefix: 'CN',
  },
  {
    code: 'en-us',
    lang: 'English',
    prefix: 'US',
  },
];

export const I18N_LANGUAGES = ['zh-cn', 'en-us'];
export const DEFAULT_LANG = 'zh-cn';

export const I18N = {
  'zh-cn': zhCN,
  'en-us': enUS,
};
