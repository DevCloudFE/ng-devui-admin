import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SampleComponent } from './sample/sample.component';
import { GettingStartedComponent } from './getting-started.component';

const routes: Routes = [
  {
    path: '',
    component: GettingStartedComponent,
    children: [
      { path: 'sample', component: SampleComponent },
      { path: '', redirectTo: 'sample', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GettingStartedRoutingModule {}
