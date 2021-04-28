import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list.component';
import { BasicListComponent } from './basic-list/basic-list.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { ListRoutingModule } from './list-routing.module';
import {
  DatepickerModule,
  InputNumberModule,
  PaginationModule,
  TooltipModule,
} from 'ng-devui';
import { CardListComponent } from './card-list/card-list.component';
import { AdvanceListComponent } from './advance-list/advance-list.component';
import { TreeListComponent } from './tree-list/tree-list.component';
import { AdminFormModule } from 'src/app/@shared/components/admin-form/admin-form.module';
import { EditableListComponent } from './editable-list/editable-list.component';

@NgModule({
  declarations: [
    ListComponent,
    BasicListComponent,
    CardListComponent,
    AdvanceListComponent,
    TreeListComponent,
    EditableListComponent,
  ],
  imports: [
    SharedModule,
    ListRoutingModule,
    FormsModule,
    PaginationModule,
    AdminFormModule,
    InputNumberModule,
    DatepickerModule,
    TooltipModule,
  ],
})
export class ListModule {}
