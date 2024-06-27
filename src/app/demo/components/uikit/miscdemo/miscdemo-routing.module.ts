import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiscDemoComponent } from './miscdemo.component';

const routes: Routes = [
  { path: '', component: MiscDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiscdemoRoutingModule { }
