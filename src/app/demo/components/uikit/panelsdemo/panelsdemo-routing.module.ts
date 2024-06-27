import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelsDemoComponent } from './panelsdemo.component';

const routes: Routes = [
  { path: '', component: PanelsDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelsdemoRoutingModule { }
