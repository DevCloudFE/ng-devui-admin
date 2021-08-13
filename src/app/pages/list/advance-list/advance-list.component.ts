import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableComponent, DialogService, EditableTip, FilterConfig, TableWidthConfig } from 'ng-devui';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/@core/data/listData';
import { ListDataService } from 'src/app/@core/mock/list-data.service';

@Component({
  selector: 'da-advance-list',
  templateUrl: './advance-list.component.html',
  styleUrls: ['./advance-list.component.scss'],
})
export class AdvanceListComponent implements OnInit {
  @ViewChild(DataTableComponent, { static: true })
  datatable: DataTableComponent;
  basicDataSource = [];
  originData = [];
  deleteList: Item[] = [];
  dataTableOptions = {
    columns: [
      {
        field: 'id',
        header: 'Id',
      },
      {
        field: 'title',
        header: 'Title',
      },
      {
        field: 'priority',
        header: 'Priority',
        filterable: true,
        filterList: [
          {
            id: 'Low',
            name: 'Low',
            value: 'Low',
          },
          {
            id: 'Medium',
            name: 'Medium',
            value: 'Medium',
          },
          {
            id: 'High',
            name: 'High',
            value: 'High',
          },
        ],
      },
      {
        field: 'iteration',
        header: 'Iteration',
      },
      {
        field: 'assignee',
        header: 'Assignee',
      },
      {
        field: 'status',
        header: 'Status',
        filterable: true,
        filterList: [
          {
            id: 'Stuck',
            name: 'Stuck',
            value: 'Stuck',
          },
          {
            id: 'Low',
            name: 'Low',
            value: 'Low',
          },
          {
            id: 'Working on it',
            name: 'Working on it',
            value: 'Working on it',
          },
        ],
      },
      {
        field: 'timeline',
        header: 'Timeline',
      },
    ],
  };

  tableWidthConfig: TableWidthConfig[] = [
    {
      field: 'checkbox',
      width: '30px',
    },
    {
      field: 'id',
      width: '150px',
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
      width: '100px',
    },
    {
      field: 'status',
      width: '100px',
    },
    {
      field: 'timeline',
      width: '100px',
    },
    {
      field: 'Actions',
      width: '100px',
    },
  ];

  priorities = ['Low', 'Medium', 'High'];

  pageSizeOptions = [10, 15, 20];

  pager = {
    total: 0,
    pageIndex: 1,
    pageSize: 15,
  };

  totalDataChecked = false;

  searchForm = {
    keyword: '',
    gender: 'All',
  };

  editableTip = EditableTip.btn;

  busy: Subscription;

  constructor(private listDataService: ListDataService, private dialogService: DialogService) {}

  ngOnInit() {
    this.getList();
  }

  search() {
    this.getList();
  }

  getList(loadMore = false) {
    this.busy = this.listDataService.getOriginSource(this.pager).subscribe((res) => {
      const data = JSON.parse(JSON.stringify(res.pageList));
      this.pager.total = res.total;
      this.originData = loadMore ? this.originData.concat(data) : data;
      this.basicDataSource = this.originData.filter((i: Item | unknown) => {
        return (i as Item).title!.toUpperCase().includes(this.searchForm.keyword.toUpperCase());
      });
    });
  }

  onResize({ width }: { width: string }, field: string) {
    const index = this.tableWidthConfig.findIndex((config) => {
      return config.field === field;
    });
    if (index > -1) {
      this.tableWidthConfig[index].width = width + 'px';
    }
  }

  reset() {
    this.searchForm = {
      keyword: '',
      gender: 'all',
    };
    this.getList();
  }

  beforeEditStart = (rowItem: any, field: any) => {
    return true;
  };

  beforeEditEnd = (rowItem: any, field: any) => {
    if (rowItem && rowItem[field].length < 3) {
      return false;
    } else {
      return true;
    }
  };

  onEditEnd(rowItem: any, field: any) {
    rowItem[field] = false;
  }

  onFirstFilterChange(e: FilterConfig[], column: any) {
    const keys = e.map((i) => i.name);
    this.basicDataSource = this.originData.filter((i) => {
      return keys.includes(i[column.field]);
    });
  }

  onRowCheckChange(checked: boolean, rowIndex: number, nestedIndex: string, rowItem: any) {
    rowItem.$checked = checked;
    rowItem.$halfChecked = false;
    this.datatable.setRowCheckStatus({
      rowIndex: rowIndex,
      nestedIndex: nestedIndex,
      rowItem: rowItem,
      checked: checked,
    });
    this.deleteList = this.datatable.getCheckedRows();
  }

  onCheckAllChange() {
    this.deleteList = this.datatable.getCheckedRows();
  }

  batchDelete() {
    const results = this.dialogService.open({
      id: 'delete-dialog',
      width: '600px',
      maxHeight: '600px',
      title: 'Batch Delete',
      showAnimate: false,
      content: `Are you sure you want to delete the ${this.deleteList.length} records?`,
      backdropCloseable: true,
      onClose: () => {},
      buttons: [
        {
          cssClass: 'primary',
          text: 'Ok',
          disabled: false,
          handler: ($event: Event) => {
            this.deleteRows();
            results.modalInstance.hide();
          },
        },
        {
          id: 'btn-cancel',
          cssClass: 'common',
          text: 'Cancel',
          handler: ($event: Event) => {
            results.modalInstance.hide();
          },
        },
      ],
    });
  }

  loadMore() {
    if (this.pager.pageIndex + 1 <= Math.ceil(this.pager.total / this.pager.pageSize)) {
      this.pager.pageIndex += 1;
      this.getList(true);
    }
  }

  deleteRows() {
    let i = this.deleteList.length - 1;
    while (i >= 0) {
      const id = this.deleteList[i].id;
      const index = this.basicDataSource.findIndex((i: Item | unknown) => {
        return (i as Item).id === id;
      });
      this.basicDataSource.splice(index, 1);
      i--;
    }
  }

  deleteRow(index: number) {
    const results = this.dialogService.open({
      id: 'delete-dialog',
      width: '346px',
      maxHeight: '600px',
      title: 'Delete',
      showAnimate: false,
      content: 'Are you sure you want to delete it?',
      backdropCloseable: true,
      onClose: () => {},
      buttons: [
        {
          cssClass: 'primary',
          text: 'Ok',
          disabled: false,
          handler: ($event: Event) => {
            this.basicDataSource.splice(index, 1);
            results.modalInstance.hide();
          },
        },
        {
          id: 'btn-cancel',
          cssClass: 'common',
          text: 'Cancel',
          handler: ($event: Event) => {
            results.modalInstance.hide();
          },
        },
      ],
    });
  }
}
