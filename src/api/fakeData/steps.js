import { icons } from '../../components/Icons';

const { MdEngineering, FaTabletAlt, MdOutlineManageAccounts, GiReceiveMoney } =
  icons;

export const stepsData = [
  {
    id: 1,
    title: 'Estratégia',
    icon: <MdEngineering />,
    description:
      'Presentamos un estudioestratégico, de acuerdo a tusobjetivos y necesidades',
  },
  {
    id: 2,
    title: 'Publicamos',
    icon: <FaTabletAlt />,
    description:
      'Sesiòn de fotos y video profesional y publicamos gratis tu propiedad en43 portales inmobiliarios',
  },
  {
    id: 3,
    title: 'Gestionamos',
    icon: <MdOutlineManageAccounts />,
    description:
      'Realizamos visitas con clientes a tu propiedad. Todas las ofertas están garantizadas',
  },
  {
    id: 4,
    title: 'Vendemos',
    icon: <GiReceiveMoney />,
    description:
      'Asesoría continua del equipo legal, hasta que usted reciba sus fondos',
  },
];
