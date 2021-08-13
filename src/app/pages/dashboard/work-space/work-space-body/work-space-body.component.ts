import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { WorkGroup } from 'src/app/@core/data/work-group';
import { WorkItem } from 'src/app/@core/data/workItem';
import { WorkGroupService } from 'src/app/@core/mock/work-group.service';
import { WorkItemService } from 'src/app/@core/mock/work-item.service';

@Component({
  selector: 'da-work-space-body',
  templateUrl: './work-space-body.component.html',
  styleUrls: ['./work-space-body.component.scss'],
})
export class WorkSpaceBodyComponent implements OnInit, AfterViewInit, OnDestroy {
  resizeSub: any;
  workItemElement: any;
  workItemWidth: number;
  handlingWorkData: WorkItem[];
  handlingWorkColunm: string[] = [];
  tracingWorkData: WorkItem[];
  tracingWorkColunm: string[] = [];
  riskWorkData: WorkItem[];
  riskWorkColunm: string[] = [];
  workGroups: WorkGroup[];

  tabActiveId: string | number = 'tab1';
  tabItems: any[];

  constructor(private workItemService: WorkItemService, private workGroupService: WorkGroupService) {}

  ngOnInit(): void {
    this.workItemElement = document.querySelector('.da-work-space-quadrant');
    this.workItemWidth = 700;

    this.workItemService.getHandlingWork().subscribe((items) => {
      this.handlingWorkData = items;
      this.handlingWorkColunm = Object.keys(this.handlingWorkData[0]);
    });

    this.workItemService.getTracingWork().subscribe((items) => {
      this.tracingWorkData = items;
      this.tracingWorkColunm = Object.keys(this.tracingWorkData[0]);
    });

    this.workItemService.getRiskWork().subscribe((items) => {
      this.riskWorkData = items;
      this.riskWorkColunm = Object.keys(this.riskWorkData[0]);
    });

    this.workGroupService.getWorkGroups().subscribe((group) => {
      if (group) {
        this.workGroups = group;
      }
    });

    this.tabItems = [
      {
        id: 'tab1',
        title: '待处理',
        disabled: true,
        content: this.getContent('tab1'),
      },
      {
        id: 'tab2',
        title: '我跟踪',
        content: this.getContent('tab2'),
      },
      {
        id: 'tab3',
        title: '有风险',
        content: this.getContent('tab3'),
      },
    ];
  }

  ngAfterViewInit(): void {
    this.resizeSub = fromEvent(window, 'resize')
      .pipe(debounceTime(100))
      .subscribe(() => {
        this.workItemWidth = this.workItemElement.clientWidth * 0.8;
      });
    window.dispatchEvent(new Event('resize'));
  }

  getContent(tabId: string | number) {
    switch (tabId) {
      case 'tab1':
        return {
          tableData: this.handlingWorkData,
          tableOptions: this.handlingWorkColunm,
        };
      case 'tab2':
        return {
          tableData: this.tracingWorkData,
          tableOptions: this.tracingWorkColunm,
        };
      case 'tab3':
        return {
          tableData: this.riskWorkData,
          tableOptions: this.riskWorkColunm,
        };
      default:
        return;
    }
  }

  ngOnDestroy(): void {
    if (this.resizeSub) {
      this.resizeSub.unsubscribe();
    }
  }
}
