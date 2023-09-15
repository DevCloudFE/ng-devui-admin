import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DaLayoutService } from 'src/app/@shared/layouts/da-layout';
import { barOption, gaugeOption, gaugeOption2, gaugeOption3, horizontalOption, lineOption, pieOption, radarOptions, simpleBarOptions, simpleBarOptions2, simpleLineOptions, simpleLineOptions2, trendLineOption } from './analysis.mock';

@Component({
  selector: 'da-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss'],
})
export class AnalysisComponent implements OnInit, AfterViewInit {
  radarOptions = radarOptions;
  simpleBarOptions = simpleBarOptions;
  simpleLineOptions = simpleLineOptions;
  barOption = barOption;
  pieOption = pieOption;
  gaugeOption = gaugeOption;
  horizontalOption = horizontalOption;
  lineOption = lineOption;
  trendLineOption = trendLineOption;
  simpleBarOptions2 = simpleBarOptions2;
  simpleLineOptions2 = simpleLineOptions2;

  grade = 58.2;
  constructor(
    private layoutService: DaLayoutService
  ) { }

  ngOnInit(): void {
    let count = 0;
    const list = [gaugeOption, gaugeOption2, gaugeOption3]
    setInterval(() => {
      count++;
      this.gaugeOption = list[count % 3];
    }, 3000)
  }

  onResize() {
    window.dispatchEvent(new Event('resize'));
  }

  ngAfterViewInit(): void {
    window.dispatchEvent(new Event('resize'));
  }
}
