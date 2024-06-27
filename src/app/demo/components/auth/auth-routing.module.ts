import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'error', loadChildren: () => import('./error/error-routing.module').then(m => m.ErrorRoutingModule) },
  { path: 'access', loadChildren: () => import('./access/access-routing.module').then(m => m.AccessRoutingModule) },
  { path: 'login', loadChildren: () => import('./login/login-routing.module').then(m => m.LoginRoutingModule) },
  { path: '**', redirectTo: '/notfound' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
