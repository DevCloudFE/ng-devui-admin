import { NgModule } from '@angular/core';
import { AnalysisComponent } from './analysis.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { IconModule } from 'ng-devui/icon';
import { DataTableModule } from 'ng-devui';
import { DashboardModule } from 'ng-devui/dashboard';
import { EchartsModule } from 'src/app/@shared/components/echarts';

@NgModule({
  declarations: [
    AnalysisComponent,
  ],
  imports: [
    SharedModule,
    IconModule,
    DataTableModule,
    DashboardModule,
    EchartsModule
  ],
  exports: [
    AnalysisComponent
  ]
})
export class AnalysisModule {}
