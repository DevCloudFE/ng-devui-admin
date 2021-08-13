import { Component, OnInit } from '@angular/core';
import { EchartsService } from 'src/app/@core/mock/echarts.service';

@Component({
  selector: 'da-analysis-line',
  templateUrl: './analysis-line.component.html',
  styleUrls: ['./analysis-line.component.scss'],
})
export class AnalysisLineComponent implements OnInit {
  options: any;

  constructor(private echartsService: EchartsService) {}

  ngOnInit(): void {
    this.echartsService.getLineChart().subscribe((option) => {
      this.options = option;
    });
  }
}
