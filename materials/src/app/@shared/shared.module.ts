import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard';
import {
  LayoutModule,
  AccordionModule,
  SearchModule,
  AvatarModule,
  BadgeModule,
  DropDownModule,
  FormModule,
  TabsModule,
  TextInputModule,
  ToggleModule,
  ButtonModule,
  DrawerModule,
  DCommonModule,
  AlertModule,
  ToastModule,
  TooltipModule,
  RadioModule,
  BreadcrumbModule,
} from 'ng-devui';
import { DaGridModule } from './layouts/da-grid';
import { I18nModule } from 'ng-devui/i18n';
import { TranslateModule } from '@ngx-translate/core';
import { EchartsModule } from './components/echarts';

const DEVUI_MODULES = [
  LayoutModule,
  AccordionModule,
  SearchModule,
  AvatarModule,
  BadgeModule,
  DropDownModule,
  FormModule,
  TabsModule,
  TextInputModule,
  ToggleModule,
  ButtonModule,
  DrawerModule,
  BreadcrumbModule,
  RadioModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TranslateModule,
    DCommonModule,
    AlertModule,
    ClipboardModule,
    ToastModule,
    TooltipModule,
    I18nModule,
    DaGridModule,
    ...DEVUI_MODULES,
  ],
  exports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    I18nModule,
    DaGridModule,
    EchartsModule,
    ...DEVUI_MODULES,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
