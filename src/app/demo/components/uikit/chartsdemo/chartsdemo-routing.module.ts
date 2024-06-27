import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsDemoComponent } from './chartsdemo.component';

const routes: Routes = [
  { path: '', component: ChartsDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsdemoRoutingModule { }
