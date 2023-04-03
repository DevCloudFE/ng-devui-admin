import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { EchartsService } from 'src/app/@core/mock/echarts.service';
import { echartServiceOption } from '../../echarts';

@Component({
  selector: 'da-echarts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.scss'],
})
export class EchartsComponent implements OnInit, AfterViewInit {
  pieData: any;
  serviceData: any;

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

  serviceSource: any = [];
  pieSource: any = [];

  resizeSub: Subscription;
  pieChart: any;

  @ViewChild('chartWrapper') chartWrapper: ElementRef;

  constructor(private echartsService: EchartsService) {}

  ngOnInit(): void {
    this.serviceData = echartServiceOption;
    for (let i = 0; i < this.serviceData.xAxis.data.length; i++) {
      let temp = {
        time: this.serviceData.xAxis.data[i],
        waterline: this.serviceData.series[0].data[i],
      };
      this.serviceSource.push(temp);
    }

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

  getPieChart(e: any) {
    this.pieChart = e;
  }

  ngAfterViewInit(): void {
    this.resizeSub = fromEvent(window, 'resize')
      .pipe(debounceTime(500))
      .subscribe((v) => {
        if (this.chartWrapper?.nativeElement?.clientWidth < 630) {
          this.pieData.legend = {
            orient: 'horizontal',
            bottom: 'auto',
            data: ['可容忍', '满意', '不可容忍', '极端异常', '良好'],
          };
          this.pieChart.setOption(this.pieData, true);
        } else {
          this.pieData.legend = {
            orient: 'vertical',
            left: 'auto',
            top: 'center',
            data: ['可容忍', '满意', '不可容忍', '极端异常', '良好'],
          };
          this.pieChart.setOption(this.pieData, true);
        }
      });
  }
}
