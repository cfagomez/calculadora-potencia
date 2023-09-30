import { createContext, useState } from "react"

export const ResistenciasContext = createContext()

const ResistenciasProvider = ({children}) => {


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
    <ResistenciasContext.Provider value={{resistencia, setResistencia, tipoResistencia, setTipoResistencia, error, setError, mensajeError, setMensajeError, resultado, setResultado}}>
        {children}
    </ResistenciasContext.Provider>
  )
}

export default ResistenciasProvider
