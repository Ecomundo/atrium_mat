import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: '  Menú',
    icon: 'icon-layers',
    class: 'has-arrow',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: [{
      path: '/observaciones',
      title: 'Observaciones',
      icon: 'icon-eye',
      class: '',
      label: '',
      labelClass: 'label label-rounded label-themecolor pull-right',
      extralink: false,
      submenu: []
    },
    {
      path: '/email',
      title: 'Email',
      icon: 'icon-drawar',
      class: '',
      label: '',
      labelClass: '',
      extralink: false,
      submenu: [ ]
    }]
  }
];
