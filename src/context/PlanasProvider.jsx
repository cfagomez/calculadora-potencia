import { createContext, useState } from "react"

export const PlanasContext = createContext()

const PlanasProvider = ({children}) => {


    const [tipoResistencia, setTipoResistencia] = useState(null)
    const [resistencia, setResistencia] = useState({
        largo: '',
        ancho: '',
        diametro: ''
    })
    const [resultado, setResultado] = useState(null)
    const [error, setError] = useState(null)
    const [mensajeError, setMensajeError] = useState('')

  return (
    <PlanasContext.Provider value={{resistencia, setResistencia, tipoResistencia, setTipoResistencia, error, setError, mensajeError, setMensajeError, resultado, setResultado}}>
        {children}
    </PlanasContext.Provider>
  )
}

export default PlanasProvider
