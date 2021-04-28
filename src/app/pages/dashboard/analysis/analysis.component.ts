import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'da-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss'],
})
export class AnalysisComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    window.dispatchEvent(new Event('resize'));
  }
}
