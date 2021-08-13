import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GanttScaleUnit, GanttService, GanttTaskInfo } from 'ng-devui';
import { Subscription } from 'rxjs';
import { GanttSource } from 'src/app/@core/data/gantt';
import { GanttDataService } from 'src/app/@core/mock/gantt-data.service';

@Component({
  selector: 'da-analysis-gantt',
  templateUrl: './analysis-gantt.component.html',
  styleUrls: ['./analysis-gantt.component.scss'],
})
export class AnalysisGanttComponent implements OnInit {
  @ViewChild('ganttContainer', { static: true }) ganttContainer: ElementRef;
  curYear: number;
  list: GanttSource[];
  ganttStartDate: Date;
  ganttEndDate: Date;
  unit = GanttScaleUnit.day;
  ganttScaleWidth: string;
  ganttSacleConfigHandler: Subscription | null;
  originOffsetLeft = 0;
  scrollElement: HTMLElement;

  constructor(private ganttService: GanttService, private ganttDataService: GanttDataService) {}

  ngOnInit(): void {
    this.ganttDataService.getGantts().subscribe((res) => {
      this.list = res;
    });
    this.curYear = this.ganttDataService.getGanttYear();
    this.ganttStartDate = new Date(this.curYear, 4, 1);
    this.ganttEndDate = new Date(this.curYear, 10, 15);
    this.ganttService.setScaleConfig({
      startDate: this.ganttStartDate,
      endDate: this.ganttEndDate,
      unit: this.unit,
    });
    this.ganttScaleWidth = this.ganttService.getDurationWidth(this.ganttStartDate, this.ganttEndDate) + 'px';
    this.ganttSacleConfigHandler = this.ganttService.ganttScaleConfigChange.subscribe((config) => {
      if (config.startDate) {
        this.ganttStartDate = config.startDate;
      }
      if (config.endDate) {
        this.ganttEndDate = config.endDate;
      }
      if (config.startDate || config.endDate) {
        this.ganttScaleWidth = this.ganttService.getDurationWidth(this.ganttStartDate, this.ganttEndDate) + 'px';
      }
    });
  }

  ngAfterViewInit() {
    this.scrollElement = this.ganttContainer.nativeElement;
  }

  onGanttBarMoveStart() {
    this.originOffsetLeft = this.scrollElement.scrollLeft;
  }

  onGanttBarMoving(info: GanttTaskInfo) {
    this.adjustScrollView(info);
  }

  onGanttBarResizeStart() {
    this.originOffsetLeft = this.scrollElement.scrollLeft;
  }

  onGanttBarResizing(info: GanttTaskInfo) {
    this.adjustScrollView(info);
  }

  adjustScrollView(info: GanttTaskInfo) {
    const moveOffset = info.moveOffset ? info.moveOffset : 0;
    this.scrollElement.scrollTo(this.originOffsetLeft + moveOffset, this.scrollElement.scrollTop);
  }

  onGanttBarMove(info: GanttTaskInfo) {
    this.updateData(info);
  }

  onGanttBarResize(info: GanttTaskInfo) {
    this.updateData(info);
  }

  updateData(info: GanttTaskInfo) {
    const index = this.list.findIndex((data) => {
      return data.id === info.id;
    });
    if (index > -1) {
      this.list[index].startDate = info.startDate;
      this.list[index].endDate = info.endDate;
    }
  }

  onBarProgressEvent(progress: number) {
    console.log(progress);
  }

  ngOnDestroy() {
    if (this.ganttSacleConfigHandler) {
      this.ganttSacleConfigHandler.unsubscribe();
      this.ganttSacleConfigHandler = null;
    }
  }
}
