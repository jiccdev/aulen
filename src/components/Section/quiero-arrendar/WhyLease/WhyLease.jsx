import React from "react"
import FeatureCard from "../../../FeatureCard/FeatureCard"
import Steps from "../Steps/Steps"

export const WhyLease = () => {
  return(
    <main>
      <h2>¿Por qué arrendar tu propiedad con nosotros?</h2>
      <div>
        <FeatureCard />
      </div>
      <div>
        <h3>Arrienda en 3 simples pasos</h3>
        <div>
          <Steps />
        </div>
      </div>
    </main>
  )
}
export default WhyLease