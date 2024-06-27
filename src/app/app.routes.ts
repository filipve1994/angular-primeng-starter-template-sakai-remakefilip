import {Routes} from '@angular/router';
import {NotFoundComponent} from "@demo/components/not-found/not-found.component";
import {AppLayoutComponent} from "@layout/app-layout/app-layout.component";

export const routes: Routes = [
  {
    path: '', component: AppLayoutComponent,
    children: [
      {
        path: '',
        // loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule)
        loadChildren: () => import('./demo/components/dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule)
      },
      {
        path: 'uikit',
        loadChildren: () => import('./demo/components/uikit/uikit-routing.module').then(m => m.UikitRoutingModule)
      },
      {
        path: 'utilities',
        loadChildren: () => import('./demo/components/utilities/utilities-routing.module').then(m => m.UtilitiesRoutingModule)
      },
      {
        path: 'documentation',
        loadChildren: () => import('./demo/components/documentation/documentation-routing.module').then(m => m.DocumentationRoutingModule)
      },
      {
        path: 'blocks',
        loadChildren: () => import('./demo/components/primeblocks/primeblocks-routing.module').then(m => m.PrimeblocksRoutingModule)
      },
      {
        path: 'pages',
        loadChildren: () => import('./demo/components/pages/pages-routing.module').then(m => m.PagesRoutingModule)
      }
    ]
  },
  {path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule)},
  {path: 'landing', loadChildren: () => import('./demo/components/landing/landing-routing.module').then(m => m.LandingRoutingModule)},
  {path: 'notfound', component: NotFoundComponent},
  {path: '**', redirectTo: '/notfound'},
];
