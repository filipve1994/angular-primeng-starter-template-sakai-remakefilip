import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDemoComponent } from './listdemo.component';

const routes: Routes = [
  { path: '', component: ListDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListdemoRoutingModule { }
