import { Component, OnInit } from '@angular/core';
import { EchartsService } from 'src/app/@core/mock/echarts.service';

@Component({
  selector: 'da-statics',
  templateUrl: './statics.component.html',
  styleUrls: ['./statics.component.scss'],
})
export class StaticsComponent implements OnInit {
  histogramData: any;

  constructor(private echartsService: EchartsService) {}

  ngOnInit(): void {
    this.echartsService.getHistorgram().subscribe((option) => {
      this.histogramData = option;
    });
  }
}
