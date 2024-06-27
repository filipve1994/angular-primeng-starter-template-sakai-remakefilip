import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InputDemoComponent} from "./inputdemo.component";

const routes: Routes = [
  { path: '', component: InputDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputdemoRoutingModule { }
