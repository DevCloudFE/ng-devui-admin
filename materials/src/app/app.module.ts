import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DevuiCommonsModule } from 'devui-commons/src/devui-commons.module';
// DevUI部分组件依赖angular动画，需要引入animations模块
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { CardModule, SearchModule, TagsModule } from 'ng-devui';
import { ThemePickerModule } from './theme-picker/theme-picker.module';
import { Observable, of } from 'rxjs';
import { I18N } from './language-config';

class I18NLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<Object> {
    return of(I18N[lang]);
  }
}

@NgModule({
  declarations: [AppComponent, OverviewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DevuiCommonsModule,
    CardModule,
    SearchModule,
    TagsModule,
    ThemePickerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: I18NLoader,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
