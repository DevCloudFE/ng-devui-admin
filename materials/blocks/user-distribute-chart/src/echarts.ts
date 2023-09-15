export const mapOption = {
  tooltip: {
    trigger: 'item',
    showDelay: 0,
    transitionDuration: 0.2,
    formatter: function (params) {
      return `用户数 <br/> ${params.name}: ${params.value}`;
    },
  },
  visualMap: {
    left: 'right',
    min: 0,
    max: 200,
    inRange: {
      color: [
        '#BDFDFF',
        '#9FE1FF',
        '#81C5FF',
        '#61AAFF',
        '#3F8FEC',
        '#0676D0',
        '#005DB4',
        '#004698',
        '#00307E',
      ],
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
