export const radarOptions = {
  "tooltip": {
      "renderMode": "html",
      "appendToBody": true,
      "enterable": false,
      "showDelay": 0
  },
  "legend": {
      "show": false,
      "left": "center",
      "top": "bottom",
      "orient": "horizontal",
      "type": "scroll",
      "align": "left",
      "itemGap": 16,
      "itemWidth": 13,
      "itemHeight": 13,
      "height": "85%",
      "width": "85%",
      "pageButtonGap": 20,
      "pageIconSize": 10,
      "formatter": "{t|{name}}",
      "textStyle": {
          "rich": {
              "t": {
                  "lineHeight": 18,
                  "padding": [
                      3,
                      0,
                      0,
                      0
                  ]
              }
          }
      },
      "pageIcons": {
          "horizontal": [
              "path://M307.2 516.642133c0-13.755733 5.12-27.477333 15.7696-37.649066l326.7584-326.792534a53.1456 53.1456 0 0 1 75.332267 0 53.1456 53.1456 0 0 1 0 75.332267l-289.109334 289.109333 289.109334 289.109334a53.1456 53.1456 0 0 1 0 75.332266 53.1456 53.1456 0 0 1-75.332267 0l-326.7584-326.792533A53.6576 53.6576 0 0 1 307.2 516.642133z",
              "path://M613.3 512.4L274.9 850.8c-24.9 24.9-24.9 65.6 0 90.5 24.9 24.9 65.6 24.9 90.5 0L749 557.7c6.2-6.2 10.9-13.4 14-21.1 5.4-13.5 6.1-28.5 2-42.4-0.6-2-1.3-3.9-2-5.9-3.1-7.7-7.8-14.9-14-21.1L365.4 83.5c-24.9-24.9-65.6-24.9-90.5 0-24.9 24.9-24.9 65.6 0 90.5l338.4 338.4z"
          ],
          "vertical": [
              "path://M537.408 362.272l2.24 2.496 249.92 247.008c13.92 13.76 13.92 36.096 0 49.92a36.032 36.032 0 0 1-47.136 2.944l-3.392-2.976L512 437.28l-227.04 224.384a36.032 36.032 0 0 1-47.104 2.976l-3.392-2.976a34.976 34.976 0 0 1 0-49.92l249.856-246.976 2.272-2.496c6.432-6.368 14.72-9.792 23.136-10.272h4.512c7.04 0.416 13.952 2.848 19.776 7.328l3.392 2.944z",
              "path://M537.408 661.728l2.24-2.496 249.92-247.008a34.976 34.976 0 0 0 0-49.92 36.032 36.032 0 0 0-47.136-2.944l-3.392 2.976L512 586.72l-227.04-224.384a36.032 36.032 0 0 0-47.104-2.976l-3.392 2.976a34.976 34.976 0 0 0 0 49.92l249.856 246.976 2.272 2.496c6.432 6.368 14.72 9.792 23.136 10.272h4.512a35.84 35.84 0 0 0 19.776-7.328l3.392-2.944z"
          ]
      },
      "icon": "circle"
  },
  "radar": {
      "shape": "circle",
      "splitNumber": 5,
      "splitLine": {
          "show": true,
          "lineStyle": {
              "color": [
                  "#535152"
              ],
              "width": 2
          }
      },
      "splitArea": {
          "show": false,
          "areaStyle": {
              "color": "transparent"
          }
      },
      "center": [
          "40%",
          "50%"
      ],
      "radius": "75%",
      "axisLine": {
          "show": true,
          "lineStyle": {
              "color": "#535152"
          }
      },
      "name": {
          "textStyle": {
              "fontSize": "12px"
          }
      },
      "indicator": [
          {
              "name": "成功率",
              "max": 6500
          },
          {
              "name": "异常数",
              "max": 16000
          },
          {
              "name": "平均RT",
              "max": 30000
          },
          {
              "name": "性能",
              "max": 38000
          },
          {
              "name": "利用率",
              "max": 52000
          }
      ],
      "axisName": {
          "color": "#CED1DB",
          "fontSize": 14
      }
  },
  "series": [
      {
          "type": "radar",
          "data": [
              {
                  "value": [
                      4300,
                      10000,
                      28000,
                      15000,
                      50000
                  ],
                  "name": "192-168-20-16"
              }
          ],
          "areaStyle": {
              "opacity": 0.1
          },
          "emphasis": {
              "focus": "self",
              "areaStyle": {
                  "opacity": 0.2
              }
          }
      }
  ]
}

export const simpleBarOptions = {
  "xAxis": {
      "show": false,
      "type": "category",
      "data": [
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri"
      ]
  },
  "yAxis": {
      "show": false,
      "type": "value"
  },
  "tooltip": {
      "trigger": "axis",
      "axisPointer": {
          "type": "shadow"
      },
      "renderMode": "html",
      "appendToBody": true,
      "enterable": false,
      "showDelay": 0
  },
  "legend": {
      "show": false
  },
  "grid": {
      "top": 2,
      "right": 0,
      "bottom": 6,
      "left": 0
  },
  "series": [
      {
          "type": "bar",
          "name": "A组",
          "data": [
              {
                  "value": [
                      0,
                      220
                  ],
                  "itemStyle": {
                      "borderRadius": null
                  }
              },
              {
                  "value": [
                      1,
                      332
                  ],
                  "itemStyle": {
                      "borderRadius": null
                  }
              },
              {
                  "value": [
                      2,
                      901
                  ],
                  "itemStyle": {
                      "borderRadius": null
                  }
              },
              {
                  "value": [
                      3,
                      934
                  ],
                  "itemStyle": {
                      "borderRadius": null
                  }
              },
              {
                  "value": [
                      4,
                      1290
                  ],
                  "itemStyle": {
                      "borderRadius": null
                  }
              }
          ],
          "itemStyle": {
              "borderRadius": 4
          },
          "stack": false,
          "barWidth": null,
          "barCategoryGap": "40%",
          "showBackground": true,
          "backgroundStyle": {
              "color": "rgba(92,141,255,0.1)",
              "borderRadius": 4
          },
          "emphasis": {
              "itemStyle": {
                  "shadowBlur": 4,
                  "shadowOffsetY": 2,
                  "shadowColor": "rgba(92,141,255,0.4)"
              }
          }
      }
  ]
}

export const simpleBarOptions2 = {
  "xAxis": {
      "show": false,
      "type": "category",
      "data": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10"
      ]
  },
  "yAxis": {
      "show": false,
      "type": "value"
  },
  "tooltip": {
      "trigger": "axis",
      "axisPointer": {
          "type": "shadow"
      },
      "renderMode": "html",
      "appendToBody": true,
      "enterable": false,
      "showDelay": 0
  },
  "legend": {
      "show": false
  },
  "grid": {
      "top": 2,
      "right": 0,
      "bottom": 6,
      "left": 0
  },
  "series": [
      {
          "type": "bar",
          "name": "A组",
          "data": [
              {
                  "value": [
                      0,
                      220
                  ],
                  "itemStyle": {
                      "borderRadius": null
                  }
              },
              {
                  "value": [
                      1,
                      332
                  ],
                  "itemStyle": {
                      "borderRadius": null
                  }
              },
              {
                  "value": [
                      2,
                      901
                  ],
                  "itemStyle": {
                      "borderRadius": null
                  }
              },
              {
                  "value": [
                      3,
                      934
                  ],
                  "itemStyle": {
                      "borderRadius": null
                  }
              },
              {
                  "value": [
                      4,
                      1290
                  ],
                  "itemStyle": {
                      "borderRadius": null
                  }
              },
              {
                  "value": [
                      5,
                      420
                  ],
                  "itemStyle": {
                      "borderRadius": null
                  }
              },
              {
                  "value": [
                      6,
                      1332
                  ],
                  "itemStyle": {
                      "borderRadius": null
                  }
              },
              {
                  "value": [
                      7,
                      301
                  ],
                  "itemStyle": {
                      "borderRadius": null
                  }
              },
              {
                  "value": [
                      8,
                      234
                  ],
                  "itemStyle": {
                      "borderRadius": null
                  }
              },
              {
                  "value": [
                      9,
                      290
                  ],
                  "itemStyle": {
                      "borderRadius": null
                  }
              }
          ],
          "itemStyle": {
              "borderRadius": 4
          },
          "stack": false,
          "barWidth": null,
          "barCategoryGap": "40%",
          "showBackground": true,
          "backgroundStyle": {
              "color": "rgba(92,141,255,0.1)",
              "borderRadius": 4
          },
          "emphasis": {
              "itemStyle": {
                  "shadowBlur": 4,
                  "shadowOffsetY": 2,
                  "shadowColor": "rgba(92,141,255,0.4)"
              }
          }
      }
  ]
}

export const simpleLineOptions = {
  "legend": {
      "show": false
  },
  "tooltip": {
      "trigger": "axis",
      "renderMode": "html",
      "enterable": false,
      "showDelay": 0,
      "hideDelay": 0,
      "appendToBody": true,
      "order": "valueAsc",
      "axisPointer": {
          "type": "line",
          "snap": true
      }
  },
  "grid": {
      "top": 4,
      "bottom": 0,
      "left": 4,
      "right": 4
  },
  "xAxis": {
      "show": false,
      "type": "category",
      "data": [
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri"
      ],
      "boundaryGap": false
  },
  "yAxis": {
      "show": false,
      "type": "value"
  },
  "series": [
      {
          "type": "line",
          "smooth": true,
          "showSymbol": false,
          "symbolSize": 5,
          "lineStyle": {
              "width": 1.5
          },
          "data": [
              [
                  0,
                  220
              ],
              [
                  1,
                  332
              ],
              [
                  2,
                  901
              ],
              [
                  3,
                  934
              ],
              [
                  4,
                  1290
              ]
          ],
          "name": "A组",
          "step": false,
          "areaStyle": {
              "color": "rgba(92,141,255,0.24)"
          }
      }
  ]
}

export const simpleLineOptions2 = {
  "legend": {
      "show": false
  },
  "tooltip": {
      "trigger": "axis",
      "renderMode": "html",
      "enterable": false,
      "showDelay": 0,
      "hideDelay": 0,
      "appendToBody": true,
      "order": "valueAsc",
      "axisPointer": {
          "type": "line",
          "snap": true
      }
  },
  "grid": {
      "top": 4,
      "bottom": 0,
      "left": 4,
      "right": 4
  },
  "xAxis": {
      "show": false,
      "type": "category",
      "data": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10"
      ],
      "boundaryGap": false
  },
  "yAxis": {
      "show": false,
      "type": "value"
  },
  "series": [
      {
          "type": "line",
          "smooth": true,
          "showSymbol": false,
          "symbolSize": 5,
          "lineStyle": {
              "width": 1.5
          },
          "data": [
              [
                  0,
                  220
              ],
              [
                  1,
                  332
              ],
              [
                  2,
                  901
              ],
              [
                  3,
                  934
              ],
              [
                  4,
                  1290
              ],
              [
                  5,
                  420
              ],
              [
                  6,
                  1332
              ],
              [
                  7,
                  301
              ],
              [
                  8,
                  234
              ],
              [
                  9,
                  290
              ]
          ],
          "name": "A组",
          "step": false,
          "areaStyle": {
              "color": "rgba(92,141,255,0.24)"
          }
      }
  ]
}

export const barOption = {
  "xAxis": {
      "show": true,
      "type": "category",
      "name": "",
      "nameLocation": "end",
      "nameGap": 0,
      "boundaryGap": true,
      "data": [
          "Matcha Latte",
          "Milk Tea",
          "Cheese Cocoa",
          "Walnut Brownie",
          "aa Latte"
      ]
  },
  "yAxis": {
      "show": true,
      "type": "value",
      "axisLine": {
          "show": false
      },
      "axisTick": {
          "show": false
      },
      "axisLabel": {
          "formatter": "{value} "
      },
      "name": "",
      "nameLocation": "end"
  },
  "tooltip": {
      "trigger": "axis",
      "axisPointer": {
          "type": "shadow"
      },
      "renderMode": "html",
      "appendToBody": true,
      "enterable": false,
      "showDelay": 0
  },
  "dataZoom": null,
  "series": [
      {
          "type": "bar",
          "name": "2021",
          "data": [
              {
                  "value": [
                      0,
                      23.3
                  ],
                  "itemStyle": {
                      "borderRadius": null
                  }
              },
              {
                  "value": [
                      1,
                      33.1
                  ],
                  "itemStyle": {
                      "borderRadius": null
                  }
              },
              {
                  "value": [
                      2,
                      46.4
                  ],
                  "itemStyle": {
                      "borderRadius": null
                  }
              },
              {
                  "value": [
                      3,
                      52.4
                  ],
                  "itemStyle": {
                      "borderRadius": null
                  }
              },
              {
                  "value": [
                      4,
                      63.3
                  ],
                  "itemStyle": {
                      "borderRadius": null
                  }
              }
          ],
          "barWidth": "40%",
          "label": {
              "show": false,
              "position": "top"
          },
          "barMaxWidth": 32,
          "showBackground": false,
          "backgroundStyle": {
              "color": "rgba(92,141,255,0.1)"
          },
          "barGap": "1%",
          "itemStyle": {
              "borderRadius": [
                  4,
                  4,
                  0,
                  0
              ]
          },
          "emphasis": {
              "focus": "series"
          },
          "blur": {
              "itemStyle": {
                  "opacity": 0.5
              }
          },
          "barCategoryGap": "60%",
          "stack": false
      },
      {
          "type": "bar",
          "name": "2022",
          "data": [
              {
                  "value": [
                      0,
                      45.8
                  ],
                  "itemStyle": {
                      "borderRadius": [
                          4,
                          4,
                          0,
                          0
                      ]
                  }
              },
              {
                  "value": [
                      1,
                      53.4
                  ],
                  "itemStyle": {
                      "borderRadius": [
                          4,
                          4,
                          0,
                          0
                      ]
                  }
              },
              {
                  "value": [
                      2,
                      65.2
                  ],
                  "itemStyle": {
                      "borderRadius": [
                          4,
                          4,
                          0,
                          0
                      ]
                  }
              },
              {
                  "value": [
                      3,
                      73.9
                  ],
                  "itemStyle": {
                      "borderRadius": [
                          4,
                          4,
                          0,
                          0
                      ]
                  }
              },
              {
                  "value": [
                      4,
                      85.8
                  ],
                  "itemStyle": {
                      "borderRadius": [
                          4,
                          4,
                          0,
                          0
                      ]
                  }
              }
          ],
          "barWidth": "40%",
          "label": {
              "show": false,
              "position": "top"
          },
          "barMaxWidth": 32,
          "showBackground": false,
          "backgroundStyle": {
              "color": "rgba(188,148,255,0.1)"
          },
          "barGap": "1%",
          "itemStyle": {
              "borderRadius": [
                  4,
                  4,
                  0,
                  0
              ]
          },
          "emphasis": {
              "focus": "series"
          },
          "blur": {
              "itemStyle": {
                  "opacity": 0.5
              }
          },
          "barCategoryGap": "60%",
          "stack": false
      }
  ],
  "legend": {
      "left": "left",
      "top": "top",
      "orient": "horizontal",
      "type": "scroll",
      "align": "left",
      "itemGap": 16,
      "itemWidth": 10,
      "itemHeight": 10,
      "height": "85%",
      "width": "85%",
      "pageButtonGap": 20,
      "pageIconSize": 10,
      "formatter": "{t|{name}}",
      "textStyle": {
          "rich": {
              "t": {
                  "lineHeight": 18,
                  "padding": [
                      3,
                      0,
                      0,
                      0
                  ]
              }
          }
      },
      "pageIcons": {
          "horizontal": [
              "path://M307.2 516.642133c0-13.755733 5.12-27.477333 15.7696-37.649066l326.7584-326.792534a53.1456 53.1456 0 0 1 75.332267 0 53.1456 53.1456 0 0 1 0 75.332267l-289.109334 289.109333 289.109334 289.109334a53.1456 53.1456 0 0 1 0 75.332266 53.1456 53.1456 0 0 1-75.332267 0l-326.7584-326.792533A53.6576 53.6576 0 0 1 307.2 516.642133z",
              "path://M613.3 512.4L274.9 850.8c-24.9 24.9-24.9 65.6 0 90.5 24.9 24.9 65.6 24.9 90.5 0L749 557.7c6.2-6.2 10.9-13.4 14-21.1 5.4-13.5 6.1-28.5 2-42.4-0.6-2-1.3-3.9-2-5.9-3.1-7.7-7.8-14.9-14-21.1L365.4 83.5c-24.9-24.9-65.6-24.9-90.5 0-24.9 24.9-24.9 65.6 0 90.5l338.4 338.4z"
          ],
          "vertical": [
              "path://M537.408 362.272l2.24 2.496 249.92 247.008c13.92 13.76 13.92 36.096 0 49.92a36.032 36.032 0 0 1-47.136 2.944l-3.392-2.976L512 437.28l-227.04 224.384a36.032 36.032 0 0 1-47.104 2.976l-3.392-2.976a34.976 34.976 0 0 1 0-49.92l249.856-246.976 2.272-2.496c6.432-6.368 14.72-9.792 23.136-10.272h4.512c7.04 0.416 13.952 2.848 19.776 7.328l3.392 2.944z",
              "path://M537.408 661.728l2.24-2.496 249.92-247.008a34.976 34.976 0 0 0 0-49.92 36.032 36.032 0 0 0-47.136-2.944l-3.392 2.976L512 586.72l-227.04-224.384a36.032 36.032 0 0 0-47.104-2.976l-3.392 2.976a34.976 34.976 0 0 0 0 49.92l249.856 246.976 2.272 2.496c6.432 6.368 14.72 9.792 23.136 10.272h4.512a35.84 35.84 0 0 0 19.776-7.328l3.392-2.944z"
          ]
      },
      "show": true
  },
  "grid": {
      "containLabel": true,
      "top": 48,
      "bottom": 4,
      "left": 0,
      "right": 12
  }
}

export const pieOption = {
  "tooltip": {
      "trigger": "item",
      "renderMode": "html",
      "appendToBody": true,
      "enterable": false,
      "showDelay": 0
  },
  "series": [
      {
          "name": "区域数据",
          "type": "pie",
          "radius": [
              "60%",
              "80%"
          ],
          "left": "25%",
          "itemStyle": {
              "borderRadius": 0,
              "borderColor": "#fff",
              "borderWidth": 1
          },
          "data": [
              {
                  "name": "成都",
                  "value": [
                      273
                  ]
              },
              {
                  "name": "绵阳",
                  "value": [
                      150
                  ]
              },
              {
                  "name": "达州",
                  "value": [
                      100
                  ]
              },
              {
                  "name": "昆明",
                  "value": [
                      118
                  ]
              },
              {
                  "name": "大理",
                  "value": [
                      26
                  ]
              },
              {
                  "name": "红河",
                  "value": [
                      44
                  ]
              },
              {
                  "name": "贵阳",
                  "value": [
                      147
                  ]
              },
              {
                  "name": "遵义",
                  "value": [
                      50
                  ]
              },
              {
                  "name": "安顺",
                  "value": [
                      50
                  ]
              }
          ],
          "label": {
              "show": true
          }
      },
      {
          "name": "区域数据",
          "type": "pie",
          "radius": "40%",
          "left": "25%",
          "itemStyle": {
              "borderRadius": 0,
              "borderColor": "#fff",
              "borderWidth": 1
          },
          "label": {
              "position": "inner",
              "show": true,
              "fontSize": 14
          },
          "data": [
              {
                  "name": "四川",
                  "value": [
                      523
                  ]
              },
              {
                  "name": "云南",
                  "value": [
                      188
                  ]
              },
              {
                  "name": "贵州",
                  "value": [
                      247
                  ]
              }
          ]
      }
  ],
  "legend": {
      "show": true,
      "left": "left",
      "top": "center",
      "orient": "vertical",
      "type": "scroll",
      "align": "left",
      "itemGap": 16,
      "itemWidth": 10,
      "itemHeight": 10,
      "height": "85%",
      "width": "85%",
      "pageButtonGap": 20,
      "pageIconSize": 10,
      "textStyle": {
          "rich": {
              "name": {
                  "lineHeight": 18,
                  "padding": [
                      3,
                      0,
                      0,
                      0
                  ]
              },
              "number": {
                  "float": "right",
                  "fontWeight": "bold",
                  "color": "#252b3a",
                  "padding": [
                      3,
                      0,
                      0,
                      0
                  ]
              }
          }
      },
      "pageIcons": {
          "horizontal": [
              "path://M307.2 516.642133c0-13.755733 5.12-27.477333 15.7696-37.649066l326.7584-326.792534a53.1456 53.1456 0 0 1 75.332267 0 53.1456 53.1456 0 0 1 0 75.332267l-289.109334 289.109333 289.109334 289.109334a53.1456 53.1456 0 0 1 0 75.332266 53.1456 53.1456 0 0 1-75.332267 0l-326.7584-326.792533A53.6576 53.6576 0 0 1 307.2 516.642133z",
              "path://M613.3 512.4L274.9 850.8c-24.9 24.9-24.9 65.6 0 90.5 24.9 24.9 65.6 24.9 90.5 0L749 557.7c6.2-6.2 10.9-13.4 14-21.1 5.4-13.5 6.1-28.5 2-42.4-0.6-2-1.3-3.9-2-5.9-3.1-7.7-7.8-14.9-14-21.1L365.4 83.5c-24.9-24.9-65.6-24.9-90.5 0-24.9 24.9-24.9 65.6 0 90.5l338.4 338.4z"
          ],
          "vertical": [
              "path://M537.408 362.272l2.24 2.496 249.92 247.008c13.92 13.76 13.92 36.096 0 49.92a36.032 36.032 0 0 1-47.136 2.944l-3.392-2.976L512 437.28l-227.04 224.384a36.032 36.032 0 0 1-47.104 2.976l-3.392-2.976a34.976 34.976 0 0 1 0-49.92l249.856-246.976 2.272-2.496c6.432-6.368 14.72-9.792 23.136-10.272h4.512c7.04 0.416 13.952 2.848 19.776 7.328l3.392 2.944z",
              "path://M537.408 661.728l2.24-2.496 249.92-247.008a34.976 34.976 0 0 0 0-49.92 36.032 36.032 0 0 0-47.136-2.944l-3.392 2.976L512 586.72l-227.04-224.384a36.032 36.032 0 0 0-47.104-2.976l-3.392 2.976a34.976 34.976 0 0 0 0 49.92l249.856 246.976 2.272 2.496c6.432 6.368 14.72 9.792 23.136 10.272h4.512a35.84 35.84 0 0 0 19.776-7.328l3.392-2.944z"
          ]
      },
      "itemStyle": {
          "borderWidth": 0
      },
      "inactiveBorderWidth": 0,
      "data": [
          "成都",
          "绵阳",
          "达州",
          "昆明",
          "大理",
          "红河",
          "贵阳",
          "遵义",
          "安顺",
          "四川",
          "云南",
          "贵州"
      ]
  },
  "grid": {
      "containLabel": true,
      "top": 60,
      "bottom": 20,
      "left": 20,
      "right": 8
  }
}

export const gaugeOption = {
  "tooltip": {
      "show": false,
      "renderMode": "html",
      "appendToBody": true,
      "enterable": false,
      "showDelay": 0,
      "formatter": "{a} <br />{b}: <b>{c}%</b>"
  },
  "series": [
      {
          "type": "gauge",
          "startAngle": 210,
          "endAngle": -30,
          "name": "流量",
          "min": 0,
          "max": 100,
          "radius": "100%",
          "center": [
              "50%",
              "60%"
          ],
          "splitNumber": 12,
          "itemStyle": {
              "color": "#4FBF67"
          },
          "progress": {
              "show": true,
              "roundCap": true,
              "width": 20,
              "color": "#4FBF67"
          },
          "axisLine": {
              "roundCap": true,
              "lineStyle": {
                  "width": 20
              }
          },
          "pointer": {
              "show": false
          },
          "axisTick": {
              "splitNumber": 5,
              "distance": 4,
              "lineStyle": {
                  "color": [
                      1,
                      "#adb0b8"
                  ]
              }
          },
          "splitLine": {
              "lineStyle": {
                  "width": 1,
                  "color": "#adb0b8"
              },
              "length": 6
          },
          "title": {
              "show": false
          },
          "axisLabel": {
              "show": false,
              "rich": {
                  "min": {
                      "padding": [
                          70,
                          0,
                          0,
                          -30
                      ]
                  },
                  "max": {
                      "padding": [
                          70,
                          -35,
                          0,
                          0
                      ]
                  }
              }
          },
          "data": [
              {
                  "value": [
                      30
                  ],
                  "name": "CPU ALLOC"
              }
          ],
          "detail": {
              "show": false
          }
      },
      {
          "type": "gauge",
          "startAngle": 210,
          "endAngle": -30,
          "name": "流量",
          "min": 0,
          "max": 100,
          "radius": "108%",
          "center": [
              "50%",
              "60%"
          ],
          "axisTick": {
              "show": false
          },
          "pointer": {
              "show": true,
              "itemStyle": {
                  "color": "auto"
              },
              "width": 4
          },
          "splitLine": {
              "show": false
          },
          "axisLabel": {
              "show": false
          },
          "axisLine": {
              "roundCap": true,
              "lineStyle": {
                  "width": 6,
                  "color": [
                      [
                          0.6,
                          "#4FBF67"
                      ],
                      [
                          0.8,
                          "#F3C836"
                      ],
                      [
                          1,
                          "#F65E59"
                      ]
                  ]
              }
          },
          "anchor": {
              "show": true,
              "showAbove": true,
              "size": 12,
              "itemStyle": {
                  "borderWidth": 4,
                  "borderColor": "#4FBF67"
              }
          },
          "title": {
              "show": true,
              "color": "#71757f",
              "offsetCenter": [
                  0,
                  "-30%"
              ],
              "fontSize": 22,
              "fontWeight": "bold"
          },
          "detail": {
              "width": "60%",
              "offsetCenter": [
                  0,
                  "30%"
              ],
              "valueAnimation": true,
              "rich": {
                  "value": {
                      "fontSize": 30,
                      "fontWeight": "bolder",
                      "color": "#4FBF67"
                  },
                  "unit": {
                      "fontSize": 16,
                      "fontWeight": "bolder",
                      "padding": [
                          0,
                          0,
                          -5,
                          4
                      ],
                      "color": "#4FBF67"
                  }
              },
              formatter: (value: any) => {
                return '{value|' + value + '}{unit|' + '%' +'}';
              }
          },
          "data": [
              {
                  "value": [
                      30
                  ],
                  "name": "CPU ALLOC"
              }
          ]
      }
  ]
}

export const gaugeOption2 = {
  "tooltip": {
      "show": false,
      "renderMode": "html",
      "appendToBody": true,
      "enterable": false,
      "showDelay": 0,
      "formatter": "{a} <br />{b}: <b>{c}%</b>"
  },
  "series": [
      {
          "type": "gauge",
          "startAngle": 210,
          "endAngle": -30,
          "name": "流量",
          "min": 0,
          "max": 100,
          "radius": "100%",
          "center": [
              "50%",
              "60%"
          ],
          "splitNumber": 12,
          "itemStyle": {
              "color": "#F3C836"
          },
          "progress": {
              "show": true,
              "roundCap": true,
              "width": 20,
              "color": "#F3C836"
          },
          "axisLine": {
              "roundCap": true,
              "lineStyle": {
                  "width": 20
              }
          },
          "pointer": {
              "show": false
          },
          "axisTick": {
              "splitNumber": 5,
              "distance": 4,
              "lineStyle": {
                  "color": [
                      1,
                      "#adb0b8"
                  ]
              }
          },
          "splitLine": {
              "lineStyle": {
                  "width": 1,
                  "color": "#adb0b8"
              },
              "length": 6
          },
          "title": {
              "show": false
          },
          "axisLabel": {
              "show": false,
              "rich": {
                  "min": {
                      "padding": [
                          70,
                          0,
                          0,
                          -30
                      ]
                  },
                  "max": {
                      "padding": [
                          70,
                          -35,
                          0,
                          0
                      ]
                  }
              }
          },
          "data": [
              {
                  "value": [
                      78
                  ],
                  "name": "CPU ALLOC"
              }
          ],
          "detail": {
              "show": false
          }
      },
      {
          "type": "gauge",
          "startAngle": 210,
          "endAngle": -30,
          "name": "流量",
          "min": 0,
          "max": 100,
          "radius": "108%",
          "center": [
              "50%",
              "60%"
          ],
          "axisTick": {
              "show": false
          },
          "pointer": {
              "show": true,
              "itemStyle": {
                  "color": "auto"
              },
              "width": 4
          },
          "splitLine": {
              "show": false
          },
          "axisLabel": {
              "show": false
          },
          "axisLine": {
              "roundCap": true,
              "lineStyle": {
                  "width": 6,
                  "color": [
                      [
                          0.6,
                          "#4FBF67"
                      ],
                      [
                          0.8,
                          "#F3C836"
                      ],
                      [
                          1,
                          "#F65E59"
                      ]
                  ]
              }
          },
          "anchor": {
              "show": true,
              "showAbove": true,
              "size": 12,
              "itemStyle": {
                  "borderWidth": 4,
                  "borderColor": "#F3C836"
              }
          },
          "title": {
              "show": true,
              "color": "#71757f",
              "offsetCenter": [
                  0,
                  "-30%"
              ],
              "fontSize": 22,
              "fontWeight": "bold"
          },
          "detail": {
              "width": "60%",
              "offsetCenter": [
                  0,
                  "30%"
              ],
              "valueAnimation": true,
              "rich": {
                  "value": {
                      "fontSize": 30,
                      "fontWeight": "bolder",
                      "color": "#F3C836"
                  },
                  "unit": {
                      "fontSize": 16,
                      "fontWeight": "bolder",
                      "padding": [
                          0,
                          0,
                          -5,
                          4
                      ],
                      "color": "#F3C836"
                  }
              },
              formatter: (value: any) => {
                return '{value|' + value + '}{unit|' + '%' +'}';
              }
          },
          "data": [
              {
                  "value": [
                      78
                  ],
                  "name": "CPU ALLOC"
              }
          ]
      }
  ]
}

export const gaugeOption3 = {
  "tooltip": {
      "show": false,
      "renderMode": "html",
      "appendToBody": true,
      "enterable": false,
      "showDelay": 0,
      "formatter": "{a} <br />{b}: <b>{c}%</b>"
  },
  "series": [
      {
          "type": "gauge",
          "startAngle": 210,
          "endAngle": -30,
          "name": "流量",
          "min": 0,
          "max": 100,
          "radius": "100%",
          "center": [
              "50%",
              "60%"
          ],
          "splitNumber": 12,
          "itemStyle": {
              "color": "#F65E59"
          },
          "progress": {
              "show": true,
              "roundCap": true,
              "width": 20,
              "color": "#F65E59"
          },
          "axisLine": {
              "roundCap": true,
              "lineStyle": {
                  "width": 20
              }
          },
          "pointer": {
              "show": false
          },
          "axisTick": {
              "splitNumber": 5,
              "distance": 4,
              "lineStyle": {
                  "color": [
                      1,
                      "#adb0b8"
                  ]
              }
          },
          "splitLine": {
              "lineStyle": {
                  "width": 1,
                  "color": "#adb0b8"
              },
              "length": 6
          },
          "title": {
              "show": false
          },
          "axisLabel": {
              "show": false,
              "rich": {
                  "min": {
                      "padding": [
                          70,
                          0,
                          0,
                          -30
                      ]
                  },
                  "max": {
                      "padding": [
                          70,
                          -35,
                          0,
                          0
                      ]
                  }
              }
          },
          "data": [
              {
                  "value": [
                      90
                  ],
                  "name": "CPU ALLOC"
              }
          ],
          "detail": {
              "show": false
          }
      },
      {
          "type": "gauge",
          "startAngle": 210,
          "endAngle": -30,
          "name": "流量",
          "min": 0,
          "max": 100,
          "radius": "108%",
          "center": [
              "50%",
              "60%"
          ],
          "axisTick": {
              "show": false
          },
          "pointer": {
              "show": true,
              "itemStyle": {
                  "color": "auto"
              },
              "width": 4
          },
          "splitLine": {
              "show": false
          },
          "axisLabel": {
              "show": false
          },
          "axisLine": {
              "roundCap": true,
              "lineStyle": {
                  "width": 6,
                  "color": [
                      [
                          0.6,
                          "#4FBF67"
                      ],
                      [
                          0.8,
                          "#F3C836"
                      ],
                      [
                          1,
                          "#F65E59"
                      ]
                  ]
              }
          },
          "anchor": {
              "show": true,
              "showAbove": true,
              "size": 12,
              "itemStyle": {
                  "borderWidth": 4,
                  "borderColor": "#F65E59"
              }
          },
          "title": {
              "show": true,
              "color": "#71757f",
              "offsetCenter": [
                  0,
                  "-30%"
              ],
              "fontSize": 22,
              "fontWeight": "bold"
          },
          "detail": {
              "width": "60%",
              "offsetCenter": [
                  0,
                  "30%"
              ],
              "valueAnimation": true,
              "rich": {
                  "value": {
                      "fontSize": 30,
                      "fontWeight": "bolder",
                      "color": "#F65E59"
                  },
                  "unit": {
                      "fontSize": 16,
                      "fontWeight": "bolder",
                      "padding": [
                          0,
                          0,
                          -5,
                          4
                      ],
                      "color": "#F65E59"
                  }
              },
              formatter: (value: any) => {
                return '{value|' + value + '}{unit|' + '%' +'}';
              }
          },
          "data": [
              {
                  "value": [
                      90
                  ],
                  "name": "CPU ALLOC"
              }
          ]
      }
  ]
}

export const horizontalOption = {
  "tooltip": {
      "trigger": "axis",
      "axisPointer": {
          "type": "shadow"
      },
      "renderMode": "html",
      "appendToBody": true,
      "enterable": false,
      "showDelay": 0
  },
  "xAxis": {
      "show": false,
      "type": "value",
      "axisLine": {
          "show": false
      },
      "axisTick": {
          "show": false
      },
      "axisLabel": {
          "show": true,
          "formatter": "{value}"
      }
  },
  "yAxis": {
      "show": true,
      "type": "category",
      "name": "",
      "nameLocation": "end",
      "nameGap": 0,
      "boundaryGap": true,
      "axisLabel": {
          "show": false,
          inside: true
      },
      "data": [
          "Class selectors should follow a naming convention 19280",
          "Single quotes should be used instead of double quotes 18439",
          "URL should be quoted 12645",
          "Obsolete function should not be us 5439",
          "Experimental function should not be used 4823"
      ],
      "z": 2,
      "inverse": true,
      "axisLine": {
          "show": false
      }
  },
  "series": [
      {
          "name": "数据",
          "type": "bar",
          "barWidth": "70%",
          "showBackground": false,
          "itemStyle": {
              "borderRadius": 0,
              "color": {
                  "type": "linear",
                  "x": 0,
                  "y": 0,
                  "x2": 1,
                  "y2": 0,
                  "colorStops": [
                      {
                          "offset": 0,
                          "color": "rgba(35, 141, 173, 0.08)"
                      },
                      {
                          "offset": 1,
                          "color": "rgba(35, 141, 173, 0.4)"
                      }
                  ],
                  "global": false
              }
          },
          "backgroundStyle": {
              "color": "rgba(92,141,255,0.1)"
          },
          "label": {
              "show": true,
              "position": "insideLeft",
              formatter: (param: any) => {
                return `${param.name}  {value| ${param.value[1]}}`;
              },
              "rich": {
                  "value": {
                      "fontWeight": "bold",
                      "fontSize": 14
                  }
              }
          },
          "stack": false,
          "encode": {
              "x": 1,
              "y": 0
          },
          "data": [
              {
                  "value": [
                      0,
                      19280
                  ],
                  "itemStyle": {
                      "borderRadius": 0,
                      "color": {
                          "type": "linear",
                          "x": 0,
                          "y": 0,
                          "x2": 1,
                          "y2": 0,
                          "colorStops": [
                              {
                                  "offset": 0,
                                  "color": "rgba(11, 129, 246, 0.08)"
                              },
                              {
                                  "offset": 1,
                                  "color": "rgba(11, 129, 246, 0.4)"
                              }
                          ],
                          "global": false
                      }
                  }
              },
              {
                  "value": [
                      1,
                      18439
                  ],
                  "itemStyle": {
                      "borderRadius": 0,
                      "color": {
                          "type": "linear",
                          "x": 0,
                          "y": 0,
                          "x2": 1,
                          "y2": 0,
                          "colorStops": [
                              {
                                  "offset": 0,
                                  "color": "rgba(252, 164, 76, 0.08)"
                              },
                              {
                                  "offset": 1,
                                  "color": "rgba(252, 164, 76, 0.4)"
                              }
                          ],
                          "global": false
                      }
                  }
              },
              {
                  "value": [
                      2,
                      12645
                  ],
                  "itemStyle": {
                      "borderRadius": 0,
                      "color": {
                          "type": "linear",
                          "x": 0,
                          "y": 0,
                          "x2": 1,
                          "y2": 0,
                          "colorStops": [
                              {
                                  "offset": 0,
                                  "color": "rgba(114, 93, 212, 0.08)"
                              },
                              {
                                  "offset": 1,
                                  "color": "rgba(114, 93, 212, 0.4)"
                              }
                          ],
                          "global": false
                      }
                  }
              },
              {
                  "value": [
                      3,
                      5439
                  ],
                  "itemStyle": {
                      "borderRadius": 0
                  }
              },
              {
                  "value": [
                      4,
                      4823
                  ],
                  "itemStyle": {
                      "borderRadius": 0
                  }
              }
          ],
          "emphasis": {
              "focus": "series"
          },
          "blur": {
              "itemStyle": {
                  "opacity": 0.5
              }
          }
      }
  ],
  "legend": {
      "left": "left",
      "top": "top",
      "orient": "horizontal",
      "type": "scroll",
      "align": "left",
      "itemGap": 16,
      "itemWidth": 10,
      "itemHeight": 10,
      "height": "85%",
      "width": "85%",
      "pageButtonGap": 20,
      "pageIconSize": 10,
      "formatter": "{t|{name}}",
      "textStyle": {
          "rich": {
              "t": {
                  "lineHeight": 18,
                  "padding": [
                      3,
                      0,
                      0,
                      0
                  ]
              }
          }
      },
      "pageIcons": {
          "horizontal": [
              "path://M307.2 516.642133c0-13.755733 5.12-27.477333 15.7696-37.649066l326.7584-326.792534a53.1456 53.1456 0 0 1 75.332267 0 53.1456 53.1456 0 0 1 0 75.332267l-289.109334 289.109333 289.109334 289.109334a53.1456 53.1456 0 0 1 0 75.332266 53.1456 53.1456 0 0 1-75.332267 0l-326.7584-326.792533A53.6576 53.6576 0 0 1 307.2 516.642133z",
              "path://M613.3 512.4L274.9 850.8c-24.9 24.9-24.9 65.6 0 90.5 24.9 24.9 65.6 24.9 90.5 0L749 557.7c6.2-6.2 10.9-13.4 14-21.1 5.4-13.5 6.1-28.5 2-42.4-0.6-2-1.3-3.9-2-5.9-3.1-7.7-7.8-14.9-14-21.1L365.4 83.5c-24.9-24.9-65.6-24.9-90.5 0-24.9 24.9-24.9 65.6 0 90.5l338.4 338.4z"
          ],
          "vertical": [
              "path://M537.408 362.272l2.24 2.496 249.92 247.008c13.92 13.76 13.92 36.096 0 49.92a36.032 36.032 0 0 1-47.136 2.944l-3.392-2.976L512 437.28l-227.04 224.384a36.032 36.032 0 0 1-47.104 2.976l-3.392-2.976a34.976 34.976 0 0 1 0-49.92l249.856-246.976 2.272-2.496c6.432-6.368 14.72-9.792 23.136-10.272h4.512c7.04 0.416 13.952 2.848 19.776 7.328l3.392 2.944z",
              "path://M537.408 661.728l2.24-2.496 249.92-247.008a34.976 34.976 0 0 0 0-49.92 36.032 36.032 0 0 0-47.136-2.944l-3.392 2.976L512 586.72l-227.04-224.384a36.032 36.032 0 0 0-47.104-2.976l-3.392 2.976a34.976 34.976 0 0 0 0 49.92l249.856 246.976 2.272 2.496c6.432 6.368 14.72 9.792 23.136 10.272h4.512a35.84 35.84 0 0 0 19.776-7.328l3.392-2.944z"
          ]
      },
      "show": false
  },
  "grid": {
      "containLabel": true,
      "top": 8,
      "bottom": 4,
      "left": 0,
      "right": 12
  }
}

export const lineOption = {
  "legend": {
      "left": "left",
      "top": "top",
      "orient": "horizontal",
      "type": "scroll",
      "align": "left",
      "itemGap": 16,
      "itemWidth": 18,
      "itemHeight": 10,
      "height": "85%",
      "width": "85%",
      "pageButtonGap": 20,
      "pageIconSize": 10,
      "formatter": "{t|{name}}",
      "textStyle": {
          "rich": {
              "t": {
                  "lineHeight": 18,
                  "padding": [
                      3,
                      0,
                      0,
                      0
                  ]
              }
          }
      },
      "pageIcons": {
          "horizontal": [
              "path://M307.2 516.642133c0-13.755733 5.12-27.477333 15.7696-37.649066l326.7584-326.792534a53.1456 53.1456 0 0 1 75.332267 0 53.1456 53.1456 0 0 1 0 75.332267l-289.109334 289.109333 289.109334 289.109334a53.1456 53.1456 0 0 1 0 75.332266 53.1456 53.1456 0 0 1-75.332267 0l-326.7584-326.792533A53.6576 53.6576 0 0 1 307.2 516.642133z",
              "path://M613.3 512.4L274.9 850.8c-24.9 24.9-24.9 65.6 0 90.5 24.9 24.9 65.6 24.9 90.5 0L749 557.7c6.2-6.2 10.9-13.4 14-21.1 5.4-13.5 6.1-28.5 2-42.4-0.6-2-1.3-3.9-2-5.9-3.1-7.7-7.8-14.9-14-21.1L365.4 83.5c-24.9-24.9-65.6-24.9-90.5 0-24.9 24.9-24.9 65.6 0 90.5l338.4 338.4z"
          ],
          "vertical": [
              "path://M537.408 362.272l2.24 2.496 249.92 247.008c13.92 13.76 13.92 36.096 0 49.92a36.032 36.032 0 0 1-47.136 2.944l-3.392-2.976L512 437.28l-227.04 224.384a36.032 36.032 0 0 1-47.104 2.976l-3.392-2.976a34.976 34.976 0 0 1 0-49.92l249.856-246.976 2.272-2.496c6.432-6.368 14.72-9.792 23.136-10.272h4.512c7.04 0.416 13.952 2.848 19.776 7.328l3.392 2.944z",
              "path://M537.408 661.728l2.24-2.496 249.92-247.008a34.976 34.976 0 0 0 0-49.92 36.032 36.032 0 0 0-47.136-2.944l-3.392 2.976L512 586.72l-227.04-224.384a36.032 36.032 0 0 0-47.104-2.976l-3.392 2.976a34.976 34.976 0 0 0 0 49.92l249.856 246.976 2.272 2.496c6.432 6.368 14.72 9.792 23.136 10.272h4.512a35.84 35.84 0 0 0 19.776-7.328l3.392-2.944z"
          ]
      },
      "show": true
  },
  "tooltip": {
      "trigger": "axis",
      "renderMode": "html",
      "enterable": false,
      "showDelay": 0,
      "hideDelay": 0,
      "appendToBody": true,
      "order": "valueAsc",
      "axisPointer": {
          "type": "line",
          "snap": true
      }
  },
  "grid": {
      "containLabel": true,
      "top": 48,
      "bottom": 4,
      "left": 0,
      "right": 12
  },
  "xAxis": {
      "show": true,
      "type": "category",
      "name": "",
      "nameLocation": "end",
      "nameGap": 4,
      "data": [
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
          "Sun"
      ],
      "boundaryGap": true,
      "axisLine": {
          "show": true
      }
  },
  "yAxis": {
      "show": true,
      "type": "value",
      "axisLabel": {
          "formatter": "{value} "
      },
      "axisLine": {
          "show": false
      },
      "name": "",
      "nameLocation": "end"
  },
  "dataZoom": null,
  "series": [
      {
          "type": "line",
          "triggerLineEvent": true,
          "smooth": false,
          "areaStyle": null,
          "connectNulls": true,
          "data": [
              [
                  0,
                  820
              ],
              [
                  1,
                  932
              ],
              [
                  2,
                  901
              ],
              [
                  3,
                  934
              ],
              [
                  4,
                  1290
              ],
              [
                  5,
                  1330
              ],
              [
                  6,
                  1320
              ]
          ],
          "name": "A组",
          "stack": null,
          "step": false,
          "emphasis": {
              "focus": "series",
              "itemStyle": {
                  "color": "#fff",
                  "borderColor": "#5C8DFF"
              }
          },
          "blur": {
              "lineStyle": {
                  "opacity": 1
              }
          },
          "lineStyle": {
              "width": 4
          },
          "showSymbol": true,
          "symbolSize": 5,
          "symbol": "circle",
          "itemStyle": {
              "borderColor": "#fff",
              "borderWidth": 2.5,
              "shadowColor": "rgba(37, 43, 58, 0.1)",
              "shadowBlur": 4
          }
      },
      {
          "type": "line",
          "triggerLineEvent": true,
          "smooth": false,
          "areaStyle": null,
          "connectNulls": true,
          "data": [
              [
                  0,
                  223
              ],
              [
                  1,
                  432
              ],
              [
                  2,
                  801
              ],
              [
                  3,
                  434
              ],
              [
                  4,
                  1490
              ],
              [
                  5,
                  1130
              ],
              [
                  6,
                  1020
              ]
          ],
          "name": "B组",
          "stack": null,
          "step": false,
          "emphasis": {
              "focus": "series",
              "itemStyle": {
                  "color": "#fff",
                  "borderColor": "#BC94FF"
              }
          },
          "blur": {
              "lineStyle": {
                  "opacity": 1
              }
          },
          "lineStyle": {
              "width": 4
          },
          "showSymbol": true,
          "symbolSize": 5,
          "symbol": "circle",
          "itemStyle": {
              "borderColor": "#fff",
              "borderWidth": 2.5,
              "shadowColor": "rgba(37, 43, 58, 0.1)",
              "shadowBlur": 4
          }
      }
  ]
}

export const trendLineOption = {
  "legend": {
      "left": "left",
      "top": "top",
      "orient": "horizontal",
      "type": "scroll",
      "align": "left",
      "itemGap": 16,
      "itemWidth": 18,
      "itemHeight": 10,
      "height": "85%",
      "width": "85%",
      "pageButtonGap": 20,
      "pageIconSize": 10,
      "formatter": "{t|{name}}",
      "padding": [
          5,
          1
      ],
      "textStyle": {
          "rich": {
              "t": {
                  "lineHeight": 18,
                  "padding": [
                      3,
                      0,
                      0,
                      0
                  ]
              }
          }
      },
      "pageIcons": {
          "horizontal": [
              "path://M307.2 516.642133c0-13.755733 5.12-27.477333 15.7696-37.649066l326.7584-326.792534a53.1456 53.1456 0 0 1 75.332267 0 53.1456 53.1456 0 0 1 0 75.332267l-289.109334 289.109333 289.109334 289.109334a53.1456 53.1456 0 0 1 0 75.332266 53.1456 53.1456 0 0 1-75.332267 0l-326.7584-326.792533A53.6576 53.6576 0 0 1 307.2 516.642133z",
              "path://M613.3 512.4L274.9 850.8c-24.9 24.9-24.9 65.6 0 90.5 24.9 24.9 65.6 24.9 90.5 0L749 557.7c6.2-6.2 10.9-13.4 14-21.1 5.4-13.5 6.1-28.5 2-42.4-0.6-2-1.3-3.9-2-5.9-3.1-7.7-7.8-14.9-14-21.1L365.4 83.5c-24.9-24.9-65.6-24.9-90.5 0-24.9 24.9-24.9 65.6 0 90.5l338.4 338.4z"
          ],
          "vertical": [
              "path://M537.408 362.272l2.24 2.496 249.92 247.008c13.92 13.76 13.92 36.096 0 49.92a36.032 36.032 0 0 1-47.136 2.944l-3.392-2.976L512 437.28l-227.04 224.384a36.032 36.032 0 0 1-47.104 2.976l-3.392-2.976a34.976 34.976 0 0 1 0-49.92l249.856-246.976 2.272-2.496c6.432-6.368 14.72-9.792 23.136-10.272h4.512c7.04 0.416 13.952 2.848 19.776 7.328l3.392 2.944z",
              "path://M537.408 661.728l2.24-2.496 249.92-247.008a34.976 34.976 0 0 0 0-49.92 36.032 36.032 0 0 0-47.136-2.944l-3.392 2.976L512 586.72l-227.04-224.384a36.032 36.032 0 0 0-47.104-2.976l-3.392 2.976a34.976 34.976 0 0 0 0 49.92l249.856 246.976 2.272 2.496c6.432 6.368 14.72 9.792 23.136 10.272h4.512a35.84 35.84 0 0 0 19.776-7.328l3.392-2.944z"
          ]
      },
      "show": true,
      "data": [
          "A组"
      ]
  },
  "tooltip": {
      "trigger": "axis",
      "renderMode": "html",
      "enterable": false,
      "showDelay": 0,
      "hideDelay": 0,
      "appendToBody": true,
      "axisPointer": {
          "type": "line",
          "snap": true
      }
  },
  "grid": {
      "containLabel": true,
      "top": 38,
      "bottom": 4,
      "left": 0,
      "right": 12
  },
  "xAxis": {
      "show": true,
      "type": "category",
      "name": "",
      "nameLocation": "end",
      "nameGap": 4,
      "data": [
          "10-1",
          "10-2",
          "10-3",
          "10-4",
          "10-5",
          "10-6",
          "10-7",
          "10-8",
          "10-9",
          "10-10",
          "10-11",
          "10-12",
          "10-13",
          "10-14"
      ],
      "boundaryGap": true,
      "axisLine": {
          "show": true
      }
  },
  "yAxis": {
      "show": true,
      "type": "value",
      "axisLabel": {
          "formatter": "{value} "
      },
      "axisLine": {
          "show": false
      }
  },
  "series": [
      {
          "type": "line",
          "triggerLineEvent": true,
          "markLine": {
              "silent": true,
              "symbol": "none",
              "animation": false,
              "lineStyle": {
                  "type": "solid",
                  "color": "#71757F",
                  "width": 1,
                  "cap": "square"
              },
              "label": {
                  "formatter": "{b}",
                  "backgroundColor": "#F2F2F3",
                  "padding": [
                      4,
                      6
                  ],
                  "borderRadius": 4
              },
              "data": [
                  {
                      "name": "现在",
                      "xAxis": 6,
                      "lineStyle": {
                          "type": [
                              2,
                              4
                          ]
                      }
                  },
                  [
                      {
                          "name": "",
                          "coord": [
                              6,
                              0
                          ],
                          "lineStyle": {
                              "type": "solid",
                              "color": "#71757F",
                              "width": 2,
                              "cap": "butt"
                          },
                          "label": {
                              "show": false
                          }
                      },
                      {
                          "coord": [
                              13,
                              0
                          ]
                      }
                  ]
              ]
          },
          "smooth": false,
          "data": [
              [
                  0,
                  820
              ],
              [
                  1,
                  932
              ],
              [
                  2,
                  901
              ],
              [
                  3,
                  934
              ],
              [
                  4,
                  1290
              ],
              [
                  5,
                  1330
              ],
              [
                  6,
                  1320
              ]
          ],
          "name": "A组",
          "stack": null,
          "step": false,
          "emphasis": {
              "focus": "series",
              "itemStyle": {
                  "color": "#fff",
                  "borderColor": "#5C8DFF"
              }
          },
          "blur": {
              "lineStyle": {
                  "opacity": 1
              }
          },
          "lineStyle": {
              "width": 3
          },
          "showSymbol": true,
          "symbolSize": 5,
          "symbol": "circle",
          "itemStyle": {
              "borderColor": "#fff",
              "borderWidth": 2.5,
              "shadowColor": "rgba(37, 43, 58, 0.2)",
              "shadowBlur": 4
          }
      },
      {
          "type": "line",
          "triggerLineEvent": true,
          "smooth": false,
          "data": [
              [
                  6,
                  1320
              ],
              [
                  7,
                  1400
              ],
              [
                  8,
                  1550
              ],
              [
                  9,
                  1570
              ],
              [
                  10,
                  1690
              ],
              [
                  11,
                  1740
              ],
              [
                  12,
                  1800
              ],
              [
                  13,
                  1860
              ]
          ],
          "name": "A组",
          "stack": null,
          "step": false,
          "emphasis": {
              "focus": "series",
              "itemStyle": {
                  "color": "#fff",
                  "borderColor": "#5C8DFF"
              }
          },
          "blur": {
              "lineStyle": {
                  "opacity": 1
              }
          },
          "lineStyle": {
              "width": 3,
              "type": [
                  3,
                  4
              ]
          },
          "showSymbol": true,
          "symbolSize": 5,
          "symbol": "circle",
          "itemStyle": {
              "borderColor": "#fff",
              "borderWidth": 2.5,
              "shadowColor": "rgba(37, 43, 58, 0.2)",
              "shadowBlur": 4
          }
      },
      {
          "name": "forecast",
          "type": "line",
          "stack": "forecast0",
          "data": [
              [
                  6,
                  1320
              ],
              [
                  7,
                  1320
              ],
              [
                  8,
                  1390
              ],
              [
                  9,
                  1330
              ],
              [
                  10,
                  1370
              ],
              [
                  11,
                  1340
              ],
              [
                  12,
                  1320
              ],
              [
                  13,
                  1300
              ]
          ],
          "symbol": "none",
          "lineStyle": {
              "width": 0
          },
          "silent": true
      },
      {
          "name": "forecast",
          "type": "line",
          "stack": "forecast0",
          "data": [
              [
                  6,
                  0
              ],
              [
                  7,
                  160
              ],
              [
                  8,
                  320
              ],
              [
                  9,
                  480
              ],
              [
                  10,
                  640
              ],
              [
                  11,
                  800
              ],
              [
                  12,
                  960
              ],
              [
                  13,
                  1120
              ]
          ],
          "areaStyle": {
              "color": "#5C8DFF",
              "opacity": 0.15
          },
          "symbol": "none",
          "lineStyle": {
              "width": 0
          },
          "silent": true
      }
  ]
}