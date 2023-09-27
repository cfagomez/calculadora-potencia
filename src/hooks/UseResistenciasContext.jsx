import { useContext } from 'react'
import { PlanasContext } from '../context/planasProvider'

const UseResistenciasContext = () => {
  return (
    useContext(PlanasContext)
  )
}

export default UseResistenciasContext
