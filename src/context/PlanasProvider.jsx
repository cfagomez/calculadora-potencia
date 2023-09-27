import { createContext, useState } from "react"

export const PlanasContext = createContext()

const PlanasProvider = ({children}) => {


    const [tipoResistencia, setTipoResistencia] = useState(null)
    const [resistencia, setResistencia] = useState({
        largo: '',
        ancho: '',
        diametro: ''
    })

  return (
    <PlanasContext.Provider value={{resistencia, setResistencia, tipoResistencia, setTipoResistencia}}>
        {children}
    </PlanasContext.Provider>
  )
}

export default PlanasProvider
