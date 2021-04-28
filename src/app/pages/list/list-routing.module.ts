import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BasicListComponent } from './basic-list/basic-list.component';
import { CardListComponent } from './card-list/card-list.component';
import { ListComponent } from './list.component';
import { AdvanceListComponent } from './advance-list/advance-list.component';
import { TreeListComponent } from './tree-list/tree-list.component';
import { EditableListComponent } from './editable-list/editable-list.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    children: [
      { path: 'basic', component: BasicListComponent },
      { path: 'card', component: CardListComponent },
      { path: 'editable', component: EditableListComponent },
      { path: 'advance', component: AdvanceListComponent },
      { path: 'tree', component: TreeListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRoutingModule {}
