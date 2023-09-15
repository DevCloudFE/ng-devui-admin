import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface CardAction {
  icon?: string;
  num?: string;
}

export interface Card {
  name?: string;
  id?: number;
  ame?: string;
  title?: string;
  imgSrc?: string;
  subTitle?: string;
  content?: string;
  agreeNum?: number;
  starsNum?: number;
  messageNum?: number;
  actions?: CardAction[];
}


export interface ListPager {
  pageSize?: number;
  pageIndex?: number;
}

@Injectable()
export class ListDataService {
  private cardSource: Card[] = [
    {
      name: 'Angular',
      title: 'Angular',
      content:
        'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计....',
      actions: [
        {
          icon: 'icon-star-o',
          num: '617',
        },
        {
          icon: 'icon-fork',
          num: '100',
        },
      ],
    },
    {
      name: 'DevUI',
      title: 'DevUI',
      content:
        'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      actions: [
        {
          icon: 'icon-star-o',
          num: '617',
        },
        {
          icon: 'icon-fork',
          num: '100',
        },
      ],
    },
    {
      name: 'BootStrap',
      title: 'BootStrap',
      content:
        'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计....',
      actions: [
        {
          icon: 'icon-star-o',
          num: '617',
        },
        {
          icon: 'icon-fork',
          num: '100',
        },
      ],
    },
    {
      name: 'React',
      title: 'React',
      imgSrc:
        'https://codingthesmartway.com/wp-content/uploads/2019/12/logo_react.png',
      content:
        'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计....',
      actions: [
        {
          icon: 'icon-star-o',
          num: '617',
        },
        {
          icon: 'icon-fork',
          num: '100',
        },
      ],
    },
    {
      name: 'Vue',
      title: 'Vue',
      imgSrc: 'https://vuejs.org/images/logo.png',
      content:
        'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计....',
      actions: [
        {
          icon: 'icon-star-o',
          num: '617',
        },
        {
          icon: 'icon-fork',
          num: '100',
        },
      ],
    },
    {
      name: 'Webpack',
      title: 'Webpack',
      imgSrc:
        'https://webpack.js.org/icon-square-small.85ba630cf0c5f29ae3e3.svg',
      content:
        'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计....',
      actions: [
        {
          icon: 'icon-star-o',
          num: '617',
        },
        {
          icon: 'icon-fork',
          num: '100',
        },
      ],
    },
    {
      name: 'DevUI',
      title: 'DevUI',
      content:
        'DevUI是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      actions: [
        {
          icon: 'icon-star-o',
          num: '617',
        },
        {
          icon: 'icon-fork',
          num: '100',
        },
      ],
    },
    {
      name: 'BootStrap',
      title: 'BootStrap',
      content:
        'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计....',
      actions: [
        {
          icon: 'icon-star-o',
          num: '617',
        },
        {
          icon: 'icon-fork',
          num: '100',
        },
      ],
    },
    {
      name: 'React',
      title: 'React',
      imgSrc:
        'https://codingthesmartway.com/wp-content/uploads/2019/12/logo_react.png',
      content:
        'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计....',
      actions: [
        {
          icon: 'icon-star-o',
          num: '617',
        },
        {
          icon: 'icon-fork',
          num: '100',
        },
      ],
    },
    {
      name: 'Vue',
      title: 'Vue',
      imgSrc: 'https://vuejs.org/images/logo.png',
      content:
        'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计....',
      actions: [
        {
          icon: 'icon-star-o',
          num: '617',
        },
        {
          icon: 'icon-fork',
          num: '100',
        },
      ],
    },
    {
      name: 'Webpack',
      title: 'Webpack',
      imgSrc:
        'https://webpack.js.org/icon-square-small.85ba630cf0c5f29ae3e3.svg',
      content:
        'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计....',
      actions: [
        {
          icon: 'icon-star-o',
          num: '617',
        },
        {
          icon: 'icon-fork',
          num: '100',
        },
      ],
    },
    {
      name: 'DevUI',
      title: 'DevUI',
      content:
        'DevUI是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      actions: [
        {
          icon: 'icon-star-o',
          num: '617',
        },
        {
          icon: 'icon-fork',
          num: '100',
        },
      ],
    },
    {
      name: 'BootStrap',
      title: 'BootStrap',
      content:
        'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计....',
      actions: [
        {
          icon: 'icon-star-o',
          num: '617',
        },
        {
          icon: 'icon-fork',
          num: '100',
        },
      ],
    },
    {
      name: 'React',
      title: 'React',
      imgSrc:
        'https://codingthesmartway.com/wp-content/uploads/2019/12/logo_react.png',
      content:
        'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计....',
      actions: [
        {
          icon: 'icon-star-o',
          num: '617',
        },
        {
          icon: 'icon-fork',
          num: '100',
        },
      ],
    },
    {
      name: 'Vue',
      title: 'Vue',
      imgSrc: 'https://vuejs.org/images/logo.png',
      content:
        'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计....',
      actions: [
        {
          icon: 'icon-star-o',
          num: '617',
        },
        {
          icon: 'icon-fork',
          num: '100',
        },
      ],
    },
    {
      name: 'Webpack',
      title: 'Webpack',
      imgSrc:
        'https://webpack.js.org/icon-square-small.85ba630cf0c5f29ae3e3.svg',
      content:
        'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计....',
      actions: [
        {
          icon: 'icon-star-o',
          num: '617',
        },
        {
          icon: 'icon-fork',
          num: '100',
        },
      ],
    },
  ];

  private pagerList(data, pager) {
    return data.slice(
      pager.pageSize * (pager.pageIndex - 1),
      pager.pageSize * pager.pageIndex
    );
  }

  getCardSource(pager: ListPager): Observable<any> {
    return observableOf({
      pageList: this.pagerList(this.cardSource, pager),
      total: this.cardSource.length,
    }).pipe(delay(1000));
  }
}
