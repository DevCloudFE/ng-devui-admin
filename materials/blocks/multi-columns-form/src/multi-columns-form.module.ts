import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiColumnsFormComponent } from './multi-columns-form.component';
import {
  SelectModule,
  FormModule,
  TagsInputModule,
  RadioModule,
  CheckBoxModule,
  ButtonModule,
} from 'ng-devui';
import { SharedModule } from 'src/app/@shared/shared.module';

@NgModule({
  declarations: [MultiColumnsFormComponent],
  imports: [
    SharedModule,
    FormsModule,
    SelectModule,
    TagsInputModule,
    CheckBoxModule,
  ],
  exports: [MultiColumnsFormComponent],
})
export class MultiColumnsFormModule {}
