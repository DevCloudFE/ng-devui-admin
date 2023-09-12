import { NgModule } from '@angular/core';
import { AdvanceFormComponent } from './advance-form.component';
import {
  SelectModule,
  DataTableModule,
  LoadingModule,
  PaginationModule,
  TagsModule,
  DatepickerModule
} from 'ng-devui';
import { SharedModule } from 'src/app/@shared/shared.module';
import { ListDataService } from './list-data.service';
import { AdminFormModule } from 'src/app/@shared/components/admin-form';

@NgModule({
  declarations: [AdvanceFormComponent],
  imports: [
    SharedModule,
    DataTableModule,
    LoadingModule,
    SelectModule,
    TagsModule,
    PaginationModule,
    AdminFormModule,
    DatepickerModule
  ],
  exports: [AdvanceFormComponent],
  providers: [ListDataService],
})
export class AdvanceFormModule {}
