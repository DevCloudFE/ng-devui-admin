import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DValidateRules, FormLayout } from 'ng-devui';
import { DynamicFormsService } from './dynamic-forms.service';

@Component({
  selector: 'da-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.scss'],
})
export class DynamicFormsComponent implements OnInit {
  _formItems: any;

  @Input() set formItems(formItems: any) {
    if (formItems) {
      this._formItems = this.formService.getFormItems(formItems);
    }
  }

  get formItems() {
    return this._formItems;
  }

  @Input() layout = FormLayout.Horizontal;
  @Input() labelSize: 'sm' | '' | 'lg' = '';
  @Input() labelAlign: 'start' | 'center' | 'end' = 'start';
  @Input() formRules: DValidateRules;
  @Input() showLoading = true;
  @Input() formSubmitData: any;
  @Input() showSubmitBtn: boolean = true;
  @Input() showResetBtn: boolean = true;
  @Input() submitBtnContent: string = 'Submit';
  @Input() resetBtnContent: string = 'Reset';
  @Output() formSubmit = new EventEmitter<any>();

  constructor(private formService: DynamicFormsService) {}

  ngOnInit(): void {}

  submitForm(event: any) {
    this.formSubmit.emit(event);
  }
}
