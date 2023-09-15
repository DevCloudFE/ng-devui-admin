import { Component, OnInit } from '@angular/core';
import { EchartsService } from './echarts.service';

@Component({
  selector: 'da-statics-chart',
  templateUrl: './statics-chart.component.html',
  styleUrls: ['./statics-chart.component.scss'],
})
export class StaticsChartComponent implements OnInit {
  histogramData;

  constructor(private echartsService: EchartsService) {}

  ngOnInit(): void {
    this.echartsService.getHistogram().subscribe((option) => {
      this.histogramData = option;
    });
  }
}
