import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalFormComponent } from './modal-form.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { ModalFormContentComponent } from './modal-form-content/modal-form-content.component';

@NgModule({
  declarations: [ModalFormComponent, ModalFormContentComponent],
  imports: [SharedModule, FormsModule],
  exports: [ModalFormComponent],
})
export class ModalFormModule {}
