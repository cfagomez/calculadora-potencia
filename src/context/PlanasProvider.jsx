import { createContext, useState } from "react"
import calcularPotencia from "../helpers/calculoPotencia"

export const PlanasContext = createContext()

const PlanasProvider = ({children}) => {

    const [resistencia, setResistencia] = useState({
        largo: '',
        ancho: ''
    })

  return (
    <PlanasContext.Provider value={{resistencia, setResistencia}}>
        {children}
    </PlanasContext.Provider>
  )
}

export default PlanasProvider
