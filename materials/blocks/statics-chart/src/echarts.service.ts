import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';

@Injectable()
export class EchartsService {
  private histogram = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'cross', label: { backgroundColor: '#6a7985' } },
    },
    legend: {
      data: ['US', 'Story', 'Task', 'BUG', '类型总量'],
      top: 10,
      left: 15,
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '1%',
      top: '80',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: [
        '2020年02月',
        '2020年03月',
        '2020年04月',
        '2020年05月',
        '2020年06月',
        '2020年07月',
        '2020年08月',
        '2020年09月',
        '2020年10月',
        '2020年11月',
        '2020年12月',
        '2021年01月',
        '2021年02月',
        '2021年03月',
      ],
      axisLabel: { interval: 'auto', fontSize: 16 },
    },
    yAxis: {
      type: 'value',
      axisLabel: { fontSize: 16 },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(0, 0, 0, 0.12)',
          type: 'dashed',
        },
      },
    },
    series: [
      {
        name: 'US',
        type: 'bar',
        barMaxWidth: 40,
        label: { show: false, color: '#ffffff' },
        emphasis: { focus: 'series' },
        data: [0, 8, 3, 110, 183, 168, 94, 67, 52, 70, 67, 0, 0, 0],
        itemStyle: {
          color: '#1DD1A1',
        },
      },
      {
        name: 'Story',
        type: 'bar',
        barMaxWidth: 40,
        label: { show: false, color: '#ffffff' },
        emphasis: { focus: 'series' },
        data: [0, 0, 0, 0, 0, 0, 0, 14, 58, 55, 69, 77, 60, 59],
        itemStyle: {
          color: '#3F8FEC',
        },
      },
      {
        name: 'Task',
        type: 'bar',
        barMaxWidth: 40,
        label: { show: false, color: '#ffffff' },
        emphasis: { focus: 'series' },
        data: [0, 0, 0, 2, 7, 3, 12, 52, 6, 13, 24, 25, 12, 6],
        itemStyle: {
          color: '#FECA57',
        },
      },
      {
        name: 'BUG',
        type: 'bar',
        barMaxWidth: 40,
        label: { show: false, color: '#ffffff' },
        emphasis: { focus: 'series' },
        data: [7, 31, 41, 40, 44, 82, 64, 63, 33, 39, 36, 27, 9, 9],
        itemStyle: {
          color: '#855CF8',
        },
      },
      {
        name: '类型总量',
        type: 'bar',
        barMaxWidth: 40,
        label: { show: false, color: '#ffffff' },
        emphasis: { focus: 'series' },
        data: [7, 39, 44, 152, 234, 253, 170, 196, 149, 177, 196, 129, 81, 74],
        itemStyle: {
          color: '#F79044',
        },
      },
    ],
  };

  getHistogram(): Observable<any> {
    return observableOf(this.histogram);
  }
}
