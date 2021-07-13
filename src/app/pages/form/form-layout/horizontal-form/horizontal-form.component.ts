import { Component, OnInit } from '@angular/core';
import { FormLayout } from 'ng-devui';
@Component({
  selector: 'da-horizontal-form',
  templateUrl: './horizontal-form.component.html',
  styleUrls: ['../form-layout.component.scss'],
})
export class HorizontalFormComponent implements OnInit {
  multipleSelectConfig: any;
  layout = FormLayout.Horizontal;

  labelList = [{
    id: 1,
    label: 'OpenSource'
  },
  {
    id: 2,
    label: 'Admin'
  },
  {
    id: 3,
    label: 'DevUI'
  }];

  addedLabelList = [];

  initiatorOptions = [{
    id: 1,
    label: 'Lily'
  },
  {
    id: 2,
    label: 'Goffy'
  },
  {
    id: 3,
    label: 'Nancy'
  }];

  participantOptions = [{
    id: 1,
    label: 'Lily'
  },
  {
    id: 2,
    label: 'Goffy'
  },
  {
    id: 3,
    label: 'Nancy'
  }];

  radioOptions = [{
    id: 4,
    label: 'Manual execution'
  }, {
    id: 5,
    label: 'Daily execution'
  }, {
    id: 6,
    label: 'Weekly execution'
  }];

  formData = {
    selectValue: this.initiatorOptions[1],
    multipleSelectValue: [this.participantOptions[1], this.participantOptions[2]],
    radioValue: {}
  };

  ngOnInit() {
    this.multipleSelectConfig = {
      key: 'multipleSelect',
      label: 'Options(Multiple selection with delete)',
      isSearch: true,
      multiple: 'true',
      labelization: { enable: true, labelMaxWidth: '120px' },
      options: this.participantOptions
    };
  }
}