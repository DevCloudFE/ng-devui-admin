import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { EchartsService } from './echarts.service';

@Component({
  selector: 'da-tendency-chart',
  templateUrl: './tendency-chart.component.html',
  styleUrls: ['./tendency-chart.component.scss'],
})
export class TendencyChartComponent implements OnInit {
  serviceData;

  dataTableServiceOption = {
    columns: [
      {
        field: 'time',
        header: '时间',
        fieldType: 'text',
      },
      {
        field: 'waterline',
        header: '水位',
        fieldType: 'text',
      },
    ],
  };

  serviceSource = [];

  resizeSub: Subscription;

  @ViewChild('chartWrapper') chartWrapper: ElementRef;

  constructor(private echartsService: EchartsService) {}

  ngOnInit(): void {
    this.echartsService.getServiceWaterLine().subscribe((option) => {
      this.serviceData = option;
      for (let i = 0; i < this.serviceData.xAxis.data.length; i++) {
        let temp = {
          time: this.serviceData.xAxis.data[i],
          waterline: this.serviceData.series[0].data[i],
        };
        this.serviceSource.push(temp);
      }
    });
  }
}
