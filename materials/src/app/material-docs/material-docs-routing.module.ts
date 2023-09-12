import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDocComponent } from './admin-doc/admin-doc.component';
import { MaterialDocsComponent } from './material-docs.component';

// TODO: 解决types问题
declare const require: any;

const routes: Routes = [
  {
    path: '',
    component: MaterialDocsComponent,
    children: [
      {
        path: 'about',
        component: AdminDocComponent,
        data: {
          'zh-cn': require('!html-loader!markdown-loader!./md-docs/about/about-cn.md'),
          'en-us': require('!html-loader!markdown-loader!./md-docs/about/about-en.md')
        },
      },
      {
        path: 'use-materials',
        component: AdminDocComponent,
        data: {
          'zh-cn': require('!html-loader!markdown-loader!./md-docs/use-materials/use-materials-cn.md'),
          'en-us': require('!html-loader!markdown-loader!./md-docs/use-materials/use-materials-en.md')
        },
      },
      {
        path: 'dev-materials',
        component: AdminDocComponent,
        data: {
          'zh-cn': require('!html-loader!markdown-loader!./md-docs/dev-materials/dev-materials-cn.md'),
          'en-us': require('!html-loader!markdown-loader!./md-docs/dev-materials/dev-materials-en.md')
        },
      },
      { path: '', redirectTo: 'about', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialDocsRoutingModule {}
