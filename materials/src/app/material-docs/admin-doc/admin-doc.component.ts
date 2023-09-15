import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import hljs from 'highlight.js';
import { I18nUtil } from 'devui-commons/src/i18n/i18n.util';
import xml from 'highlight.js/lib/languages/xml';
import typescript from 'highlight.js/lib/languages/typescript';
import bash from 'highlight.js/lib/languages/bash';
import json from 'highlight.js/lib/languages/json';
import { NavSpriteComponent } from 'ng-devui';

@Component({
  selector: 'app-admin-doc',
  templateUrl: './admin-doc.component.html',
  styleUrls: ['./admin-doc.component.scss'],
})
export class AdminDocComponent implements OnInit, AfterViewInit, OnDestroy {
  subs: Subscription = new Subscription();
  docsData: any;
  docs: any;
  scrollTarget = document.documentElement;
  navSpriteInstance: NavSpriteComponent = null;
  menu;

  constructor(
    private route: ActivatedRoute,
    private translate: TranslateService
  ) {
    hljs.registerLanguage('bash', bash);
    hljs.registerLanguage('xml', xml);
    hljs.registerLanguage('typescript', typescript);
    hljs.registerLanguage('json', json);
  }

  ngOnInit(): void {
    this.subs.add(
      this.route.data.subscribe((data) => {
        this.docsData = data;
        this.setApi(I18nUtil.getCurrentLanguage());
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        this.setApi(event.lang);
        setTimeout(() => {
          this.navSpriteInstance.getNavData();
          this.setTitle();
        });
      })
    );
    this.setTitle();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.navSpriteInstance.getNavData();
    });
  }

  setTitle() {
    this.menu = I18nUtil.getCurrentLanguage() === 'en-us' ? 'Menu' : '目录';
  }

  setApi(lang) {
    this.docs = this.docsData[lang];
    setTimeout(() => {
      this.refreshView();
    });
  }

  refreshView() {
    Array.from<HTMLElement>(document.querySelectorAll('pre code')).forEach(
      (block) => {
        hljs.highlightBlock(block);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  afterNavInit(e) {
    this.navSpriteInstance = e;
  }
}
