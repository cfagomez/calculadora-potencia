import { useContext } from 'react'
import { ResistenciasContext } from '../context/ResistenciasProvider'

const UseResistenciasContext = () => {
  return (
    useContext(ResistenciasContext)
  )
}

export default UseResistenciasContext
