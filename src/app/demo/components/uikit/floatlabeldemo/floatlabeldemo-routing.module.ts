import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FloatLabelDemoComponent } from './floatlabeldemo.component';

const routes: Routes = [
  { path: '', component: FloatLabelDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FloatlabeldemoRoutingModule { }
