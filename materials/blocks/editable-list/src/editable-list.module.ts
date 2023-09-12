import { NgModule } from '@angular/core';
import {
  AvatarModule,
  CardModule,
  DataTableModule,
  DatepickerModule,
  LoadingModule,
  PaginationModule,
  SelectModule,
  TagsModule,
} from 'ng-devui';
import { ListDataService } from './list-data.service';
import { SharedModule } from 'src/app/@shared/shared.module';
import { EditableListComponent } from './editable-list.component';
import { AdminFormModule } from 'src/app/@shared/components/admin-form';

@NgModule({
  declarations: [EditableListComponent],
  imports: [
    SharedModule,
    DataTableModule,
    AdminFormModule,
    TagsModule,
    LoadingModule,
    CardModule,
    AvatarModule,
    PaginationModule,
    SelectModule,
    DatepickerModule
  ],
  exports: [EditableListComponent],
  providers: [ListDataService],
})
export class EditableListModule {}
