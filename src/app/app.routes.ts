import { Routes } from '@angular/router';

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './views/home.module#HomeModule'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

