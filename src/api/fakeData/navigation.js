export const navigationData = [
  {
    id: 1,
    name: 'Inicio',
    url: '/',
  },
  {
    id: 2,
    name: 'Soy Propietario',
    url: '/soy-propietario',
    submenu: [
      {
        id: 1,
        name: 'Quiero Vender',
        url: '/quiero-vender',
      },
      {
        id: 2,
        name: 'Quiero Arrendar',
        url: '/quiero-arrendar',
      },
    ],
  },
  {
    id: 3,
    name: 'Administración de arriendo',
    url: '/administracion-de-arriendo',
  },
  {
    id: 4,
    name: 'Soy Inversionista',
    url: '/soy-inversionista',
    submenu: [
      {
        id: 1,
        name: 'Unidades en remate',
        url: '/unidades-en-remate',
      },
      {
        id: 2,
        name: 'Unidades nuevas',
        url: '/unidades-nuevas',
      },
    ],
  },
  {
    id: 5,
    name: 'Propiedades',
    url: '/propiedades',
  },
  {
    id: 7,
    name: 'Intranet',
    url: '/intranet',
  },
];
