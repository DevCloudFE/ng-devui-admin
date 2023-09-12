import { NgModule } from '@angular/core';
import { EchartsModule } from 'src/app/@shared/components/echarts';
import { SharedModule } from 'src/app/@shared/shared.module';
import { UserDistributeChartComponent } from './user-distribute-chart.component';

@NgModule({
  declarations: [UserDistributeChartComponent],
  imports: [SharedModule, EchartsModule],
  exports: [UserDistributeChartComponent],
  providers: [],
})
export class UserDistributeChartModule {}
