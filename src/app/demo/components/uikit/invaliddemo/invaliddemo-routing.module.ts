import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InvalidStateDemoComponent} from "./invalidstatedemo.component";

const routes: Routes = [
  { path: '', component: InvalidStateDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvaliddemoRoutingModule { }
