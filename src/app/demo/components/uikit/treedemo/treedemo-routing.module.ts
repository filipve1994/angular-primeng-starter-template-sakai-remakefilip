import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TreeDemoComponent} from './treedemo.component';

const routes: Routes = [
  {path: '', component: TreeDemoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreedemoRoutingModule {
}
