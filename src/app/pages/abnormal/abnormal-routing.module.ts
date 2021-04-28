import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { AbnormalComponent } from './abnormal.component';

const routes: Routes = [
  {
    path: '',
    component: AbnormalComponent,
    children: [
      { path: 'abnormal403', component: ForbiddenComponent },
      { path: 'abnormal404', component: NotFoundComponent },
      { path: 'abnormal500', component: ServerErrorComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbnormalRoutingModule {}
