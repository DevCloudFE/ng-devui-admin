import { NgModule } from '@angular/core';
import { PageTitleComponent } from './page-title.component';
import { SharedModule } from 'src/app/@shared/shared.module';

@NgModule({
  declarations: [PageTitleComponent],
  imports: [SharedModule],
  exports: [PageTitleComponent],
})
export class PageTitleModule {}
