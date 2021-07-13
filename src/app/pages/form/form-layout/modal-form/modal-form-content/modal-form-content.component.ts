import { Component, OnInit } from '@angular/core';
import { DValidateRules, FormLayout } from 'ng-devui/form';

@Component({
  selector: 'da-modal-form-content',
  templateUrl: './modal-form-content.component.html'
})
export class ModalFormContentComponent implements OnInit {
  formData = {
    emailAddress: '',
    password: ''
  };

  layout = FormLayout.Horizontal;

  formRules: { [key: string]: DValidateRules } = {
    rule: { message: 'The form verification failed, please check.', messageShowType: 'text' },
    emailAddressRules: {
      validators: [
        { required: true },
        {
          email: true,
          message: 'The correct email address is required.',
        },
      ]
    },
    passwordRules: {
      validators: [{ required: true }]
    }
  }

  ngOnInit() {
    
  }
}
