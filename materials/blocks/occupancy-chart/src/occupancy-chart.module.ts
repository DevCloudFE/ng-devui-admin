import { NgModule } from '@angular/core';
import { EchartsModule } from 'src/app/@shared/components/echarts';
import { SharedModule } from 'src/app/@shared/shared.module';
import { OccupancyChartComponent } from './occupancy-chart.component';

@NgModule({
  declarations: [OccupancyChartComponent],
  imports: [SharedModule, EchartsModule],
  exports: [OccupancyChartComponent],
  providers: [],
})
export class OccupancyChartModule {}
