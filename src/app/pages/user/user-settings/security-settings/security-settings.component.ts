import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'da-security-settings',
  templateUrl: './security-settings.component.html',
  styleUrls: ['../user-settings.component.scss'],
})
export class SecuritySettingsComponent implements OnInit {
  securityItems = [
    {
      title: '账户密码',
      description: '您当前的密码强度为：',
      results: '强'
    },
    {
      title: '密保手机',
      description: '已绑定手机号：',
      results: '188***1234'
    },
    {
      title: '绑定邮箱',
      description: '已绑定邮箱：',
      results: 'devui***admin.com'
    }
  ]

  constructor() {}

  ngOnInit(): void {}
}
