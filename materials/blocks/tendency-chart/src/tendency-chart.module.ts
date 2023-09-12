import { NgModule } from '@angular/core';
import { EchartsModule } from 'src/app/@shared/components/echarts';
import { SharedModule } from 'src/app/@shared/shared.module';
import { TendencyChartComponent } from './tendency-chart.component';
import { EchartsService } from './echarts.service';
import { DataTableModule } from 'ng-devui';

@NgModule({
  declarations: [TendencyChartComponent],
  imports: [SharedModule, EchartsModule, DataTableModule],
  exports: [TendencyChartComponent],
  providers: [EchartsService],
})
export class TendencyChartModule {}
