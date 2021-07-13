import pages from './en-US/page';
import form from './en-US/form';
import abnormal from './en-US/abnormal';
import personalize from './en-US/personalize';
import list from './en-US/list';
import dashboard from './en-US/dashboard';
import login from './en-US/login';
import register from './en-US/register';
import sideSetting from './en-US/side-setting';
import header from './en-US/header';
import footer from './en-US/footer';
import authGuard from './en-US/auth-guard';
import notice from './en-US/notice';

export default {
  ...pages,
  ...form,
  ...list,
  ...abnormal,
  ...personalize,
  ...dashboard,
  ...login,
  ...register,
  ...sideSetting,
  ...header,
  ...footer,
  ...authGuard,
  ...notice,
};
