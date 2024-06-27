import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormLayoutDemoComponent} from "./formlayoutdemo.component";

const routes: Routes = [
  { path: '', component: FormLayoutDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormlayoutdemoRoutingModule { }
