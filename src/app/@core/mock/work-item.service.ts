import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { WorkItem, WorkItemData } from '../data/workItem';

@Injectable()
export class WorkItemService extends WorkItemData {
  private handlingWork: WorkItem[] = [
    {
      type: 'RR',
      description: '工作项1等待处理',
      status: '待处理',
    },
    {
      type: 'IR',
      description: '工作项2等待被处理',
      status: '待处理',
    },
    {
      type: 'RR',
      description: '工作项3等待处理',
      status: '待处理',
    },
    {
      type: 'IR',
      description: '工作项4等待被处理',
      status: '待处理',
    },
    {
      type: 'RR',
      description: '工作项5等待处理',
      status: '待处理',
    },
    {
      type: 'IR',
      description: '工作项6等待被处理',
      status: '待处理',
    },
    {
      type: 'RR',
      description: '工作项7等待处理',
      status: '待处理',
    },
    {
      type: 'IR',
      description: '工作项8等待被处理',
      status: '待处理',
    },
    {
      type: 'RR',
      description: '工作项9等待处理',
      status: '待处理',
    },
    {
      type: 'IR',
      description: '工作项10等待被处理',
      status: '待处理',
    },
    {
      type: 'RR',
      description: '工作项11等待处理',
      status: '待处理',
    },
    {
      type: 'IR',
      description: '工作项12等待被处理',
      status: '待处理',
    },
    {
      type: 'RR',
      description: '工作项13等待处理',
      status: '待处理',
    },
    {
      type: 'IR',
      description: '工作项14等待被处理',
      status: '待处理',
    },
    {
      type: 'RR',
      description: '工作项15等待处理',
      status: '待处理',
    },
  ];

  private tracingWork: WorkItem[] = [
    {
      type: 'story',
      description: '工作项1正在处理',
      status: '正在处理',
    },
    {
      type: 'feature',
      description: '工作项2正在处理',
      status: '正在处理',
    },
    {
      type: 'legend',
      description: '工作项3正在处理',
      status: '正在处理',
    },
    {
      type: 'story',
      description: '该项工作正在处理',
      status: '正在处理',
    },
  ];

  private riskWork: WorkItem[] = [
    {
      type: 'bug',
      description: '该项工作正在进行中',
      status: '正在进行',
    },
    {
      type: 'bug',
      description: '该项工作1正在处理',
      status: '正在处理',
    },
    {
      type: 'bug',
      description: '该项工作2正在处理',
      status: '正在处理',
    },
    {
      type: 'bug',
      description: '该项工作3已经完成',
      status: '已经完成',
    },
  ];

  getHandlingWork(): Observable<WorkItem[]> {
    return observableOf(this.handlingWork);
  }
  getTracingWork(): Observable<WorkItem[]> {
    return observableOf(this.tracingWork);
  }
  getRiskWork(): Observable<WorkItem[]> {
    return observableOf(this.riskWork);
  }
}
