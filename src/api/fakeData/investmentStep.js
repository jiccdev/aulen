import React from "react"
import {icons} from "../../components/Icons/index.js"
import styles from "../../../styles/components/soy-inversionista/HeroSection/investmentStep/InvestmentStep.module.css"

const {
  FaRegHandshake,
  FaPercent,
  TbTarget,
  BiBuildingHouse,
} = icons

export const investmentStepData = [
  {
    id: 1,
    h3: 'Definición de objetivos y necesidades',
    p: 'Establecemos el capital que dispones para tu inversión mediante una reunión de trabajo.',
    img: <TbTarget className={`${styles.imgStep}`} />,
    style: styles.divContainer1,
  },
  {
    id: 2,
    h3: 'Buscamos la mejor porpiedad en remate para ti',
    p: 'Se realiza el remate y se adjudica el inmueble para posteriormente pactar la rentabilidad que genera.',
    img: <BiBuildingHouse className={`${styles.imgStep}`} />,
    style: styles.divContainer2,
  },
  {
    id: 3,
    h3: 'Nos encargamos de todo el proceso',
    p: 'Legal, pago de servicios básicos e impuestos sobre la renta, reparaciones o remodelación de la propiedad.',
    img: <FaRegHandshake className={`${styles.imgStep}`} />,
    style: styles.divContainer3,
  },
  {
    id: 4,
    h3: 'El dinero retorna con la rentabilidad pactada',
    p: 'Obtén las ganancias esperadas por tu inversión.',
    img: <FaPercent className={`${styles.imgStep}`} />,
    style: styles.divContainer4,
  },
]