import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'button',
    data: {breadcrumb: 'Button'},
    loadChildren: () => import('./buttondemo/buttondemo-routing.module').then(m => m.ButtondemoRoutingModule)
  },
  {
    path: 'charts',
    data: {breadcrumb: 'Charts'},
    loadChildren: () => import('./chartsdemo/chartsdemo-routing.module').then(m => m.ChartsdemoRoutingModule)
  },
  {
    path: 'file',
    data: {breadcrumb: 'File'},
    loadChildren: () => import('./filedemo/filedemo-routing.module').then(m => m.FiledemoRoutingModule)
  },
  {
    path: 'floatlabel',
    data: {breadcrumb: 'Float Label'},
    loadChildren: () => import('./floatlabeldemo/floatlabeldemo-routing.module').then(m => m.FloatlabeldemoRoutingModule)
  },
  {
    path: 'formlayout',
    data: {breadcrumb: 'Form Layout'},
    loadChildren: () => import('./formlayoutdemo/formlayoutdemo-routing.module').then(m => m.FormlayoutdemoRoutingModule)
  },
  {
    path: 'input',
    data: {breadcrumb: 'Input'},
    loadChildren: () => import('./inputdemo/inputdemo-routing.module').then(m => m.InputdemoRoutingModule)
  },
  {
    path: 'invalidstate',
    data: {breadcrumb: 'Invalid State'},
    loadChildren: () => import('./invaliddemo/invaliddemo-routing.module').then(m => m.InvaliddemoRoutingModule)
  },
  {
    path: 'list',
    data: {breadcrumb: 'List'},
    loadChildren: () => import('./listdemo/listdemo-routing.module').then(m => m.ListdemoRoutingModule)
  },
  {
    path: 'media',
    data: {breadcrumb: 'Media'},
    loadChildren: () => import('./mediademo/mediademo-routing.module').then(m => m.MediademoRoutingModule)
  },
  {
    path: 'message',
    data: {breadcrumb: 'Message'},
    loadChildren: () => import('./messagesdemo/messagesdemo-routing.module').then(m => m.MessagesdemoRoutingModule)
  },
  {
    path: 'misc',
    data: {breadcrumb: 'Misc'},
    loadChildren: () => import('./miscdemo/miscdemo-routing.module').then(m => m.MiscdemoRoutingModule)
  },
  {
    path: 'overlay',
    data: {breadcrumb: 'Overlay'},
    loadChildren: () => import('./overlaysdemo/overlaysdemo-routing.module').then(m => m.OverlaysdemoRoutingModule)
  },
  {
    path: 'panel',
    data: {breadcrumb: 'Panel'},
    loadChildren: () => import('./panelsdemo/panelsdemo-routing.module').then(m => m.PanelsdemoRoutingModule)
  },
  {
    path: 'table',
    data: {breadcrumb: 'Table'},
    loadChildren: () => import('./tabledemo/tabledemo-routing.module').then(m => m.TabledemoRoutingModule)
  },
  {
    path: 'tree',
    data: {breadcrumb: 'Tree'},
    loadChildren: () => import('./treedemo/treedemo-routing.module').then(m => m.TreedemoRoutingModule)
  },
  {
    path: 'menu',
    data: {breadcrumb: 'Menu'},
    loadChildren: () => import('./menusdemo/menusdemo-routing.module').then(m => m.MenusdemoRoutingModule)
  },
  {path: '**', redirectTo: '/notfound'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UikitRoutingModule {
}
