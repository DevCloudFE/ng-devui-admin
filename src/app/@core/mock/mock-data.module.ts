import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from './course.service';
import { GanttDataService } from './gantt-data.service';
import { ListDataService } from './list-data.service';
import { WorkItemService } from './work-item.service';
import { WorkGroupService } from './work-group.service';
import { EchartsService } from './echarts.service';
import { NoticeDataService } from './notice-data.service';

const SERVICES = [CourseService, GanttDataService, ListDataService, WorkItemService, WorkGroupService, EchartsService, NoticeDataService];

@NgModule({
  imports: [CommonModule],
  providers: [...SERVICES],
})
export class MockDataModule {
  static forRoot(): ModuleWithProviders<MockDataModule> {
    return {
      ngModule: MockDataModule,
      providers: [...SERVICES],
    };
  }
}
