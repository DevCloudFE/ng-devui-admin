import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { GanttData, GanttSource } from '../data/gantt';

@Injectable()
export class GanttDataService extends GanttData {
  private curYear = new Date().getFullYear();

  private ganttBasicData: GanttSource[] = [
    {
      id: '1',
      title: 'title1',
      startDate: new Date(this.curYear, 4, 5),
      endDate: new Date(this.curYear, 4, 10),
      progressRate: 30,
    },
    {
      id: '2',
      title: 'title2',
      startDate: new Date(this.curYear, 4, 6),
      endDate: new Date(this.curYear, 4, 9),
      progressRate: 30,
    },
    {
      id: '3',
      title: 'title3',
      startDate: new Date(this.curYear, 4, 10),
      endDate: new Date(this.curYear, 4, 12),
      progressRate: 30,
    },
    {
      id: '4',
      title: 'title4',
      startDate: new Date(this.curYear, 4, 7),
      endDate: new Date(this.curYear, 4, 10),
      progressRate: 30,
    },
    {
      id: '5',
      title: 'title5',
      startDate: new Date(this.curYear, 4, 8),
      endDate: new Date(this.curYear, 4, 12),
      progressRate: 30,
    },
    {
      id: '6',
      title: 'title6',
      startDate: new Date(this.curYear, 4, 9),
      endDate: new Date(this.curYear, 4, 20),
      progressRate: 50,
    },
    {
      id: '7',
      title: 'title7',
      startDate: new Date(this.curYear, 4, 12),
      endDate: new Date(this.curYear, 4, 27),
      progressRate: 60,
    },
    {
      id: '8',
      title: 'title8',
      startDate: new Date(this.curYear, 4, 15),
      endDate: new Date(this.curYear, 4, 30),
      progressRate: 70,
    },
  ];

  getGantts(): Observable<GanttSource[]> {
    return observableOf(this.ganttBasicData);
  }
  getGanttYear(): number {
    return this.curYear;
  }
}
