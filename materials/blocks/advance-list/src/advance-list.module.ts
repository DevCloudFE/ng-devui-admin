import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdvanceListComponent } from './advance-list.component';
import {
  SelectModule,
  DataTableModule,
  LoadingModule,
  TagsModule,
  CheckBoxModule,
  TooltipModule,
  DatepickerModule,
} from 'ng-devui';
import { SharedModule } from 'src/app/@shared/shared.module';
import { ListDataService } from './list-data.service';

@NgModule({
  declarations: [AdvanceListComponent],
  imports: [
    DatepickerModule,
    SharedModule,
    FormsModule,
    DataTableModule,
    LoadingModule,
    SelectModule,
    TagsModule,
    CheckBoxModule,
    TooltipModule
  ],
  exports: [AdvanceListComponent],
  providers: [ListDataService],
})
export class AdvanceListModule {}
