import { Routes } from '@angular/router';

import { MainLayout } from './layouts/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard').then(m => m.Dashboard),
      },
      {
        path: 'tasks',
        loadComponent: () =>
          import('./pages/tasks/tasks').then(m => m.TasksComponent),
      },
      {
        path:'projects',
        loadComponent:()=>import('./pages/projects/projects').then(p=>p.Projects),
      },
      {
        path:'team',
        loadComponent:()=>import('./pages/team/team').then(t=>t.Team),
      },
      
      {
        path:'calendar',
        loadComponent:()=>import('./pages/calendar/calendar').then(t=>t.Calendar),
      },
      
      {
        path:'settings',
        loadComponent:()=>import('./pages/settings/settings').then(t=>t.Settings),
      },
      {
        path:'reports',
        loadComponent:()=>import('./pages/reports/reports').then(t=>t.Reports),
      },

      {
        path:'time-tracking',
        loadComponent:()=>import('./pages/time-tracking/time-tracking').then(t=>t.TimeTracking),
      }
    ],
  },
];
