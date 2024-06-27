import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'crud', loadChildren: () => import('./crud/crud-routing.module').then(m => m.CrudRoutingModule) },
  { path: 'empty', loadChildren: () => import('./empty/empty-routing.module').then(m => m.EmptyRoutingModule) },
  { path: 'timeline', loadChildren: () => import('./timeline/timeline-routing.module').then(m => m.TimelineRoutingModule) },
  { path: '**', redirectTo: '/notfound' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
