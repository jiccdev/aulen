import React from "react"
import { icons } from "../../components/Icons"
import styles from "../../../styles/components/soy-inversionista/investmentModel/InvestmentModel.module.css"

const {
  RiMoneyDollarCircleLine,
  BiBuildingHouse,
  CgSearchFound,
} = icons
export const investmentModelData = [
  {
    id: 1,
    h2: 'TRANSPARENTE',
    p: 'La propiedad siempre está a nombre de Cliente, desde la firma de compra hasta la firma de venta.',
    img: <CgSearchFound className={`${styles.investmentImg}`} />,
  },
  {
    id: 2,
    h2: 'RENTABLE',
    p: 'Rentabilidad del 15% asegurada en escritura pública.',
    img: <RiMoneyDollarCircleLine className={`${styles.investmentImg}`} />,
  },
  {
    id: 3,
    h2: 'SEGURO',
    p: 'El Cliente entregará el capital asociado a la compra del inmueble una vez se haya acreditado la adjudicación a su nombre, a la instancia que corresponda.',
    img: <BiBuildingHouse className={`${styles.investmentImg}`} />,
  },
]