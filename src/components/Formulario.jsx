import React from 'react'

const Formulario = () => {
  return (
    <form className='container'>
        <div className='campo'>
            <label>Largo:</label>
            <input type="text" />
        </div>
        <div className='campo'>
            <label>Ancho:</label>
            <input type="text" />
        </div>
    </form>
  )
}

export default Formulario
