import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormLayout } from 'ng-devui';
import { FormConfig } from './admin-form.type';

@Component({
  selector: 'da-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.scss'],
})
export class AdminFormComponent implements OnInit {
  @Input() formConfig: FormConfig = {
    layout: FormLayout.Horizontal,
    labelSize: 'sm',
    items: [],
  };

  _formData: any = {};

  @Input() set formData(val: any) {
    this._formData = JSON.parse(JSON.stringify(val));
  }

  @Output() submitted = new EventEmitter();

  @Output() canceled = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  submitPlanForm({ valid }: { valid: boolean }) {
    if (valid) {
      this.submitted.emit(this._formData);
    }
  }

  cancel() {
    this.canceled.emit();
  }
}
