import { NgModule } from '@angular/core';
import { EchartsModule } from 'src/app/@shared/components/echarts';
import { SharedModule } from 'src/app/@shared/shared.module';
import { PieChartComponent } from './pie-chart.component';
import { EchartsService } from './echarts.service';
import { DataTableModule } from 'ng-devui';

@NgModule({
  declarations: [PieChartComponent],
  imports: [SharedModule, EchartsModule, DataTableModule],
  exports: [PieChartComponent],
  providers: [EchartsService],
})
export class PieChartModule {}
