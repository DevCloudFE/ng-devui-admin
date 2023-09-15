import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRowComponent } from './layout-row.component';
import { LayoutColComponent } from './layout-col.component';
import { RowComponent } from './row.component';
import { ColComponent } from './col.component';
import { DaStyleDirective } from './style.directive';
import { DaFlexDirective } from './flex.directive';

@NgModule({
  declarations: [
    LayoutRowComponent,
    LayoutColComponent,
    RowComponent,
    ColComponent,
    DaStyleDirective,
    DaFlexDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutRowComponent,
    LayoutColComponent,
    RowComponent,
    ColComponent,
    DaStyleDirective,
    DaFlexDirective
  ]
})
export class DaGridModule { }
