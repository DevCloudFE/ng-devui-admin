import { Component, OnInit } from '@angular/core';
import { DialogService, EditableTip, TableWidthConfig } from 'ng-devui';
import { Subscription } from 'rxjs';
import { ListDataService } from 'src/app/@core/mock/list-data.service';

@Component({
  selector: 'da-advance-form',
  templateUrl: './advance-form.component.html',
  styleUrls: ['./advance-form.component.scss'],
})
export class AdvanceFormComponent implements OnInit {
  editableTip = EditableTip.btn;
  nameEditing: boolean;
  busy: Subscription;

  pager = {
    total: 0,
    pageIndex: 1,
    pageSize: 10,
  };

  listData = [];

  headerNewForm = false;

  formConfig = {
    layout: 'horizontal',
    labelSize: '60',
    items: [
      {
        label: 'Id',
        prop: 'id',
        type: 'input',
      },
      {
        label: 'Title',
        prop: 'title',
        type: 'input',
        required: true,
        rule: {
          validators: [{ required: true }],
        },
      },
      {
        label: 'Priority',
        prop: 'priority',
        type: 'select',
        options: ['Low', 'Medium', 'High'],
        required: true,
        rule: {
          validators: [{ required: true }],
        },
      },
      {
        label: 'Iteration',
        prop: 'iteration',
        type: 'input',
      },
      {
        label: 'Assignee',
        prop: 'assignee',
        type: 'input',
        required: true,
        rule: {
          validators: [{ required: true }],
        },
      },
      {
        label: 'Status',
        prop: 'status',
        type: 'select',
        options: ['Stuck', 'Done', 'Working on it'],
      },
      {
        label: 'Timeline',
        prop: 'timeline',
        type: 'datePicker',
      },
    ],
  };

  defaultRowData = {
    id: '',
    title: '',
    priority: 'Low',
    iteration: '',
    assignee: '',
    status: 'Stuck',
    timeline: new Date(),
  };

  priorities = ['Low', 'Medium', 'High'];

  tableWidthConfig: TableWidthConfig[] = [
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

  constructor(private listDataService: ListDataService, private dialogService: DialogService) {}

  ngOnInit() {
    this.getList();
  }

  onEditEnd(rowItem, field) {
    rowItem[field] = false;
  }

  getList() {
    this.busy = this.listDataService.getListData(this.pager).subscribe((res) => {
      res.pageList.$expandConfig = { expand: false };
      this.listData = res.pageList;
      this.pager.total = res.total;
    });
  }

  beforeEditStart = (rowItem, field) => {
    return true;
  };

  beforeEditEnd = (rowItem, field) => {
    console.log('beforeEditEnd');
    if (rowItem && rowItem[field].length < 3) {
      return false;
    } else {
      return true;
    }
  };

  newRow() {
    this.headerNewForm = true;
  }

  getuuid() {
    return new Date().getTime() + 'CNWO';
  }

  quickRowAdded(e) {
    const newData = { ...e };
    this.listData.unshift(newData);
    this.headerNewForm = false;
  }

  quickRowCancel() {
    this.headerNewForm = false;
  }

  subRowAdded(index, item) {
    this.listData[index].$expandConfig.expand = false;
    const newData = { ...this.defaultRowData };
    this.listData.splice(index + 1, 0, newData);
  }

  subRowCancel(index) {
    this.listData[index].$expandConfig.expand = false;
  }

  toggleExpand(rowItem) {
    if (rowItem.$expandConfig) {
      rowItem.$expandConfig.expand = !rowItem.$expandConfig.expand;
    }
  }

  onPageChange(e) {
    this.pager.pageIndex = e;
    this.getList();
  }

  onSizeChange(e) {
    this.pager.pageSize = e;
    this.getList();
  }

  deleteRow(index) {
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
          handler: () => {
            this.listData.splice(index, 1);
            results.modalInstance.hide();
          },
        },
        {
          id: 'btn-cancel',
          cssClass: 'common',
          text: 'Cancel',
          handler: () => {
            results.modalInstance.hide();
          },
        },
      ],
    });
  }
}
