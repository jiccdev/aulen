import { icons } from '../../components/Icons';

const {
  TbChecklist,
  MdOutlinePanTool,
  FaTools,
  MdOutlineVerified,
  FaHandHoldingUsd,
} = icons;

export const stepsToRentDepartmentData = [
  {
    id: 1,
    desc: 'Elige un plan',
    span: 'que se adapte a tus necesidades',
    icon: <TbChecklist />,
  },
  {
    id: 2,
    desc: 'Arrendamos tú propiedad',
    span: 'en tiempo record',
    icon: <TbChecklist />,
  },
  {
    id: 3,
    desc: 'Gestionamos las reparaciones',
    span: 'de tú propiedad',
    icon: <TbChecklist />,
  },
  {
    id: 4,
    desc: 'Verificación de pago',
    span: 'de servicios y gastos comunes',
    icon: <TbChecklist />,
  },
  {
    id: 5,
    desc: 'Recibe el pago de tú arriendo',
    span: 'los primeros 5 días de cada mes',
    icon: <FaHandHoldingUsd />,
  },
];
