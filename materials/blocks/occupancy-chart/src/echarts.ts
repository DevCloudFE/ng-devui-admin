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
