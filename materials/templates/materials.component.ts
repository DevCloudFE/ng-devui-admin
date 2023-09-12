import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { I18nUtil } from 'devui-commons/src/i18n/i18n.util';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BlockData } from './models/block-data';

declare const require: any;

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss'],
})
export class MaterialsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  tab1activeID: string | number = 'tab1';

  currentLang = I18nUtil.getCurrentLanguage();

  previewTitle: string = this.currentLang === 'zh-cn' ? '预览' : 'Preview';

  docsData: any;

  subs: Subscription;

  blocksData: BlockData[] = [<% _.each(blocksData, function(bd) { %>
    {
      id: '<%= bd.id %>',
      title: '<%= bd.title %>',
      titleEn: '<%= bd.titleEn %>',
      npmRepo: '<%= bd.npmRepo %>',
      creator: '<%= bd.creator %>',
      tags: <%= bd.tags %>,
      blockName: '<%= bd.blockName %>',
    },<% }); %>
  ];

  blockData: BlockData;
  constructor(private router: Router, private translate: TranslateService) {
    this.subs = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        for (let i = 0; i < this.blocksData.length; i++) {
          if (event.urlAfterRedirects.endsWith(this.blocksData[i].id)) {
            this.blockData = this.blocksData[i];
            if (this.currentLang === 'en-us') {
              this.docsData = require('!html-loader!markdown-loader!blocks/' +
                this.blockData.id +
                '/README-en.md');
            } else {
              this.docsData = require('!html-loader!markdown-loader!blocks/' +
                this.blockData.id +
                '/README.md');
            }
            break;
          }
        }
      }
    });
  }

  ngOnInit(): void {
    this.translate.onLangChange
      .pipe(takeUntil(this.destroy$))
      .subscribe((event: TranslationChangeEvent) => {
        this.currentLang = event.lang;
        this.previewTitle = this.currentLang === 'zh-cn' ? '预览' : 'Preview';
        if (this.currentLang === 'en-us') {
          this.docsData = require('!html-loader!markdown-loader!blocks/' +
            this.blockData.id +
            '/README-en.md');
        } else {
          this.docsData = require('!html-loader!markdown-loader!blocks/' +
            this.blockData.id +
            '/README.md');
        }
      });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
