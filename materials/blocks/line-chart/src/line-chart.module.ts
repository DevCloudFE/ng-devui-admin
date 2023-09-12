import { NgModule } from '@angular/core';
import { EchartsModule } from 'src/app/@shared/components/echarts';
import { SharedModule } from 'src/app/@shared/shared.module';
import { LineChartComponent } from './line-chart.component';
import { EchartsService } from './echarts.service';

@NgModule({
  declarations: [LineChartComponent],
  imports: [SharedModule, EchartsModule],
  exports: [LineChartComponent],
  providers: [EchartsService],
})
export class LineChartModule {}
