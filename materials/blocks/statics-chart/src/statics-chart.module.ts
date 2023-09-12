import { NgModule } from '@angular/core';
import { EchartsModule } from 'src/app/@shared/components/echarts';
import { SharedModule } from 'src/app/@shared/shared.module';
import { StaticsChartComponent } from './statics-chart.component';
import { EchartsService } from './echarts.service';

@NgModule({
  declarations: [StaticsChartComponent],
  imports: [SharedModule, EchartsModule],
  exports: [StaticsChartComponent],
  providers: [EchartsService],
})
export class StaticsChartModule {}
