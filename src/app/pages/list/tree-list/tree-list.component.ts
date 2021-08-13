import { Component, OnInit, ViewChild } from '@angular/core';

import { CheckableRelation, DataTableComponent, TableWidthConfig } from 'ng-devui/data-table';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/@core/data/listData';
import { ListDataService } from 'src/app/@core/mock/list-data.service';

@Component({
  selector: 'da-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.scss'],
})
export class TreeListComponent implements OnInit {
  iconParentOpen: string = '';
  iconParentClose: string = '';
  basicDataSource: Array<Item> = [];
  checkableRelation: CheckableRelation = { downward: true, upward: true };
  @ViewChild(DataTableComponent, { static: true }) datatable: DataTableComponent;

  tableWidthConfig: TableWidthConfig[] = [
    {
      field: 'checkbox',
      width: '30px',
    },
    {
      field: 'id',
      width: '200px',
    },
    {
      field: 'title',
      width: '200px',
    },
    {
      field: 'priority',
      width: '100px',
    },
    {
      field: 'iteration',
      width: '100px',
    },
    {
      field: 'assignee',
      width: '180px',
    },
    {
      field: 'status',
      width: '100px',
    },
    {
      field: 'timeline',
      width: '120px',
    },
  ];

  busy: Subscription = new Subscription();

  source = [
    { title: '首页' },
    { title: '列表页' },
    {
      title: '树状列表',
      link: '/pages/list/tree',
    },
  ];

  pager = {
    total: 0,
    pageIndex: 1,
    pageSize: 10,
  };

  keyword = '';

  constructor(private listDataService: ListDataService) {}

  ngOnInit() {
    this.getList();
  }

  onChildTableToggle(status: boolean, rowItem: any) {
    this.datatable.setRowChildToggleStatus(rowItem, status);
  }

  loadChildrenTable = (rowItem: any) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (rowItem.title === 'table node2') {
          if (rowItem.children && rowItem.children.length === 0) {
            rowItem.children.push({
              title: 'table node2-1',
              lastName: 'node2-1',
              status: 'error',
              dob: new Date(1989, 1, 1),
              startDate: new Date(2020, 1, 4),
              endDate: new Date(2020, 1, 8),
            });
          }
        }
        resolve(rowItem);
      }, 500);
    });
  };

  loadAllChildrenTable = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.basicDataSource[0].children[0].children[1].children[0].children = [];
        this.basicDataSource[0].children[0].children[1].children[0].children.push({
          id: '710000197203093702',
          title: 'Hwgx Vkdg Kfap Tke Miyxg Hyelo',
          priority: 'Low',
          iteration: 'iteration',
          assignee: 'Michael Walker',
          status: 'Stuck',
          timeline: '2018-08-04',
        });
        resolve(undefined);
      }, 500);
    });
  };

  onRowCheckChange(checked: boolean, rowIndex: number, nestedIndex: string, rowItem: any) {
    rowItem.$checked = checked;
    rowItem.$halfChecked = false;
    this.datatable.setRowCheckStatus({
      rowIndex: rowIndex,
      nestedIndex: nestedIndex,
      rowItem: rowItem,
      checked: checked,
    });
  }

  expandAll() {
    this.datatable.setTableChildrenToggleStatus(true);
  }

  onSearch() {
    this.getList();
  }

  search() {
    this.getList();
  }

  getList() {
    this.busy = this.listDataService.getTreeSource(this.pager).subscribe((res) => {
      const data = JSON.parse(JSON.stringify(res.pageList));
      this.basicDataSource = data.filter((i: any) => {
        return i.title.toUpperCase().includes(this.keyword.toUpperCase());
      });
      this.pager.total = res.total;
      this.basicDataSource[0].$isChildTableOpen = true;
    });
  }

  onPageChange(e: number) {
    this.pager.pageIndex = e;
    this.getList();
  }

  onSizeChange(e: number) {
    this.pager.pageSize = e;
    this.getList();
  }
}
