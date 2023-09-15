const DARK_LINE_COLOR = '#4E5057';
const DARK_TITLE_COLOR = '#CED1DB';
const DARK_TEXT_COLOR = '#696C75';
const DARK_LEGEND_COLOR = '#868A99';
const DARK_AXIS_COLOR = '#4E5057';

const LIGHT_LINE_COLOR = '#D7D8DA';
const LIGHT_TITLE_COLOR = '#252B3A';
const LIGHT_TEXT_COLOR = '#9B9FA8';
const LIGHT_LEGEND_COLOR = '#71757F';
const LIGHT_AXIS_COLOR = '#D7D8DA';


const DEFAULT_BASIC_COLOR_PALETTE = [
  '#5C8DFF',
  '#BC94FF',
  '#54D2EB',
  '#A6DD82',
  '#FCDA6B',
  '#CA7ED6',
  '#7298F1',
  '#73CEA6',
  '#EDD249',
  '#CAABFF',
  '#85CAFF',
  '#93D99A',
  '#96ADFA',
  '#F4AF8F',
  '#A282E9',
  '#FFBB6B',
  '#69DBB9',
  '#76DBEF',
  '#B1CE4F',
  '#5DA4DC'
];

const DEFAULT_DARK_COLOR_PALETTE =  ['#FFEE01', '#FF7592', '#FF974A', '#666D8F', '#3EC554', '#7F4CDA', '#E47CF3', '#00AFD4']

function axisCommon(type: string) {
  if (type === 'dark') {
    return {
      axisLine: {
        lineStyle: {
          color: DARK_AXIS_COLOR,
        },
      },
      axisTick: {
        lineStyle: {
          color: DARK_AXIS_COLOR,
        },
      },
      axisLabel: {
        textStyle: {
          color: DARK_TEXT_COLOR,
        },
      },
      splitLine: {
        lineStyle: {
          type: [3, 3],
          color: DARK_LINE_COLOR,
        },
      },
    };
  } else {
    return {
      axisLine: {
        lineStyle: {
          color: LIGHT_AXIS_COLOR,
        },
      },
      axisTick: {
        lineStyle: {
          color: LIGHT_AXIS_COLOR,
        },
      },
      axisLabel: {
        textStyle: {
          color: LIGHT_TEXT_COLOR,
        },
      },
      splitLine: {
        lineStyle: {
          type: [3, 3],
          color: LIGHT_LINE_COLOR,
        },
      },
    };
  }
};

export const defaultColorPalette = DEFAULT_BASIC_COLOR_PALETTE;
export const defaultDarkColorPalette = DEFAULT_DARK_COLOR_PALETTE;

/**
 * 顺序色板
 * @description 各种颜色由浅到深
 */
export const sequentialColorPalette = {
  blue: ['#A3E0FF', '#85D2FF', '#66C2FF', '#47AFFF', '#299BFF', '#0B81F6', '#0064D6', '#0050B8', '#003D99', '#002D7A'],
  orange: ['#FFEAC7', '#FFDCA8', '#FFCC8A', '#FFBA6B', '#FCA44C', '#D47F35', '#AB5E24', '#824116', '#59280C', '#301304'],
  deepBlue: ['#F1EBFF', '#DACCFF', '#BFACFC', '#9682E8', '#715DD4', '#5244AB', '#362D8C', '#201A6E', '#0F0D4F', '#040430'],
  cyanGreen: ['#D6FFF3', '#B8FFEC', '#90F0D9', '#69DBC4', '#47C6B0', '#2FA898', '#1C8A7F', '#0D6B65', '#034D4A', '#002E2E'],
  navyBlue: ['#F5F5F5', '#E0E0E0', '#BCC0CC', '#939BB8', '#6F79A3', '#505B90', '#363E70', '#212652', '#101333', '#050514'],
  cyan: ['#D6FEFF', '#B8FAFF', '#99F5FF', '#7AEDFF', '#54D1EB', '#39AFCC', '#238DAD', '#116D8F', '#045070', '#003652'],
  green: ['#EBFFEC', '#BEEDC1', '#93D99A', '#6EC479', '#4EB15E', '#349147', '#207333', '#115423', '#063615', '#011708'],
  yellow: ['#FFFDC9', '#FFF9AB', '#FFF48C', '#FFEC6E', '#EDD249', '#CFAF30', '#B08D1A', '#916D0A', '#735000', '#543800'],
  purple: ['#FFF2FF', '#FCD4FF', '#E4A7EB', '#CA7ED6', '#B05BC1', '#8F40A3', '#6F2985', '#511766', '#350B47', '#1C0329'],
  red: ['#FEE6DD', '#FECFBF', '#FEB6A0', '#FE9A82', '#FE7E64', '#E05A46', '#C23B2D', '#A32218', '#850D09', '#660000'],
  grey: ['#F2F2F2', '#DEDEDE', '#C9C9C9', '#B5B5B5', '#A1A1A1', '#8C8C8C', '#6E6E6E', '#4F4F4F', '#303030', '#121212'],
};

/**
 * 邻近色色板
 * @description 颜色变量向两侧发散
 */
export const adjacentColorPalette = {
  orange: ['#FFF6C7', '#FFE5A8', '#FFD48A', '#FFC96B', '#FCA44C', '#DE7031', '#BF411B', '#A1190A', '#820004', '#630011'],
  blue: ['#C2FFED', 'A3FFF0', '#85FFFB', '#66F0FF', '#47D4FF', '#29B0FF', '#0B81F6', '#004FD6', '#002BB8', '#000F99'],
  green: ['#D6FFE2', '#B8FFD7', '#90F0C6', '#69DBB9', '#47C6B0', '#2FA8A4', '#1C7F8A', '#0D556B', '#03324D', '#00172E'],
  purple: ['#F9EBFF', '#EACCFF', '#D0ACFC', '#A282E8', '#725DD4', '#4741B5', '#2A3396', '#182D78', '#0B2659', '#021E3B'],
};

/**
 * 发散色板
 * @description 颜色从冷色调到暖色调
 */
export const divergentColorPalette = {
  greenToRed: ['#006759', '#00936A', '#1DD1A1', '#62EED5', '#FDF1DD', '#FFB7A8', '#F9896F', '#D0343D', '#920014'],
  cyanToRed: ['#162F64', '#2665AF', '#5DA4DC', '#ACD6F7', '#FFEAE1', '#F3AF8F', '#DA6D50', '#C94127', '#A02C16'],
  blueToRed: ['#0036B2', '#2459E2', '#3F8FEC', '#8CD8FF', '#FEFFE1', '#FFE768', '#EBAF2E', '#A87200', '#714500'],
  purpleToRed: ['#5E14C2', '#781EDC', '#CB75F9', '#FFB0FF', '#FFE8E9', '#FFC5B0', '#FD8272', '#DA4937', '#95230F'],
};

/**
 * 语义色板对应的语义对象
 */
export const semanticColor = {
  danger: '#F65E59',
  warning: '#FA8831',
  attention: '#F3C836',
  safty: '#4FBF67',
  hints: '#419AF2',
  disable: '#CACBCC'
};


/**
 * 强调色板
 */
export const emphasisColorPalette = {
  emphases: ['#1DD1A1', '#3F8FEC', '#FECA57', '#855CF8', '#F79044', '#EE5253', '#45BBD4', '#E458D0'],
  blur: ['#B3FFEB', '#BDFDFF', '#FFF0B1', '#FFE3FF', '#FFE292', '#FFC5BB', '#B0FCFC', '#FFCBFF'],
};

export const DEVUI_ECHART_THEME = {
  /**
   * 默认分类色板
   */
  defaultColorPalette: DEFAULT_BASIC_COLOR_PALETTE,

  colorPalette1: ['#66FFF6', '#36C3FF', '#F6FD95', '#FF6C85', '#FFBC8C', '#A49BFC', '#B7FD97', '#65E6B7'],

  colorPalette2: ['#FFEE01', '#FF7592', '#FF974A', '#666D8F', '#3EC554', '#7F4CDA', '#E47CF3', '#00AFD4'],

  defaultDarkTheme: {
    color: DEFAULT_DARK_COLOR_PALETTE,
    tooltip: {
      axisPointer: {
        label: {
          show: false
        },
        lineStyle: {
          color: DARK_LINE_COLOR,
          width: 2,
          type: [2, 3]
        },
        crossStyle: {
          color: DARK_LINE_COLOR,
          width: 2,
          type: [2, 3]
        },
      },
      backgroundColor: 'rgba(36,37,38,0.96)',
      extraCssText: 'border-radius: 8px;box-shadow: 0 1px 4px 0 rgba(37,43,58,0.1);',
      borderWidth: 0,
      padding: [8, 8],
      textStyle: {
        color: DARK_LEGEND_COLOR,
        fontSize: 12
      }
    },
    visualMap: {
      textStyle: {
        color: DARK_TEXT_COLOR,
      },
    },
    legend: {
      height: '80%',
      width: '80%',
      textStyle: {
        color: DARK_LEGEND_COLOR,
      },
    },
    textStyle: {
      color: DARK_TEXT_COLOR,
    },
    title: {
      textStyle: {
        color: DARK_TITLE_COLOR,
      },
    },
    toolbox: {
      iconStyle: {
        normal: {
          borderColor: DARK_LINE_COLOR,
        },
      },
    },
    dataZoom: {
      textStyle: {
        color: DARK_TEXT_COLOR,
      },
    },
    timeline: {
      lineStyle: {
        color: DARK_LINE_COLOR,
      },
      label: {
        normal: {
          textStyle: {
            color: DARK_TEXT_COLOR,
          },
        },
      },
    },
    timeAxis: axisCommon('dark'),
    logAxis: axisCommon('dark'),
    valueAxis: {
      ...axisCommon('dark'),
      axisLine: {
        show: false,
        lineStyle: {
          color: DARK_AXIS_COLOR,
        },
      },
      axisTick: {
        show: false
      },
    },
    categoryAxis: {
      ...axisCommon('dark'),
      axisLine: {
        show: true,
        lineStyle: {
          color: DARK_AXIS_COLOR,
        },
      },
      axisTick: {
        show: false
      },
    },
    line: {
      symbol: 'circle',
    },
    graph: {
      color: DEFAULT_BASIC_COLOR_PALETTE,
    },
    geo: {
      itemStyle: {
        normal: {
          borderColor: '#fff', // 地图省与省之间的线条的颜色
          areaColor: '#37383A', // 地图省区域的颜色
        },
      },
    },
  },

  defaultLightTheme: {
    color: DEFAULT_BASIC_COLOR_PALETTE,
    tooltip: {
      axisPointer: {
        label: {
          show: false
        },
        lineStyle: {
          color: LIGHT_LINE_COLOR,
          width: 2,
          type: [2, 3]
        },
        crossStyle: {
          color: LIGHT_LINE_COLOR,
          width: 2,
          type: [2, 3]
        },
      },
      backgroundColor: 'rgba(255,255,255,0.96)',
      extraCssText: 'border-radius: 8px;box-shadow: 0 1px 4px 0 rgba(37,43,58,0.1);',
      borderWidth: 0,
      padding: [8, 8],
      textStyle: {
        color: LIGHT_LEGEND_COLOR,
        fontSize: 12
      },
    },
    legend: {
      height: '80%',
      width: '80%',
      align: 'left',
      textStyle: {
        color: LIGHT_LEGEND_COLOR,
      },
    },
    textStyle: {
      color: LIGHT_TEXT_COLOR,
    },
    title: {
      textStyle: {
        color: LIGHT_TITLE_COLOR,
      },
    },
    toolbox: {
      iconStyle: {
        normal: {
          borderColor: LIGHT_LINE_COLOR,
        },
      },
    },
    dataZoom: {
      textStyle: {
        color: LIGHT_TEXT_COLOR,
      },
    },
    radar: {
      splitLine: {
        lineStyle: {
          color: LIGHT_AXIS_COLOR
        },
      },
      axisLine: {
        lineStyle: {
          color: LIGHT_AXIS_COLOR
        },
      }
    },
    timeline: {
      lineStyle: {
        color: LIGHT_LINE_COLOR,
      },
      label: {
        normal: {
          textStyle: {
            color: LIGHT_TEXT_COLOR,
          },
        },
      },
    },
    timeAxis: axisCommon('light'),
    logAxis: axisCommon('light'),
    valueAxis: {
      ...axisCommon('light'),
      axisLine: {
        show: false,
        lineStyle: {
          color: LIGHT_AXIS_COLOR,
        },
      },
      axisTick: {
        show: false
      },
    },
    categoryAxis: {
      ...axisCommon('light'),
      axisLine: {
        show: true,
        lineStyle: {
          color: LIGHT_AXIS_COLOR,
        },
      },
      axisTick: {
        show: false
      },
    },
    line: {
      symbol: 'emptyCircle',
      markPoint: {
        label: {
          show: true,
          color: LIGHT_TEXT_COLOR,
        }
      }
    },
    graph: {
      color: DEFAULT_BASIC_COLOR_PALETTE,
    },
    geo: {
      itemStyle: {
        normal: {
          borderColor: '#fff',
          areaColor: '#eaebed',
        },
      },
    },
  },

  colorMap: {
    default: defaultColorPalette,
    divergent: divergentColorPalette,
    sequential: sequentialColorPalette,
    adjacent: adjacentColorPalette,
    semantic: semanticColor
  }
};
