import { Component, Input, OnInit } from '@angular/core';

type TableOption = 'type' | 'description' | 'status';

@Component({
  selector: 'da-work-item-table',
  templateUrl: './work-item-table.component.html',
  styleUrls: ['./work-item-table.component.scss'],
})
export class WorkItemTableComponent implements OnInit {
  tableOptionMap = {
    type: '类型',
    description: '描述信息',
    status: '状态',
  };

  private _tableOptions: any;
  @Input() get tableOptions() {
    return this._tableOptions;
  }
  set tableOptions(options: any) {
    let columns = [];
    columns = options.map((option: TableOption) => {
      return {
        field: option,
        header: this.tableOptionMap[option],
        fieldType: 'text',
      };
    });
    this._tableOptions = { columns: columns };
  }
  @Input() tableData: any;

  constructor() {}

  ngOnInit(): void {}
}
