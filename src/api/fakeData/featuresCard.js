import { icons } from "../../components/Icons"
import styles from "../../../styles/components/soy-propietario/quiero-arrendar/FeatureCard/FeatureCard.module.css"

const {
  CgSearchFound,
  RiTimerFlashLine,
  VscPerson,
} = icons
export const FeaturesData = [
  {
      id: 1,
      h2: 'VISIBILIDAD',
      p: 'Publicamos tu propiedad en 43 portales inmobiliarios y compramos servicios de destacados.',
      img: <CgSearchFound className={`${styles.card__img}`} />,
  },
  {
      id: 2,
      h2: 'ESPECIALISTAS',
      p: 'Te brindamos la mejor atención de la mano de especialistas del corretaje inmobiliario y profesionales del área lega.',
      img: <VscPerson className={`${styles.card__img}`} />,
  },
  {
      id: 3,
      h2: 'RAPIDEZ',
      p: 'Arrendamos tu proipedad en tiempo récord, para que no tengas pérdidas en tu inversión',
      img: <RiTimerFlashLine className={`${styles.card__img}`} />,
  },
 
]