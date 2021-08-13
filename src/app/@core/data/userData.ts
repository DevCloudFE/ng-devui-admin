import { Observable } from 'rxjs';

export interface Team {
  name?: string;
  label?: string;
}

export interface User {
  imgSrc?: string;
  name?: string;
  title?: string;
  assign?: string;
  group?: string;
  address?: string;
  tags?: any[];
  teams?: Team[];
}

export interface Article {
  id?: string;
  title?: string;
  desc?: string;
  author?: string;
  articleUrl?: string;
  starNum?: number;
  agree?: number;
  message?: number;
  authorUrl?: string;
  articlePlatform?: string;
}

export interface Project {
  id?: string;
  title?: string;
  desc?: string;
  imgSrc?: string;
}

export abstract class UserData {
  abstract getUser(): Observable<User>;
  abstract getArticles(): Observable<Article[]>;
  abstract getProjects(): Observable<Project[]>;
}
