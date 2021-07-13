import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormsComponent } from './dynamic-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { 
  FormModule, 
  ToggleModule, 
  RadioModule, 
  SelectModule, 
  TextareaModule, 
  TextInputModule, 
  CheckBoxModule, 
  ButtonModule, 
  TagsInputModule 
} from 'ng-devui';
import { RadioWidget } from './ui/radio/radio.widget';
import { TextAreaWidget } from './ui/textarea/textarea.widget';
import { TextInputWidget } from './ui/text-input/text-input.widget';
import { CheckboxWidget } from './ui/checkbox/checkbox.widget';
import {  SelectWidget } from './ui/select/select.widget';
import { TagsInputWidget } from './ui/tags-input/tags-input.widget';
import { ToggleWidget } from './ui/toggle/toggle.widget';

@NgModule({
  declarations: [
    DynamicFormsComponent,
    RadioWidget, 
    TextAreaWidget, 
    TextInputWidget,
    CheckboxWidget,
    SelectWidget,
    TagsInputWidget,
    ToggleWidget
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule,
    RadioModule, 
    SelectModule, 
    TextareaModule, 
    ButtonModule,
    TextInputModule, 
    CheckBoxModule,
    ToggleModule,
    TagsInputModule
  ],
  exports: [
    DynamicFormsComponent,
    RadioWidget, 
    TextAreaWidget, 
    TextInputWidget,
    CheckboxWidget,
    SelectWidget,
    TagsInputWidget,
    ToggleWidget
  ]
})
export class DynamicFormsModule {

}

