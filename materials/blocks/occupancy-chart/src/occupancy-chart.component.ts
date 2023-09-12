import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { monitorOption } from './echarts';

@Component({
  selector: 'da-occupancy-chart',
  templateUrl: './occupancy-chart.component.html',
  styleUrls: ['./occupancy-chart.component.scss'],
})
export class OccupancyChartComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  timerForOccupation: any;

  monitorOptions = monitorOption;

  occupationChart: any;

  constructor() {}

  ngOnInit(): void {
    this.timerForOccupation = setInterval(() => {
      let random = Number((Math.random() * 100).toFixed(0));
      this.monitorOptions.series[0].data[0].value = random;
      this.occupationChart.setOption(this.monitorOptions, true);
    }, 1500);
  }

  getOccupationChart(event) {
    this.occupationChart = event;
  }

  ngOnDestroy(): void {
    clearInterval(this.timerForOccupation);
  }

  ngAfterViewInit(): void {
    window.dispatchEvent(new Event('resize'));
  }
}
