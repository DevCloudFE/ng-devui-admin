import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialsComponent } from './materials.component';<% _.each(routes, function(route) { %>
import { <%= route.component %> } from '<%= route.importComponentPath %>';
import { <%= route.module %> } from '<%= route.importModulePath %>';<% }); %>

const materialsRoutes: Routes = [
  {
    path: '',
    component: MaterialsComponent,
    children: [
      {
        path: '',
        redirectTo: 'basic-form',
        pathMatch: 'full',
      },<% _.each(routes, function(route) { %>
      {
        path: '<%= route.path%>',
        component: <%= route.component %>,
      },<% }); %>
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(materialsRoutes),<% _.each(routes, function(route) { %>
    <%= route.module %>,<% }); %>
  ],
  declarations: [],
  exports: [RouterModule],
})
export class MaterialsRoutingModule {}
