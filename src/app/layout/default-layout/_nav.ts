import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Modulos'
  },
  {
    name: 'Tareas',
    url: '/modulos/tasks',
    iconComponent: { name: 'cil-notes' },
  },
  {
    name: 'Proyectos',
    url: '/modulos/projects',
    iconComponent: { name: 'cil-pencil' }
  }
];
