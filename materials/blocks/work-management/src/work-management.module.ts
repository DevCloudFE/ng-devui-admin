import { NgModule } from '@angular/core';
import { DragDropModule, QuadrantDiagramModule } from 'ng-devui';
import { SharedModule } from 'src/app/@shared/shared.module';
import { WorkManagementComponent } from './work-management.component';

@NgModule({
  declarations: [WorkManagementComponent],
  imports: [SharedModule, QuadrantDiagramModule, DragDropModule],
  exports: [WorkManagementComponent],
  providers: [],
})
export class WorkManagementModule {}
