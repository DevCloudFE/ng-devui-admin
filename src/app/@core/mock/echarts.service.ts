import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';

@Injectable()
export class EchartsService {
  private serviceWaterLine = {
    tooltip: {
      trigger: 'axis',
      confine: true,
    },
    legend: {
      data: ['服务水位'],
      type: 'scroll',
      show: false,
      orient: 'horizontal',
      top: '6%',
      right: '6%',
      icon: 'circle',
      itemWidth: 13,
      itemHeight: 6,
      itemGap: 13,
      textStyle: {
        fontSize: 14,
        color: '#E5E5E5',
      },
    },
    toolbox: {},
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: [
        '00:00',
        '00:30',
        '01:00',
        '01:30',
        '02:00',
        '02:30',
        '03:00',
        '03:30',
        '04:00',
        '04:30',
        '05:00',
        '05:30',
        '06:00',
        '06:30',
        '07:00',
        '07:30',
        '08:00',
        '08:30',
        '09:00',
        '09:30',
        '10:00',
        '10:30',
        '11:00',
        '11:30',
        '12:00',
        '12:30',
        '13:00',
        '13:30',
        '14:00',
        '14:30',
        '15:00',
        '15:30',
        '16:00',
        '16:30',
        '17:00',
        '17:00',
        '18:00',
        '18:30',
        '19:00',
        '19:30',
        '20:00',
        '20:30',
        '21:00',
        '21:30',
        '22:00',
        '22:30',
        '23:00',
        '23:30',
        '23:50',
        '23:55',
        '24:00',
      ],
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(0, 0, 0, 0.4)',
          width: 1,
          type: 'solid',
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: 'rgba(103, 103, 103, 1)',
        fontSize: 14,
        interval: 10,
        rotate: 0,
      },
      show: true,
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(0, 0, 0, 0.12)',
          type: 'dashed',
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: 'rgba(103, 103, 103, 1)',
      },
      show: true,
      minInterval: 10,
    },
    series: [
      {
        name: '服务水位',
        data: [
          21.69, 30.16, 11.64, 11.64, 31.22, 17.46, 14.81, 44.44, 28.57, 14.81, 12.7, 35.98, 23.28, 16.93, 19.58, 8.99, 11.64, 4.23, 5.29,
          1.06, 3.7, 3.17, 3.17, 5.82, 16.4, 15.87, 18.52, 13.76, 19.05, 26.46, 30.16, 24.87, 23.81, 24.87, 16.93, 17.99, 13.76, 10.58,
          20.63, 12.7, 13.17, 15.82, 16.4, 15.87, 8.52, 3.76, 19.05, 6.46, 30.16, 24.87, 13.81,
        ],
        type: 'line',
        smooth: false,
        markPoint: {
          data: [],
        },

        label: {
          show: false,
          position: 'top',
          color: 'rgba(255, 255, 255, 1)',
        },
        areaStyle: {
          color: {
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            type: 'linear',
            global: false,
            //区域颜色
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
        lineStyle: {
          color: {
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            type: 'linear',
            global: false,
            colorStops: [
              {
                offset: 1,
                color: 'rgba(29, 209, 161, 1)',
              },
            ],
          },
          opacity: 1,
          width: 3,
        },
        itemStyle: {
          opacity: 1,
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
                color: 'rgba(157, 245, 5, 1)',
              },
              {
                offset: 1,
                color: 'rgba(23, 240, 248, 0.84)',
              },
            ],
          },
        },
        symbolSize: 0,
        symbol: 'circle',
        max: 44.44,
      },
    ],
  };

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
          show: false,
          position: 'center',
        },
        labelLine: {
          show: false,
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

  private historgram = {
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
    yAxis: { type: 'value', axisLabel: { fontSize: 16 } },
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

  private monitor = {
    series: [
      {
        type: 'gauge',
        progress: {
          show: true,
          width: 10,
        },
        axisLine: {
          lineStyle: {
            width: 10,
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
          length: 15,
          lineStyle: {
            width: 2,
            color: '#999',
          },
        },
        axisLabel: {
          show: false,
          distance: 25,
          color: '#999',
          fontSize: 14,
        },
        anchor: {
          show: true,
          showAbove: true,
          size: 20,
          itemStyle: {
            borderWidth: 8,
          },
        },
        title: {
          show: false,
        },
        detail: {
          valueAnimation: true,
          formatter: '{value}%',
          fontSize: 30,
          offsetCenter: [0, '70%'],
        },
        data: [
          {
            value: 70,
          },
        ],
      },
    ],
  };

  private person = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999',
        },
      },
    },
    legend: {
      data: ['新增用户数', '流失用户数', '总体用户数'],
    },
    xAxis: [
      {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisPointer: {
          type: 'shadow',
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: '人数',
        min: 0,
        max: 200,
        interval: 50,
        axisLabel: {
          formatter: '{value} 人',
        },
      },
    ],
    series: [
      {
        name: '新增用户数',
        type: 'bar',
        data: [50, 60, 70, 80, 90, 180, 135, 162, 60, 20, 100, 90],
      },
      {
        name: '流失用户数',
        type: 'bar',
        data: [10, 10, 20, 15, 30, 50, 60, 10, 30, 5, 10, 20],
      },
      {
        name: '总体用户数',
        type: 'line',
        data: [60, 70, 80, 90, 100, 190, 150, 180, 80, 80, 150, 120],
      },
    ],
  };

  private map = {
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2,
      formatter: function (params: any) {
        return `用户数 <br/> ${params.name}: ${params.value}`;
      },
    },
    visualMap: {
      left: 'right',
      min: 0,
      max: 200,
      inRange: {
        color: ['#BDFDFF', '#9FE1FF', '#81C5FF', '#61AAFF', '#3F8FEC', '#0676D0', '#005DB4', '#004698', '#00307E'],
      },
      text: ['High', 'Low'], // 文本，默认为数值文本
      calculable: true,
    },
    series: [
      {
        map: 'china',
        type: 'map',
        emphasis: {
          label: {
            show: true,
          },
        },

        data: [],
      },
    ],
  };

  getServiceWaterLine(): Observable<any> {
    return observableOf(this.serviceWaterLine);
  }

  getPie(): Observable<any> {
    return observableOf(this.pie);
  }

  getHistorgram(): Observable<any> {
    return observableOf(this.historgram);
  }

  getLineChart(): Observable<any> {
    return observableOf(this.lineChart);
  }

  getMonitor(): Observable<any> {
    return observableOf(this.monitor);
  }

  getPerson(): Observable<any> {
    return observableOf(this.person);
  }

  getMap(): Observable<any> {
    return observableOf(this.map);
  }
}
