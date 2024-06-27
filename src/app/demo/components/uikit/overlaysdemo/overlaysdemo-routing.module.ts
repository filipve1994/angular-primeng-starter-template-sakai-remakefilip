import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverlaysDemoComponent } from './overlaysdemo.component';

const routes: Routes = [
  { path: '', component: OverlaysDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverlaysdemoRoutingModule { }
