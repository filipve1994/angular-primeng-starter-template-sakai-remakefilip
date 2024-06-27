import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableDemoComponent } from './tabledemo.component';

const routes: Routes = [
  { path: '', component: TableDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabledemoRoutingModule { }
