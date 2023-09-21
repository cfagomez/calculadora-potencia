import React, { useContext, useState } from 'react'
import { PlanasContext } from '../context/planasProvider'
import Swal from 'sweetalert2'
import calcularPotencia from '../helpers/calculoPotencia'

const Formulario = () => {

  const {resistencia, setResistencia} = useContext(PlanasContext)
  const {largo, ancho} = resistencia

  const handleSubmit = (e) => {

    e.preventDefault()

    if (!largo.trim() || !ancho.trim()) {

      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Debes ingresar los datos correspondientes!'
      })

    }

    Swal.fire(`Potencia recomendada: ${calcularPotencia(largo, ancho)}w`)

    setResistencia({
      largo: '',
      ancho: ''
    })

  }

  return (
    <form 
      className='container'
      onSubmit={handleSubmit}
    >
        <div className='campo'>
            <label>Largo:</label>
            <input 
              type="number"
              value={largo}
              name='largo'
              onChange={(e) => setResistencia({
                ...resistencia,
                [e.target.name]: e.target.value
              })}
            />
        </div>
        <div className='campo'>
            <label>Ancho:</label>
            <input 
              type="number"
              value={ancho}
              name='ancho'
              onChange={(e) => setResistencia({
                ...resistencia,
                [e.target.name]: e.target.value
              })}
            />
        </div>
        <p className='campo p-form'>*Indicar medidas en milímetros</p>
        <input type="submit"/>
    </form>
  )
}

export default Formulario
