import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'da-message-notification',
  templateUrl: './message-notification.component.html',
  styleUrls: ['../user-settings.component.scss'],
})
export class MessageNotificationComponent implements OnInit {
  messageItems = [
    {
      title: '账户密码',
      description: '账户相关信息将以站内信的形式通知',
    },
    {
      title: '系统消息',
      description: '系统消息将以站内信的形式通知'
    },
    {
      title: '服务通知',
      description: '服务通知将以站内信的形式通知'
    },
    {
      title: '待办任务',
      description: '待办任务将以站内信的形式通知'
    }
  ]
  constructor() {}

  ngOnInit(): void {}
}
