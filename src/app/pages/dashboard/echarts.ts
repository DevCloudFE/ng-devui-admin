export const echartServiceOption = {
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
        1.06, 3.7, 3.17, 3.17, 5.82, 16.4, 15.87, 18.52, 13.76, 19.05, 26.46, 30.16, 24.87, 23.81, 24.87, 16.93, 17.99, 13.76, 10.58, 20.63,
        12.7, 13.17, 15.82, 16.4, 15.87, 8.52, 3.76, 19.05, 6.46, 30.16, 24.87, 13.81,
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

export const monitorOption = {
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

export const mapOption = {
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
