import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileDemoComponent } from './filedemo.component';

const routes: Routes = [
  { path: '', component: FileDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiledemoRoutingModule { }
