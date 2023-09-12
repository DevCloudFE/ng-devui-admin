import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialsComponent } from './materials.component';
import { AnalysisLineComponent } from 'blocks/analysis-line/src/analysis-line.component';
import { AnalysisLineModule } from 'blocks/analysis-line/src/analysis-line.module';
import { BasicFormComponent } from 'blocks/basic-form/src/basic-form.component';
import { BasicFormModule } from 'blocks/basic-form/src/basic-form.module';
import { BasicListComponent } from 'blocks/basic-list/src/basic-list.component';
import { BasicListModule } from 'blocks/basic-list/src/basic-list.module';

const materialsRoutes: Routes = [
  {
    path: '',
    component: MaterialsComponent,
    children: [
      {
        path: '',
        redirectTo: 'basic-form',
        pathMatch: 'full',
      },
      {
        path: 'analysis-line',
        component: AnalysisLineComponent,
      },
      {
        path: 'basic-form',
        component: BasicFormComponent,
      },
      {
        path: 'basic-list',
        component: BasicListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(materialsRoutes),
    AnalysisLineModule,
    BasicFormModule,
    BasicListModule,
  ],
  declarations: [],
  exports: [RouterModule],
})
export class MaterialsRoutingModule {}
