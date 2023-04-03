import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Item, ListData, Card, ListPager } from '../data/listData';

@Injectable()
export class ListDataService extends ListData {
  private basicData: Item[] = [
    {
      id: '230000213706283786',
      title: 'Yriqtjdjd Omdfdvqxe Xxlfgjtnj Hsyf Qecu',
      priority: 'Medium',
      iteration: 'iteration',
      assignee: 'Shirley Martin',
      status: 'Stuck',
      timeline: '1985-01-10',
      children: [
        {
          id: '230000132101025982',
          title: 'Volbp Wdosdfbo Ukme Szbgjmeo Kodfsbn Aawyirm Rmbobdyn',
          priority: 'Low',
          iteration: 'iteration',
          assignee: 'Daniel Martinez',
          status: 'Done',
          timeline: '2008-08-02',
        },
        {
          id: '230000337101025982',
          title: 'Volbp Wdobo Ukme Szbgjmasfsaeo Kobn Aawyirm Rmbobdyn',
          priority: 'Low',
          iteration: 'iteration',
          assignee: 'Daniel Martinez',
          status: 'Done',
          timeline: '2008-08-02',
          children: [
            {
              id: '22000098860224174X',
              title: 'Ozhtysdfax Wfppasdf Essvpkjrx Havonov Cdcmgmggnj Vqwcwd Ooolirn',
              priority: 'High',
              iteration: 'iteration',
              assignee: 'Margaret Clark',
              status: '',
              timeline: '2015-05-08',
            },
            {
              id: '140000197123426183',
              title: 'Govfunhwa Gkvcrasdfv Uvbq Gqyrasdfwntx Ofnnuwrnh',
              priority: 'Low',
              iteration: 'iteration',
              assignee: 'Jason Rodriguez',
              status: 'Done',
              timeline: '1994-02-08',
            },
            {
              id: '440000123807134089',
              title: 'Rbhasdf Wklmth Xkeg Iasduzan Isufy',
              priority: 'Medium',
              iteration: 'iteration',
              assignee: 'Kenneth Robinson',
              status: 'Done',
              timeline: '2017-02-04',
            },
          ],
        },
        {
          id: '521230200110166246',
          title: 'Rrqdasfcneg Iknmasdf Tbo',
          priority: 'Medium',
          iteration: 'iteration',
          assignee: 'Paul Hernandez',
          status: 'Stuck',
          timeline: '2017-02-01',
        },
      ],
    },
    {
      id: '710000111203093702',
      title: 'Hwgx Vkasdfdg Kfap Tke Miyxg Hyelo',
      priority: 'Low',
      iteration: 'iteration',
      assignee: 'Michael Walker',
      status: 'Stuck',
      timeline: '2018-08-04',
    },
    {
      id: '230000123101025982',
      title: 'Volbp Wdobasdo Ukme Szbgjmeo Kobn Aawyirm Rmbobdyn',
      priority: 'Low',
      iteration: 'iteration',
      assignee: 'Daniel Martinez',
      status: 'Done',
      timeline: '2008-08-02',
    },
    {
      id: '520000990110166246',
      title: 'Rrqcneg Iknasdfm Tboasd',
      priority: 'Medium',
      iteration: 'iteration',
      assignee: 'Paul Hernandez',
      status: 'Stuck',
      timeline: '2017-02-01',
    },
    {
      id: '22000019860114174X',
      title: 'Ozhtyax Wfpasdp Efssvpkjrx Havonov Cdcmgmggnj Vqwcwd Ooolirn',
      priority: 'High',
      iteration: 'iteration',
      assignee: 'Margaret Clark',
      status: '',
      timeline: '2015-05-08',
    },
    {
      id: '140000197127226183',
      title: 'Govfunhwasdfa Gkvcrv Uvbq Gqyrwntx Ofnnuwrnh',
      priority: 'Low',
      iteration: 'iteration',
      assignee: 'Jason Rodriguez',
      status: 'Done',
      timeline: '1994-02-08',
    },
    {
      id: '440000203337134089',
      title: 'Rbh Wklmasdfth Xkeg Iuzaasdfn Isufy',
      priority: 'Medium',
      iteration: 'iteration',
      assignee: 'Kenneth Robinson',
      status: 'Done',
      timeline: '2017-02-04',
    },
    {
      id: '110000112502028524',
      title: 'Zcbapasdf Qqasoyxrimw Hndekkk',
      priority: 'Medium',
      iteration: 'iteration',
      assignee: 'Jason Garcia',
      status: 'Done',
      timeline: '2009-09-09',
    },
    {
      id: '361234199102159374',
      title: 'Sarsadfbgroo Rpru Krasdfzhklgihv Vfgha Bunyqz',
      priority: 'Medium',
      iteration: 'iteration',
      assignee: 'Michelle Lee',
      status: 'Done',
      timeline: '2019-02-22',
    },
    {
      id: '222000200702210206',
      title: 'asdfTasdfksno Nvsche Rmysrkwsy Qxjvulnsd Rzo',
      priority: 'Medium',
      iteration: 'iteration',
      assignee: 'Ruth Anderson',
      status: 'Done',
      timeline: '1980-01-05',
    },
    {
      id: '123400201207262146',
      title: 'Masdfcpnwxqws Dfqrasdfamphi Iasdfpl',
      priority: 'Medium',
      iteration: 'iteration',
      assignee: 'Susan Garcia',
      status: 'Done',
      timeline: '1972-01-14',
    },
    {
      id: '369999199409270026',
      title: 'Lwomkasdfvcng Hwasdwj Hhjsadxlz',
      priority: 'High',
      iteration: 'iteration',
      assignee: 'Kevin Johnson',
      status: 'Done',
      timeline: '1991-06-03',
    },
    {
      id: '512344201603203501',
      title: 'Mjsdffflwan Oebhykk Ppjpy Itnxlw Jasdqtm Lcsloswa',
      priority: 'Low',
      iteration: 'iteration',
      assignee: 'Jennifer Harris',
      status: 'Stuck',
      timeline: '2014-08-09',
    },
    {
      id: '1354321197712017750',
      title: 'Sdudsadflc Hcrfkaz Kufynndl Oprvfsh Teipjsd',
      priority: 'High',
      iteration: 'iteration',
      assignee: 'Kimberly Harris',
      status: 'Stuck',
      timeline: '1990-12-12',
    },
    {
      id: '510900201304014163',
      title: 'Blhh Pdisxhqkl Ixnj Erasdfbpeel Bjuvr Cdngo',
      priority: 'High',
      iteration: 'iteration',
      assignee: 'Angela Martinez',
      status: '',
      timeline: '2005-04-01',
    },
    {
      id: '222000199903017685',
      title: 'Bjzruarasdfho Yqwrkksnkb Gsjr Otwbvihju',
      priority: 'Medium',
      iteration: 'iteration',
      assignee: 'Ronald Hernandez',
      status: 'Working on it',
      timeline: '2016-07-01',
    },
    {
      id: '824321198503197802',
      title: 'Zjsafc Jwtasdfut Mftvcu Ctyasflolht Xcdi',
      priority: 'Low',
      iteration: 'iteration',
      assignee: 'Edward Wilson',
      status: 'Stuck',
      timeline: '1989-03-29',
    },
    {
      id: '829998201707240870',
      title: 'Cbkssadfh Iswxgasdfkytcw Pmsafbzpv Hphtfnxw',
      priority: 'High',
      iteration: 'iteration',
      assignee: 'Betty Lewis',
      status: 'Done',
      timeline: '1987-09-21',
    },
    {
      id: '461234197810188840',
      title: 'Vmjjt Qpqjcb Ffwmwnxdn Tfasdften Yidwthcsafi',
      priority: 'Low',
      iteration: 'iteration',
      assignee: 'Angela Jones',
      status: 'Done',
      timeline: '2003-03-20',
    },
    {
      id: '133434198908073513',
      title: 'Avkacxzqab Bfxasdftwexs Basdfuwwvxe',
      priority: 'High',
      iteration: 'iteration',
      assignee: 'Anthony Jones',
      status: 'Stuck',
      timeline: '2003-02-22',
    },
  ];

  private cardSource: Card[] = [
    {
      name: 'Angular9',
      title: 'Angular9',
      content: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念...',
      actions: [
        {
          icon: 'icon-star-o',
          num: '200',
        },
        {
          icon: 'icon-fork',
          num: '300',
        },
      ],
    },
    {
      name: 'NG-evUI',
      title: 'NG-DevUI',
      content:
        'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      actions: [
        {
          icon: 'icon-star-o',
          num: '2000',
        },
        {
          icon: 'icon-fork',
          num: '2000',
        },
      ],
    },
    {
      name: 'BootStrap',
      title: 'BootStrap',
      content: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相...',
      actions: [
        {
          icon: 'icon-star-o',
          num: '3000',
        },
        {
          icon: 'icon-fork',
          num: '3000',
        },
      ],
    },
    {
      name: 'React',
      title: 'React',
      imgSrc: 'https://codingthesmartway.com/wp-content/uploads/2019/12/logo_react.png',
      content: 'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"...',
      actions: [
        {
          icon: 'icon-star-o',
          num: '4000',
        },
        {
          icon: 'icon-fork',
          num: '4000',
        },
      ],
    },
    {
      name: 'Vue',
      title: 'Vue',
      imgSrc: 'https://vuejs.org/images/logo.png',
      content:
        'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计blablabla....',
      actions: [
        {
          icon: 'icon-star-o',
          num: '5000',
        },
        {
          icon: 'icon-fork',
          num: '5000',
        },
      ],
    },
    {
      name: 'Webpack',
      title: 'Webpack',
      imgSrc: 'https://webpack.js.org/icon-square-small.85ba630cf0c5f29ae3e3.svg',
      content:
        'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计lalalalala....',
      actions: [
        {
          icon: 'icon-star-o',
          num: '6000',
        },
        {
          icon: 'icon-fork',
          num: '6000',
        },
      ],
    },
    {
      name: 'DevUI13',
      title: 'DevUI13',
      content:
        'DevUI是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      actions: [
        {
          icon: 'icon-star-o',
          num: '7000',
        },
        {
          icon: 'icon-fork',
          num: '7000',
        },
      ],
    },
    {
      name: 'BootStrap22',
      title: 'BootStrap22',
      content:
        'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计....',
      actions: [
        {
          icon: 'icon-star-o',
          num: '8000',
        },
        {
          icon: 'icon-fork',
          num: '8000',
        },
      ],
    },
    {
      name: 'React11',
      title: 'React11',
      imgSrc: 'https://codingthesmartway.com/wp-content/uploads/2019/12/logo_react.png',
      content:
        'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计....',
      actions: [
        {
          icon: 'icon-star-o',
          num: '9000',
        },
        {
          icon: 'icon-fork',
          num: '9000',
        },
      ],
    },
    {
      name: 'Vue11',
      title: 'Vue22',
      imgSrc: 'https://vuejs.org/images/logo.png',
      content:
        'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计....',
      actions: [
        {
          icon: 'icon-star-o',
          num: '1234',
        },
        {
          icon: 'icon-fork',
          num: '1234',
        },
      ],
    },
    {
      name: 'Webpack33',
      title: 'Webpack33',
      imgSrc: 'https://webpack.js.org/icon-square-small.85ba630cf0c5f29ae3e3.svg',
      content:
        'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计....',
      actions: [
        {
          icon: 'icon-star-o',
          num: '2345',
        },
        {
          icon: 'icon-fork',
          num: '2345',
        },
      ],
    },
    {
      name: 'DevUI12',
      title: 'DevUI12',
      content:
        'DevUI是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计...',
      actions: [
        {
          icon: 'icon-star-o',
          num: '3456',
        },
        {
          icon: 'icon-fork',
          num: '3456',
        },
      ],
    },
    {
      name: 'BootStrap44',
      title: 'BootStrap44',
      content:
        'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计....',
      actions: [
        {
          icon: 'icon-star-o',
          num: '4567',
        },
        {
          icon: 'icon-fork',
          num: '4567',
        },
      ],
    },
    {
      name: 'React55',
      title: 'React55',
      imgSrc: 'https://codingthesmartway.com/wp-content/uploads/2019/12/logo_react.png',
      content:
        'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计....',
      actions: [
        {
          icon: 'icon-star-o',
          num: '5678',
        },
        {
          icon: 'icon-fork',
          num: '5678',
        },
      ],
    },
    {
      name: 'Vue123',
      title: 'Vue123',
      imgSrc: 'https://vuejs.org/images/logo.png',
      content:
        'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计....',
      actions: [
        {
          icon: 'icon-star-o',
          num: '7890',
        },
        {
          icon: 'icon-fork',
          num: '7890',
        },
      ],
    },
    {
      name: 'DevUI Admin',
      title: 'DevUI Admin',
      imgSrc: 'https://webpack.js.org/icon-square-small.85ba630cf0c5f29ae3e3.svg',
      content:
        'DevUI 是面向企业中后台产品的开源前端解决方案，其设计价值观基于"至简"、"沉浸"、"灵活"三种自然与人文相结合的理念，旨在为设计....',
      actions: [
        {
          icon: 'icon-star-o',
          num: '10000',
        },
        {
          icon: 'icon-fork',
          num: '10000',
        },
      ],
    },
  ];

  private pagerList(data: Item[] | Card[], pager: ListPager) {
    return data.slice(pager.pageSize! * (pager.pageIndex! - 1), pager.pageSize! * pager.pageIndex!);
  }

  getListData(pager: ListPager): Observable<any> {
    return observableOf({
      pageList: this.pagerList(this.basicData, pager),
      total: this.basicData.length,
    }).pipe(delay(1000));
  }

  getOriginSource(pager: ListPager): Observable<any> {
    return observableOf({
      pageList: this.pagerList(this.basicData, pager),
      total: this.basicData.length,
    }).pipe(delay(1000));
  }

  getTreeSource(pager: ListPager): Observable<any> {
    return observableOf({
      pageList: this.pagerList(this.basicData, pager),
      total: this.basicData.length,
    }).pipe(delay(1000));
  }

  getCardSource(pager: ListPager): Observable<any> {
    return observableOf({
      pageList: this.pagerList(this.cardSource, pager),
      total: this.cardSource.length,
    }).pipe(delay(1000));
  }
}
