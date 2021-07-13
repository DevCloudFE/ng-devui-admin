import { NgModule } from '@angular/core';
import { FormComponent } from './form.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { FormLayoutComponent } from './form-layout/form-layout.component';
import { FormRoutingModule } from './form-routing.module';
import {
  TagsInputModule,
  InputNumberModule,
  DatepickerModule,
  PaginationModule,
  ToastModule
} from 'ng-devui';
import { HorizontalFormComponent } from './form-layout/horizontal-form/horizontal-form.component';
import { VerticalFormComponent } from './form-layout/vertical-form/vertical-form.component';
import { MultiColumnsFormComponent } from './form-layout/multi-columns-form/multi-columns-form.component';
import { ModalFormComponent } from './form-layout/modal-form/modal-form.component';
import { ModalFormContentComponent } from './form-layout/modal-form/modal-form-content/modal-form-content.component';
import { AdvanceFormComponent } from './advance-form/advance-form.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { AdminFormModule } from 'src/app/@shared/components/admin-form/admin-form.module';
import { DynamicFormsModule } from 'src/app/@shared/components/dynamic-forms/dynamic-forms.module';

@NgModule({
  declarations: [
    FormComponent,
    BasicFormComponent,
    FormLayoutComponent,
    HorizontalFormComponent,
    VerticalFormComponent,
    MultiColumnsFormComponent,
    ModalFormComponent,
    AdvanceFormComponent,
    ModalFormContentComponent,
    DynamicFormComponent
  ],
  imports: [
    SharedModule,
    FormRoutingModule,
    TagsInputModule,
    DatepickerModule,
    InputNumberModule,
    AdminFormModule,
    PaginationModule,
    DynamicFormsModule,
    ToastModule
  ],
})
export class FormModule {}
