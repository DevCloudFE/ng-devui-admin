import { AfterViewInit, Component, OnInit } from '@angular/core';
import { EchartsService } from './echarts.service';

@Component({
  selector: 'da-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit, AfterViewInit {
  options;

  constructor(private echartsService: EchartsService) {}

  ngOnInit(): void {
    this.echartsService.getLineChart().subscribe((option) => {
      this.options = option;
    });
  }

  ngAfterViewInit(): void {
    window.dispatchEvent(new Event('resize'));
  }
}
