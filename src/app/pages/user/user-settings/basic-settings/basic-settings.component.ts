import { Component, OnInit } from '@angular/core';
import { FormLayout } from 'ng-devui';

@Component({
  selector: 'da-basic-settings',
  templateUrl: './basic-settings.component.html',
  styleUrls: ['./basic-settings.component.scss'],
})
export class BasicSettingsComponent implements OnInit {
  verticalLayout: FormLayout = FormLayout.Vertical;

  labelList = [
    {
      id: 1,
      label: '标签1',
    },
    {
      id: 2,
      label: '标签2',
    },
    {
      id: 3,
      label: '标签3',
    },
  ];

  addedLabelList = [];

  Options = [
    {
      id: 1,
      label: '中国',
    },
  ];

  formData = {
    selectValue: this.Options[0],
  };

  imgSrc = 'https://res.hc-cdn.com/x-roma-components/1.0.10/assets/devui/logo.svg';
  constructor() {}

  ngOnInit(): void {}
}
