import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { I18nUtil } from 'devui-commons/src/i18n/i18n.util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { cloneDeep } from 'lodash-es';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  private destroy$ = new Subject<void>();

  currentLang = I18nUtil.getCurrentLanguage();
  blocksCount = 0;
  blocks = [{
    type: '表单',
    typeEn: 'Form',
    children: [
      <% _.each(formData, function(pd) { %>
        {
          name: '<%= pd.name %>',
          screenshot: '<%= pd.screenshot %>',
          screenshotAlt: '<%= pd.screenshotAlt %>',
          title: '<%= pd.title %>',
          titleEn: '<%= pd.titleEn %>',
          description: '<%= pd.description %>',
          descriptionEn: '<%= pd.descriptionEn %>',
        },<% }); %>
    ]
  },{
    type: '列表',
    typeEn: 'List',
    children: [
      <% _.each(listData, function(pd) { %>
        {
          name: '<%= pd.name %>',
          screenshot: '<%= pd.screenshot %>',
          screenshotAlt: '<%= pd.screenshotAlt %>',
          title: '<%= pd.title %>',
          titleEn: '<%= pd.titleEn %>',
          description: '<%= pd.description %>',
          descriptionEn: '<%= pd.descriptionEn %>',
        },<% }); %>
    ]
  }, 
  {
    type: '图表',
    typeEn: 'Chart',
    children: [
      <% _.each(chartData, function(pd) { %>
        {
          name: '<%= pd.name %>',
          screenshot: '<%= pd.screenshot %>',
          screenshotAlt: '<%= pd.screenshotAlt %>',
          title: '<%= pd.title %>',
          titleEn: '<%= pd.titleEn %>',
          description: '<%= pd.description %>',
          descriptionEn: '<%= pd.descriptionEn %>',
        },<% }); %>
    ]
  },
  {
    type: '其他',
    typeEn: 'Others',
    children: [
      <% _.each(otherData, function(pd) { %>
        {
          name: '<%= pd.name %>',
          screenshot: '<%= pd.screenshot %>',
          screenshotAlt: '<%= pd.screenshotAlt %>',
          title: '<%= pd.title %>',
          titleEn: '<%= pd.titleEn %>',
          description: '<%= pd.description %>',
          descriptionEn: '<%= pd.descriptionEn %>',
        },<% }); %>
    ]
  }];
  flexPlaceHolders: Array<any>;
  filterList: any = [
    { title: '', id: 'form', checked: false },
    { title: '', id: 'list', checked: false },
    { title: '', id: 'chart', checked: false },
    { title: '', id: 'others', checked: false }
  ];
  currFilter: undefined;
  searchedBlocks: Array<any>;

  constructor(private router: Router, private translate: TranslateService) {}

  ngOnInit(): void {
    this.setFilterList(this.translate.instant('overview.filters'));
    this.translate.onLangChange
      .pipe(takeUntil(this.destroy$))
      .subscribe((event: TranslationChangeEvent) => {
        this.currentLang = event.lang;
        this.setFilterList(this.translate.instant('overview.filters'));
    });
    this.blocksCount = this.blocks.reduce((count, block) => count + block.children.length, this.blocksCount)
    this.flexPlaceHolders = new Array(14).fill(0);
    this.searchedBlocks = cloneDeep(this.blocks);
  }

  setFilterList(filters) {
    this.filterList.map(filter => filter.title = filters[filter.id]);
  }

  openUrl(id: string) {
    this.router.navigate(['/', 'materials', id]);
  }

  searchFilter(id) {
    if(this.currFilter !== id) {
      this.currFilter = id;
      this.filterList.map(item => item.checked = false);
      const filterId = this.filterList.findIndex(item => item.id === id);
      this.filterList[filterId].checked = true;
      this.searchedBlocks = this.blocks.filter( item => item.typeEn.toLocaleLowerCase() === id || item.type === id);
    } else {
      this.currFilter = undefined;
      this.searchedBlocks = cloneDeep(this.blocks);
    }
  }

  searchBlocks(event) {
    this.currFilter = undefined;
    this.searchedBlocks = cloneDeep(this.blocks).filter(item => {
      item.children = item.children.filter( block => {
        const res = block.titleEn.toLowerCase().includes(event.toLowerCase()) || 
          block.title.includes(event) || 
          block.descriptionEn.toLowerCase().includes(event.toLowerCase()) ||
          block.description.includes(event);
        return res;
      })
      return item.children.length;
    });
  }
}
