import { Component } from '@angular/core';
import { DialogService } from 'ng-devui/modal';
import { ModalFormContentComponent } from './modal-form-content/modal-form-content.component';

@Component({
  selector: 'da-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['../form-layout.component.scss'],
})
export class ModalFormComponent {
  constructor(private dialogService: DialogService) {
  }

  openstandardDialog(dialogtype?: string) {
    const results = this.dialogService.open({
      id: 'dialog-service',
      maxHeight: '300px',
      title: 'Sign In',
      content: ModalFormContentComponent,
      backdropCloseable: true,
      dialogtype: dialogtype,
      onClose: () => {
        console.log('on dialog closed');
      },
      buttons: [
        {
          cssClass: 'stress',
          text: 'Confirm',
          handler: ($event: Event) => {
            results.modalInstance.hide();
          },

        },
        {
          id: 'btn-cancel',
          cssClass: 'common',
          text: 'Cancel',
          handler: ($event: Event) => {
            results.modalInstance.hide();
          },

        },
      ],
      data: {
        name: 'Tom',
        age: 10,
        address: 'Chengdu'
      },
    });
  }
}