import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { AuthService } from './services/auth.service';
import { CourseData } from './data/course';
import { CourseService } from './mock/course.service';
import { MockDataModule } from './mock/mock-data.module';
import { GanttData } from './data/gantt';
import { GanttDataService } from './mock/gantt-data.service';
import { ListData } from './data/listData';
import { ListDataService } from './mock/list-data.service';
import { PersonalizeService } from './services/personalize.service';
import { WorkItemData } from './data/workItem';
import { WorkItemService } from './mock/work-item.service';
import { WorkGroupData } from './data/work-group';
import { WorkGroupService } from './mock/work-group.service';
import { AuthGuardService } from './services/auth-guard-service.guard';
import { CustomThemeService } from './services/custom-theme.service';
import { NoticeData } from './data/noticeData';
import { NoticeDataService } from './mock/notice-data.service';

const DATA_SERVICES = [
  { provide: CourseData, useClass: CourseService },
  { provide: GanttData, useClass: GanttDataService },
  { provide: ListData, useClass: ListDataService },
  { provide: WorkItemData, useClass: WorkItemService },
  { provide: WorkGroupData, useClass: WorkGroupService },
  { provide: NoticeData, useClass: NoticeDataService },
];

export const DEVUI_CORE_PROVIDERS = [
  ...MockDataModule.forRoot().providers!,
  ...DATA_SERVICES,
  AuthService,
  PersonalizeService,
  AuthGuardService,
  CustomThemeService,
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [...DEVUI_CORE_PROVIDERS],
    };
  }
}
