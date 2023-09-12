import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { delay } from 'rxjs/operators';

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
  tags?: string[];
  teams?: Team[];
}

export interface WorkGroup {
  logoSrc: string;
  departmentTitle: string;
  description: string;
  manOfDepartment: string;
  numberOfMembers: number;
}

export interface Project {
  id?: string;
  title?: string;
  desc?: string;
  imgSrc?: string;
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

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: User = {
    imgSrc: 'https://res.hc-cdn.com/x-roma-components/1.0.10/assets/devui/logo.svg',
    name: 'Admin',
    title: '面向企业中后台产品的开源前端解决方案',
    assign: '极致',
    group: 'Group',
    address: '中国',
    tags: ['简单', '敏捷', '丰富', '精致']
  };

  private workGroups: WorkGroup[] = [
    {
      logoSrc:
        'https://res.hc-cdn.com/x-roma-components/1.0.10/assets/devui/logo.svg',
      departmentTitle: 'Cloud BU 某部门',
      description: 'XXX团队终于成立了！',
      manOfDepartment: 'XXX大佬',
      numberOfMembers: 999,
    },
    {
      logoSrc:
        'https://res.hc-cdn.com/x-roma-components/1.0.10/assets/devui/logo.svg',
      departmentTitle: 'DevUI XX部门',
      description: '成就自己成就他人。',
      manOfDepartment: 'Peng',
      numberOfMembers: 200,
    },
    {
      logoSrc:
        'https://res.hc-cdn.com/x-roma-components/1.0.10/assets/devui/logo.svg',
      departmentTitle: '周末吃喝玩乐组织',
      description: '周末约起来，想去哪就去哪。',
      manOfDepartment: 'Tang',
      numberOfMembers: 500,
    },
    {
      logoSrc:
        'https://res.hc-cdn.com/x-roma-components/1.0.10/assets/devui/logo.svg',
      departmentTitle: '可信交流社区',
      description: '可信与工程交流社区',
      manOfDepartment: 'Wang',
      numberOfMembers: 800,
    },
    {
      logoSrc:
        'https://res.hc-cdn.com/x-roma-components/1.0.10/assets/devui/logo.svg',
      departmentTitle: '羽毛球协会',
      description: '羽毛球爱好者集结地',
      manOfDepartment: 'Da Peng',
      numberOfMembers: 500,
    },
  ];

  private articles: Article[] = [
    {
      id: '640000197304282555',
      title: 'DevUI 是面向企业中后台产品的开源前端解决方案',
      desc: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      author: 'Elizabeth Lewis',
      articleUrl: '/pages/list/card',
      articlePlatform: 'Admin社区',
      starNum: 33,
      agree: 69,
      authorUrl: '/pages/user/settings',
      message: 35
    },
    {
      id: '820000199703012301',
      title: 'DevUI 是面向企业中后台产品的开源前端解决方案',
      desc: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      author: 'Nancy Smith',
      articleUrl: '/pages/list/card',
      articlePlatform: 'Admin社区',
      starNum: 77,
      agree: 34,
      authorUrl: '/pages/user/settings',
      message: 73
    },
    {
      id: '510000201901248355',
      title: 'DevUI 是面向企业中后台产品的开源前端解决方案',
      desc: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      author: 'Joseph Moore',
      articleUrl: '/pages/list/card',
      articlePlatform: 'Admin社区',
      starNum: 67,
      agree: 30,
      authorUrl: '/pages/user/settings',
      message: 91
    },
    {
      id: '210000199003287765',
      title: 'DevUI 是面向企业中后台产品的开源前端解决方案',
      desc: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      author: 'George Davis',
      articleUrl: '/pages/list/card',
      articlePlatform: 'Admin社区',
      starNum: 63,
      agree: 6,
      authorUrl: '/pages/user/settings',
      message: 29
    },
    {
      id: '430000199211271136',
      title: 'DevUI 是面向企业中后台产品的开源前端解决方案',
      desc: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      author: 'David Miller',
      articleUrl: '/pages/list/card',
      articlePlatform: 'Admin社区',
      starNum: 98,
      agree: 100,
      authorUrl: '/pages/user/settings',
      message: 4
    },
    {
      id: '610000199105240145',
      title: 'DevUI 是面向企业中后台产品的开源前端解决方案',
      desc: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      author: 'Donald Robinson',
      articleUrl: '/pages/list/card',
      articlePlatform: 'Admin社区',
      starNum: 15,
      agree: 35,
      authorUrl: '/pages/user/settings',
      message: 95
    },
    {
      id: '510000201209291648',
      title: 'DevUI 是面向企业中后台产品的开源前端解决方案',
      desc: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      author: 'David Perez',
      articleUrl: '/pages/list/card',
      articlePlatform: 'Admin社区',
      starNum: 2,
      agree: 80,
      authorUrl: '/pages/user/settings',
      message: 58
    },
    {
      id: '530000197108043420',
      title: 'DevUI 是面向企业中后台产品的开源前端解决方案',
      desc: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      author: 'Gary Davis',
      articleUrl: '/pages/list/card',
      articlePlatform: 'Admin社区',
      starNum: 86,
      agree: 83,
      authorUrl: '/pages/user/settings',
      message: 83
    },
    {
      id: '130000198805188377',
      title: 'DevUI 是面向企业中后台产品的开源前端解决方案',
      desc: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      author: 'Carol Williams',
      articleUrl: '/pages/list/card',
      articlePlatform: 'Admin社区',
      starNum: 31,
      agree: 67,
      authorUrl: '/pages/user/settings',
      message: 6
    },
    {
      id: '820000201410156619',
      title: 'DevUI 是面向企业中后台产品的开源前端解决方案',
      desc: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      author: 'Steven Jackson',
      articleUrl: '/pages/list/card',
      articlePlatform: 'Admin社区',
      starNum: 97,
      agree: 39,
      authorUrl: '/pages/user/settings',
      message: 95
    },
    {
      id: '12000019830829269X',
      title: 'DevUI 是面向企业中后台产品的开源前端解决方案',
      desc: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      author: 'Karen Wilson',
      articleUrl: '/pages/list/card',
      articlePlatform: 'Admin社区',
      starNum: 95,
      agree: 15,
      authorUrl: '/pages/user/settings',
      message: 98
    },
    {
      id: '130000199911133614',
      title: 'DevUI 是面向企业中后台产品的开源前端解决方案',
      desc: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      author: 'Shirley Walker',
      articleUrl: '/pages/list/card',
      articlePlatform: 'Admin社区',
      starNum: 75,
      agree: 54,
      authorUrl: '/pages/user/settings',
      message: 78
    },
    {
      id: '41000020090608032X',
      title: 'DevUI 是面向企业中后台产品的开源前端解决方案',
      desc: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      author: 'Ruth Jones',
      articleUrl: '/pages/list/card',
      articlePlatform: 'Admin社区',
      starNum: 62,
      agree: 2,
      authorUrl: '/pages/user/settings',
      message: 6
    },
    {
      id: '450000201401275457',
      title: 'DevUI 是面向企业中后台产品的开源前端解决方案',
      desc: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      author: 'Michael Young',
      articleUrl: '/pages/list/card',
      articlePlatform: 'Admin社区',
      starNum: 37,
      agree: 40,
      authorUrl: '/pages/user/settings',
      message: 82
    },
    {
      id: '410000198205184863',
      title: 'DevUI 是面向企业中后台产品的开源前端解决方案',
      desc: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      author: 'Brenda Johnson',
      articleUrl: '/pages/list/card',
      articlePlatform: 'Admin社区',
      starNum: 88,
      agree: 6,
      authorUrl: '/pages/user/settings',
      message: 11
    },
    {
      id: '360000199712301227',
      title: 'DevUI 是面向企业中后台产品的开源前端解决方案',
      desc: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      author: 'Christopher Moore',
      articleUrl: '/pages/list/card',
      articlePlatform: 'Admin社区',
      starNum: 82,
      agree: 94,
      authorUrl: '/pages/user/settings',
      message: 95
    },
    {
      id: '230000200301314986',
      title: 'DevUI 是面向企业中后台产品的开源前端解决方案',
      desc: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      author: 'Shirley Thompson',
      articleUrl: '/pages/list/card',
      articlePlatform: 'Admin社区',
      starNum: 99,
      agree: 83,
      authorUrl: '/pages/user/settings',
      message: 24
    },
    {
      id: '370000200501172135',
      title: 'DevUI 是面向企业中后台产品的开源前端解决方案',
      desc: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      author: 'Gary Miller',
      articleUrl: '/pages/list/card',
      articlePlatform: 'Admin社区',
      starNum: 11,
      agree: 23,
      authorUrl: '/pages/user/settings',
      message: 66
    },
    {
      id: '120000201208247124',
      title: 'DevUI 是面向企业中后台产品的开源前端解决方案',
      desc: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      author: 'Susan Martinez',
      articleUrl: '/pages/list/card',
      articlePlatform: 'Admin社区',
      starNum: 56,
      agree: 6,
      authorUrl: '/pages/user/settings',
      message: 95
    },
    {
      id: '320000200304197246',
      title: 'DevUI 是面向企业中后台产品的开源前端解决方案',
      desc: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      author: 'William Jackson',
      articleUrl: '/pages/list/card',
      articlePlatform: 'Admin社区',
      starNum: 71,
      agree: 43,
      authorUrl: '/pages/user/settings',
      message: 70
    }
  ];

  private projects: Project[] = [
    {
      id: '150000198410122852',
      title: 'DevUI 是面向企业中后台产品的开源前端解决方案',
      desc: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      imgSrc: 'http://devui.huawei.com/components/assets/image1.png'
    },
    {
      id: '450000198811073300',
      title: 'DevUI 是面向企业中后台产品的开源前端解决方案',
      desc: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      imgSrc: 'http://devui.huawei.com/components/assets/image1.png'
    },
    {
      id: '530000201803276639',
      title: 'DevUI 是面向企业中后台产品的开源前端解决方案',
      desc: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      imgSrc: 'http://devui.huawei.com/components/assets/image1.png'
    },
    {
      id: '710000199408086871',
      title: 'DevUI 是面向企业中后台产品的开源前端解决方案',
      desc: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      imgSrc: 'http://devui.huawei.com/components/assets/image1.png'
    },
    {
      id: '540000197705258683',
      title: 'DevUI 是面向企业中后台产品的开源前端解决方案',
      desc: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      imgSrc: 'http://devui.huawei.com/components/assets/image1.png'
    },
    {
      id: '540000200308049030',
      title: 'DevUI 是面向企业中后台产品的开源前端解决方案',
      desc: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      imgSrc: 'http://devui.huawei.com/components/assets/image1.png'
    },
    {
      id: '510000199812191617',
      title: 'DevUI 是面向企业中后台产品的开源前端解决方案',
      desc: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      imgSrc: 'http://devui.huawei.com/components/assets/image1.png'
    },
    {
      id: '330000198306135710',
      title: 'DevUI 是面向企业中后台产品的开源前端解决方案',
      desc: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      imgSrc: 'http://devui.huawei.com/components/assets/image1.png'
    },
    {
      id: '360000197002172855',
      title: 'DevUI 是面向企业中后台产品的开源前端解决方案',
      desc: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      imgSrc: 'http://devui.huawei.com/components/assets/image1.png'
    },
    {
      id: '120000201301298356',
      title: 'DevUI 是面向企业中后台产品的开源前端解决方案',
      desc: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      imgSrc: 'http://devui.huawei.com/components/assets/image1.png'
    },
    {
      id: '110000201312226778',
      title: 'DevUI 是面向企业中后台产品的开源前端解决方案',
      desc: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      imgSrc: 'http://devui.huawei.com/components/assets/image1.png'
    },
    {
      id: '42000019710813161X',
      title: 'DevUI 是面向企业中后台产品的开源前端解决方案',
      desc: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      imgSrc: 'http://devui.huawei.com/components/assets/image1.png'
    }
  ];
  
  constructor() {}

  getUser(): Observable<any> {
    return observableOf(this.user);
  }

  getWorkGroups(): Observable<WorkGroup[]> {
    return observableOf(this.workGroups);
  }

  getArticles(): Observable<any> {
    return observableOf(this.articles).pipe(delay(300));
  }

  getProjects(): Observable<any> {
    return observableOf(this.projects).pipe(delay(300));
  }
}
