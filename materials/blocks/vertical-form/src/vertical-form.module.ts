import { NgModule } from '@angular/core';
import { VerticalFormComponent } from './vertical-form.component';
import { SharedModule } from 'src/app/@shared/shared.module';

@NgModule({
  declarations: [VerticalFormComponent],
  imports: [
    SharedModule
  ],
  exports: [VerticalFormComponent],
})
export class VerticalFormModule {}
