import { Observable } from 'rxjs';

export interface Notification {
  type: string;
  title: string;
  time: string;
  icon: string;
  id: string;
  status: number;
}

export interface Message {
  image: string;
  title: string;
  content: string;
  time: string;
  id: string;
  status: number;
}

export interface Todo {
  tagName: string;
  tagType: string;
  title: string;
  memo: string;
  id: string;
  status: number;
}

export abstract class NoticeData {
  abstract getNotifications(): Observable<Notification[]>;
  abstract getMessages(): Observable<Message[]>;
  abstract getTodos(): Observable<Todo[]>;
}
