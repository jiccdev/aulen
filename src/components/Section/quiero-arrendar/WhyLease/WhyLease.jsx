import React from "react"
import styles from '../../../../../styles/components/soy-propietario/quiero-arrendar/WhyLease/WhyLease.module.css'
import FeatureCard from "../../../FeatureCard/FeatureCard"
import Steps from "../Steps/Steps"
import { FeaturesData } from '../../../../api/fakeData/featuresCard'
import { StepsData } from '../../../../api/fakeData/stepsLease'
import { PublishingForm } from '../../../PublishingForm/PublishingForm.jsx';

export const WhyLease = () => {
  return (
    <main className={`${styles.customRow} `} >
      <div className={`${styles.customCol} ${styles.whyContainer}`}>
        <h2 className={`${styles.whyH2}`} >¿Por qué arrendar tu propiedad con nosotros?</h2>
        <div className={`${styles.customRow}`} >
          <FeatureCard features={FeaturesData} />
        </div>
        <div>
          <h3 className={`${styles.whyH3}`}>Arrienda en 3 simples pasos</h3>
          <div className={`${styles.customRow} ${styles.stepsContainer}`} >
            <Steps steps={StepsData} />
          </div>
        </div>
      </div>
      <PublishingForm />
    </main>
  )
}
export default WhyLease