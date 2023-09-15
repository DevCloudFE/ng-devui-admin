import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HorizontalFormComponent } from './horizontal-form.component';
import { SelectModule, TagsInputModule } from 'ng-devui';
import { SharedModule } from 'src/app/@shared/shared.module';

@NgModule({
  declarations: [HorizontalFormComponent],
  imports: [SharedModule, FormsModule, SelectModule, TagsInputModule],
  exports: [HorizontalFormComponent],
})
export class HorizontalFormModule {}
