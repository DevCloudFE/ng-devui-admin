import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { WorkItem, WorkItemData } from '../data/workItem';

@Injectable()
export class WorkItemService extends WorkItemData {
  private handlingWork: WorkItem[] = [
    {
      type: 'RR',
      description: '该项工作等待被处理',
      status: '待处理',
    },
    {
      type: 'RR',
      description: '该项工作等待被处理',
      status: '待处理',
    },
    {
      type: 'RR',
      description: '该项工作等待被处理',
      status: '待处理',
    },
    {
      type: 'RR',
      description: '该项工作等待被处理',
      status: '待处理',
    },
    {
      type: 'RR',
      description: '该项工作等待被处理',
      status: '待处理',
    },
    {
      type: 'RR',
      description: '该项工作等待被处理',
      status: '待处理',
    },
    {
      type: 'RR',
      description: '该项工作等待被处理',
      status: '待处理',
    },
    {
      type: 'RR',
      description: '该项工作等待被处理',
      status: '待处理',
    },
    {
      type: 'RR',
      description: '该项工作等待被处理',
      status: '待处理',
    },
    {
      type: 'RR',
      description: '该项工作等待被处理',
      status: '待处理',
    },
    {
      type: 'RR',
      description: '该项工作等待被处理',
      status: '待处理',
    },
    {
      type: 'RR',
      description: '该项工作等待被处理',
      status: '待处理',
    },
    {
      type: 'RR',
      description: '该项工作等待被处理',
      status: '待处理',
    },
    {
      type: 'RR',
      description: '该项工作等待被处理',
      status: '待处理',
    },
    {
      type: 'RR',
      description: '该项工作等待被处理',
      status: '待处理',
    },
  ];

  private tracingWork: WorkItem[] = [
    {
      type: 'story',
      description: '该项工作正在处理',
      status: '正在处理',
    },
    {
      type: 'story',
      description: '该项工作正在处理',
      status: '正在处理',
    },
    {
      type: 'story',
      description: '该项工作正在处理',
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
      description: '该项工作已经完成',
      status: '已经完成',
    },
    {
      type: 'bug',
      description: '该项工作正在处理',
      status: '正在处理',
    },
    {
      type: 'bug',
      description: '该项工作正在处理',
      status: '正在处理',
    },
    {
      type: 'bug',
      description: '该项工作已经完成',
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
