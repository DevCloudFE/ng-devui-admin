import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BasicListComponent } from './basic-list.component';
import {
  SelectModule,
  DataTableModule,
  LoadingModule,
  PaginationModule,
  TagsModule,
} from 'ng-devui';
import { SharedModule } from 'src/app/@shared/shared.module';
import { ListDataService } from './list-data.service';
import { AdminFormModule } from 'src/app/@shared/components/admin-form';

@NgModule({
  declarations: [BasicListComponent],
  imports: [
    SharedModule,
    FormsModule,
    AdminFormModule,
    DataTableModule,
    LoadingModule,
    SelectModule,
    TagsModule,
    PaginationModule,
  ],
  exports: [BasicListComponent],
  providers: [ListDataService],
})
export class BasicListModule {}
