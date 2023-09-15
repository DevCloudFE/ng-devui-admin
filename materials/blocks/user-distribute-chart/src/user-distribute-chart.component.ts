import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { mapOption } from './echarts';
import { chinaData } from './mapData';
import * as echarts from 'echarts';

@Component({
  selector: 'da-user-distribute-chart',
  templateUrl: './user-distribute-chart.component.html',
  styleUrls: ['./user-distribute-chart.component.scss'],
})
export class UserDistributeChartComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  timerForTotalUser: any;
  timerForLive: any;

  mapOptions = mapOption;

  liveUsers = 200;
  totalUsers = 5000;
  liveProvince = '云南省';

  constructor() {}

  ngOnInit(): void {
    let chinaJSON = JSON.parse(chinaData);
    echarts.registerMap('china', chinaJSON);

    this.setMapData();

    this.timerForTotalUser = setInterval(() => {
      this.totalUsers++;
    }, 140);

    this.timerForLive = setInterval(() => {
      let randomIndex = Number((Math.random() * 33).toFixed(0));
      this.liveProvince = this.mapOptions.series[0].data[randomIndex]['name'];
      this.liveUsers = Number((Math.random() * 500).toFixed(0));
    }, 2000);
  }

  setMapData() {
    let data = JSON.parse(chinaData);
    let value = [];
    data['features'].forEach((data) => {
      let tempValue = Number((Math.random() * 200).toFixed(0));
      let temp = { name: data['properties']['name'], value: tempValue };
      value.push(temp);
    });
    value.push({
      name: '南海诸岛',
      value: 10,
    });
    this.mapOptions.series[0]['data'] = value;
  }

  ngAfterViewInit(): void {
    window.dispatchEvent(new Event('resize'));
  }

  ngOnDestroy(): void {
    clearInterval(this.timerForTotalUser);
    clearInterval(this.timerForLive);
  }
}
