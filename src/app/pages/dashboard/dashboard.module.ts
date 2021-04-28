import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/@shared/shared.module';
import { AnalysisComponent } from './analysis/analysis.component';
import { MonitorComponent } from './monitor/monitor.component';
import { WorkSpaceComponent } from './work-space/work-space.component';
import { GanttModule, ProgressModule, TimeAxisModule, QuadrantDiagramModule, DragDropModule } from 'ng-devui';
import { EchartsModule } from 'src/app/@shared/components/echarts/echarts.module';
import { AnalysisLineComponent } from './analysis/analysis-line/analysis-line.component';
import { AnalysisGanttComponent } from './analysis/analysis-gantt/analysis-gantt.component';
import { EchartsComponent } from './analysis/echarts/echarts.component';
import { StaticsComponent } from './analysis/statics/statics.component';
import { MonitorProgressComponent } from './monitor/monitor-progress/monitor-progress.component';
import { WorkSpaceHeaderComponent } from './work-space/work-space-header/work-space-header.component';
import { WorkSpaceBodyComponent } from './work-space/work-space-body/work-space-body.component';
import { WorkManagementComponent } from './work-space/work-space-body/work-management/work-management.component';
import { WorkItemTableComponent } from './work-space/work-item-table/work-item-table.component';
import { WorkOperationComponent } from './work-space/work-space-body/work-operation/work-operation.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AnalysisComponent,
    MonitorComponent,
    WorkSpaceComponent,
    AnalysisLineComponent,
    AnalysisGanttComponent,
    EchartsComponent,
    StaticsComponent,
    MonitorProgressComponent,
    WorkSpaceHeaderComponent,
    WorkSpaceBodyComponent,
    WorkManagementComponent,
    WorkItemTableComponent,
    WorkOperationComponent,
  ],
  imports: [
    SharedModule,
    DashboardRoutingModule,
    GanttModule,
    ProgressModule,
    TimeAxisModule,
    EchartsModule,
    QuadrantDiagramModule,
    DragDropModule,
  ],
  providers: [],
})
export class DashboardModule {}
