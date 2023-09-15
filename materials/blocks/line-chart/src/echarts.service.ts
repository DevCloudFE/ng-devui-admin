import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';

@Injectable()
export class EchartsService {
  private lineChart = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['流量峰值', '平均流量'],
    },

    calculable: true,

    xAxis: [
      {
        axisLabel: {
          rotate: 30,
          interval: 0,
        },
        axisLine: {
          lineStyle: {
            color: '#CECECE',
          },
        },
        type: 'category',
        boundaryGap: true,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      },
    ],
    yAxis: [
      {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#CECECE',
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(0, 0, 0, 0.12)',
            type: 'dashed',
          },
        },
      },
    ],
    series: [
      {
        name: '流量峰值',
        type: 'line',
        symbol: 'none',
        smooth: 0.2,
        color: ['#1DD1A1'],
        data: [20222, 10222, 152222, 22222, 30222, 44222, 40222],
        areaStyle: {
          color: {
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            type: 'linear',
            global: false,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(29, 209, 161, 0.2)',
              },
              {
                offset: 1,
                color: 'rgba(29, 209, 161, 0)',
              },
            ],
          },
        },
      },
      {
        name: '平均流量',
        type: 'line',
        symbol: 'none',
        smooth: 0.2,
        color: ['#3F8FEC'],
        data: [10001, 20001, 30010, 40100, 50010, 60100, 70010],
        areaStyle: {
          color: {
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            type: 'linear',
            global: false,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(63, 143, 236, 0.2)',
              },
              {
                offset: 1,
                color: 'rgba(63, 143, 236, 0)',
              },
            ],
          },
        },
      },
    ],
  };

  getLineChart(): Observable<any> {
    return observableOf(this.lineChart);
  }
}
