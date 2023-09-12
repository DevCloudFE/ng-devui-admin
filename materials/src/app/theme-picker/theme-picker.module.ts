import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToggleModule, DropDownModule, RadioModule } from 'ng-devui';

import { ThemePickerComponent } from './theme-picker.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ToggleModule,
    DropDownModule,
    RadioModule,
  ],
  exports: [ThemePickerComponent],
  declarations: [ThemePickerComponent],
  providers: [],
})
export class ThemePickerModule {}
