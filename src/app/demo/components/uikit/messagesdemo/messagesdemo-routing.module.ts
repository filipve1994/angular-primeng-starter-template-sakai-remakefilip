import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagesDemoComponent } from './messagesdemo.component';

const routes: Routes = [
  { path: '', component: MessagesDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesdemoRoutingModule { }
