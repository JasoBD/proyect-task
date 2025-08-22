import { Routes } from '@angular/router';
import { authGuard } from '../../core/auth.guard';

export const routes: Routes = [
  {
    path: '',
    data: { title: 'Módulos' },
    children: [

      {
        path: 'projects',
        loadComponent: () =>
          import('./projects/projects-list.component/projects-list.component').then(m => m.ProjectsListComponent),
        canActivate: [authGuard],
        data: { title: 'Proyectos' }
      },
      {
        path: 'projects/new',
        loadComponent: () =>
          import('./projects/project-form.component/project-form.component').then(m => m.ProjectFormComponent),
        canActivate: [authGuard]
      },
      {
        path: 'projects/:id/edit',
        loadComponent: () =>
          import('./projects/project-form.component/project-form.component').then(m => m.ProjectFormComponent),
        canActivate: [authGuard]
      },
      {
        path: 'tasks',
        loadComponent: () =>
          import('./tasks/task-list.component/task-list.component').then(m => m.TaskListComponent),
        canActivate: [authGuard],
        data: { title: 'Tareas' }

      },
      {
        path: 'tasks/new',
        loadComponent: () =>
          import('./tasks/task-form.component/task-form.component').then(m => m.TaskFormComponent),
        canActivate: [authGuard]
      },
      {
        path: 'tasks/:taskId/edit',
        loadComponent: () =>
          import('./tasks/task-form.component/task-form.component').then(m => m.TaskFormComponent),
        canActivate: [authGuard]
      },
      { path: '**', redirectTo: 'projects' }
    ]
  }
];
