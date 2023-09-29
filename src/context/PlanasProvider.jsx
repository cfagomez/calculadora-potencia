import { createContext, useState } from "react"

export const PlanasContext = createContext()

const PlanasProvider = ({children}) => {


    const [tipoResistencia, setTipoResistencia] = useState(null)
    const [resistencia, setResistencia] = useState({
        largo: '',
        ancho: '',
        diametro: ''
    })
    const [error, setError] = useState(null)
    const [mensajeError, setMensajeError] = useState('')

  return (
    <PlanasContext.Provider value={{resistencia, setResistencia, tipoResistencia, setTipoResistencia, error, setError, mensajeError, setMensajeError}}>
        {children}
    </PlanasContext.Provider>
  )
}

export default PlanasProvider
