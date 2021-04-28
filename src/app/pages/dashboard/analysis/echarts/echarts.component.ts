import { Component, OnInit } from '@angular/core';
import { EchartsService } from 'src/app/@core/mock/echarts.service';

@Component({
  selector: 'da-echarts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.scss'],
})
export class EchartsComponent implements OnInit {
  pieData;
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

  dataTablePieOption = {
    columns: [
      {
        field: 'visit',
        header: '访问反馈',
        fieldType: 'text',
      },
      {
        field: 'percentage',
        header: '占比',
        fieldType: 'text',
      },
    ],
  };

  serviceSource = [];
  pieSource = [];

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

    this.echartsService.getPie().subscribe((option) => {
      this.pieData = option;
      for (let i = 0; i < this.pieData.legend.data.length; i++) {
        let temp = {
          visit: this.pieData.legend.data[i],
          percentage: this.pieData.series[0].data[i].value,
        };
        this.pieSource.push(temp);
      }
    });
  }
}
