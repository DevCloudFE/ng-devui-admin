import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full',
  },
  {
    path: 'overview',
    component: OverviewComponent,
  },
  {
    path: 'materials',
    loadChildren: () =>
      import('./materials/materials.module').then((m) => m.MaterialsModule),
  },
  {
    path: 'docs',
    loadChildren: () =>
      import('./material-docs/material-docs.module').then(
        (m) => m.MaterialDocsModule
      ),
  },
  {
    path: '**',
    redirectTo: 'overview',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
