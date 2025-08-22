import { Routes } from '@angular/router';
import { authGuard } from '../../core/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dashboard.component').then(m => m.DashboardComponent), canActivate: [authGuard],
    data: {
      title: $localize`Dashboard`
    }
  }
];

