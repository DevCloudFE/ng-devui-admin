import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';

@Injectable()
export class EchartsService {
  private pie = {
    grid: {
      containLabel: true,
      bottom: '23',
      top: '60',
      left: '23',
      right: '38',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      left: 'auto',
      top: 'center',
      data: ['可容忍', '满意', '不可容忍', '极端异常', '良好'],
    },
    series: [
      {
        name: '访问数量',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        emphasis: {
          label: {
            show: true,
            fontSize: '20',
          },
        },
        label: {
          normal: {
            show: false,
            position: 'center',
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
        },
        data: [
          { value: 335, name: '可容忍' },
          { value: 310, name: '满意' },
          { value: 234, name: '不可容忍' },
          { value: 135, name: '极端异常' },
          { value: 1548, name: '良好' },
        ],
      },
    ],
  };

  getPie(): Observable<any> {
    return observableOf(this.pie);
  }
}
