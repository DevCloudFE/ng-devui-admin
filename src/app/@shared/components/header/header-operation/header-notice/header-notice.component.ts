import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Message, Notification, Todo } from 'src/app/@core/data/noticeData';
import { NoticeDataService } from 'src/app/@core/mock/notice-data.service';

@Component({
  selector: 'da-header-notice',
  templateUrl: './header-notice.component.html',
  styleUrls: ['./header-notice.component.scss'],
})
export class HeaderNoticeComponent implements OnInit {
  @Output() countEvent = new EventEmitter<number>();

  private destroy$ = new Subject<void>();

  tabActiveID: string | number = 'notice';

  tabTitles: any;

  i18nValues: any;

  notifications: Notification[] = [];
  messages: Message[] = [];
  todos: Todo[] = [];

  get noticeTitle() {
    let length = this.notifications.filter((n) => !n.status).length;
    return `${this.tabTitles.notice}(${length})`;
  }

  get messageTitle() {
    let length = this.messages.filter((m) => !m.status).length;
    return `${this.tabTitles.message}(${length})`;
  }

  get todoTitle() {
    let length = this.todos.filter((t) => !t.status).length;
    return `${this.tabTitles.todo}(${length})`;
  }

  constructor(private noticeService: NoticeDataService, private translate: TranslateService) {}

  ngOnInit() {
    this.translate
      .get('notice')
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.i18nValues = this.translate.instant('notice');
        this.tabTitles = {
          notice: this.i18nValues['notificationTabName'],
          message: this.i18nValues['messageTabName'],
          todo: this.i18nValues['todoTabName'],
        };
      });

    this.translate.onLangChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.i18nValues = this.translate.instant('notice');
      this.tabTitles = {
        notice: this.i18nValues['notificationTabName'],
        message: this.i18nValues['messageTabName'],
        todo: this.i18nValues['todoTabName'],
      };
    });
    this.noticeService.getNotifications().subscribe((notifications) => {
      this.notifications = notifications;
    });
    this.noticeService.getMessages().subscribe((messages) => {
      this.messages = messages;
    });
    this.noticeService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
    setTimeout(() => {
      this.countEvent.emit(this.notifications.length + this.messages.length + this.todos.length);
    });
  }

  handleNoticeClick(type: string, id: string) {
    if (type === 'notice') {
      let index = this.notifications.findIndex((n) => n.id === id);
      this.notifications[index].status = 1;
      this.countEvent.emit(
        this.notifications.filter((n) => !n.status).length +
          this.messages.filter((m) => !m.status).length +
          this.todos.filter((t) => !t.status).length
      );
    }
    if (type === 'message') {
      let index = this.messages.findIndex((m) => m.id === id);
      this.messages[index].status = 1;
      this.countEvent.emit(
        this.notifications.filter((n) => !n.status).length +
          this.messages.filter((m) => !m.status).length +
          this.todos.filter((t) => !t.status).length
      );
    }
    if (type === 'todo') {
      let index = this.todos.findIndex((t) => t.id === id);
      this.todos[index].status = 1;
      this.countEvent.emit(
        this.notifications.filter((n) => !n.status).length +
          this.messages.filter((m) => !m.status).length +
          this.todos.filter((t) => !t.status).length
      );
    }
  }

  handleClean(type: string) {
    if (type === 'notice') {
      this.notifications = [];
      this.countEvent.emit(this.messages.filter((m) => !m.status).length + this.todos.filter((t) => !t.status).length);
    }
    if (type === 'message') {
      this.messages = [];
      this.countEvent.emit(this.notifications.filter((n) => !n.status).length + this.todos.filter((t) => !t.status).length);
    }
    if (type === 'todo') {
      this.todos = [];
      this.countEvent.emit(this.notifications.filter((n) => !n.status).length + this.messages.filter((m) => !m.status).length);
    }
  }
}
