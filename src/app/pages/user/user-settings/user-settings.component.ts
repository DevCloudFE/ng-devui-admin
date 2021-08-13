import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'da-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss'],
})
export class UserSettingsComponent implements OnInit {
  menus = [
    {
      isActive: true,
      title: '基本设置',
    },
    {
      isActive: false,
      title: '安全设置',
    },
    {
      isActive: false,
      title: '消息通知',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  itemClickFn(clickedItem: any) {
    this.menus.forEach((item) => {
      item.isActive = false;
    });
    clickedItem.isActive = true;
  }
}
