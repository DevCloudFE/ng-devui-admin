import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'da-monitor-progress',
  templateUrl: './monitor-progress.component.html',
  styleUrls: ['./monitor-progress.component.scss'],
})
export class MonitorProgressComponent implements OnInit, OnDestroy {
  progress1 = 30;
  progress2 = 80;

  timer1: any;
  timer2: any;

  constructor() {}

  ngOnInit(): void {
    this.timer1 = setInterval(() => {
      if (this.progress1 === 100) {
        this.progress1 = 0;
      }
      this.progress1++;
    }, 1500);
    this.timer1 = setInterval(() => {
      if (this.progress2 === 100) {
        this.progress2 = 0;
      }
      this.progress2++;
    }, 2000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer1);
    clearInterval(this.timer2);
  }
}
