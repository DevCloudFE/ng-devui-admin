import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, Inject } from '@angular/core';
import { DevuiCommonsService } from '../../devui-commons.service';
import { I18nUtil } from '../../i18n/i18n.util';
import { componentSvg, designSvg, ecologySvg, logoSvg, vueDevUISvg } from './icon';

@Component({
  selector: 'd-header-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() menuList = [];
  @Input() selectedItem = {};
  @Output() menuEvent = new EventEmitter<string>();
  curLanguage: string;
  document: Document;
  header: Element;

  commonMenuList = [
    {
      name: '设计',
      enName: 'DevUI Design',
      href: '/design-cn/start',
      target: '_self',
      icon: designSvg
    },
    {
      name: '组件',
      enName: 'Components',
      href: '/components/get-start',
      icon: componentSvg,
    },
    {
      name: '生态',
      enName: 'Ecology',
      icon: ecologySvg,
      children: [
        {
          children: [
            {
              name: 'Vue DevUI',
              description: '基于 Vue3 框架及 DevUI Design 设计风格的跨端组件库',
              enDescription: 'Cross-End component library based on Vue3 and DevUI design style',
              enName: 'Vue DevUI',
              href: 'https://vue-devui.github.io/',
              icon: vueDevUISvg,
              menuName: 'vue'
            },
            {
              name: 'DevUI Admin',
              enName: 'DevUI Admin',
              description: 'DevUI Admin',
              enDescription: 'DevUI Admin',
              href: '/admin-page/home',
              icon: logoSvg,
              menuName: 'admin'
            },
            {
              name: 'DevUI 图标库',
              enName: 'DevUI Assets',
              description: 'DevUI 设计风格图标合集',
              enDescription: 'DevUI design style icon collection',
              href: `/icon/ruleResource`,
              icon: logoSvg,
              menuName: 'icon'
            },
          ],
        },
      ],
    },
  ];

  adminMenuList = [
    {
      name: '文档',
      enName: 'Docs',
      icon: componentSvg,
      href: '/admin-page/docs/getting-started',
    },
    {
      name: 'Admin区块',
      enName: 'Admin Materials',
      icon: componentSvg,
      href: '/admin-materials/',
    }
  ];

  constructor(private commonsService: DevuiCommonsService, @Inject(DOCUMENT) private doc: any) {
    this.document = this.doc;
  }

  ngOnInit(): void {
    this.curLanguage = I18nUtil.getCurrentLanguage();
    this.header = this.document.querySelector('.header-wapper');
    this.commonsService.on('languageEvent').subscribe(term => this.changeLanguage(term));
    if (!this.menuList.length) {
      this.menuList = this.commonMenuList.concat(this.adminMenuList);
    }
    const pathName = window.location.pathname;
    for (let i = 0; i < this.menuList.length; i++) {
      if (this.menuList[i].href === pathName) {
        this.selectedItem = this.menuList[i];
      }
    }
  }

  onSelect(item): void {
    if (item.target === '_self') {
      this.selectedItem = item;
    }
    this.menuChange(item.name);
  }

  menuChange(value: string): void {
    this.menuEvent.emit(value);
  }

  changeLanguage(lang): void {
    this.curLanguage = lang;
  }

}