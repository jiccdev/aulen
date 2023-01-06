import { icons } from "../../components/Icons"
import styles from "../../../styles/components/soy-propietario/quiero-arrendar/OurService/OurService.module.css"

const {
    BsPerson,
    FaRegNewspaper,
    MdOutlineTimer,
    RiUserHeartLine,
    TbHandClick,
  } = icons

export const OurServicesData = [
  {
      id: 1,
      span: 'Publica gratis',
      p: ' tu propiedad con fotos y videos profesionales.',
      img: <FaRegNewspaper className={`${styles.img}`} />,
  },
  {
      id: 2,
      span: 'Arrendamos tu propiedad',
      p: ' en tiempo récord.',
      img: <MdOutlineTimer className={`${styles.img}`} />,
  },
  {
      id: 3,
      span: 'Encontramos',
      p: ' a tu arrendatario ideal.',
      img: <RiUserHeartLine className={`${styles.img}`} />,
  },
  {
      id: 4,
      span: 'Cuentas con la asesoría de expertos',
      p: ' que gestionarán todo el proceso.',
      img: <BsPerson className={`${styles.img}`} />,
  },
  {
      id: 5,
      span: 'Cerramos tu arriendo',
      p: ' sin necesidad de salir de la comodidad de tu casa.',
      img: <TbHandClick className={`${styles.img}`} />,
  }
]