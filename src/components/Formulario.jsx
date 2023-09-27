import useResistenciasContext from '../hooks/UseResistenciasContext'
import Swal from 'sweetalert2'
import {
  calcularPotenciaPlanas, 
  calcularPotenciaCartuchos, 
  calcularPotenciaSunchos
} from '../helpers/calculoPotencia'
import useModalError from '../hooks/useModalError'

const Formulario = () => {

  const {tipoResistencia, setTipoResistencia, resistencia, setResistencia} = useResistenciasContext()
  const {largo, ancho, diametro} = resistencia

  const handleSubmit = (e) => {

    e.preventDefault()

    if (tipoResistencia === 'planas') {

      if (!largo.trim() || !ancho.trim() ) {

        return useModalError()
  
      } else {

        Swal.fire(`Potencia recomendada: ${calcularPotenciaPlanas(largo, ancho)}w`)

        setResistencia({
          largo: '',
          ancho: '',
          diametro: ''
        })

      }

    }

    if (tipoResistencia === 'sunchos') {

      if (!diametro.trim() || !ancho.trim() ) {

        return useModalError()
  
      } else {

        Swal.fire(`Potencia recomendada: ${calcularPotenciaSunchos(diametro, ancho)}w`)

        setResistencia({
          largo: '',
          ancho: '',
          diametro: ''
        })

      }

    }

    if (tipoResistencia === 'cartuchos') {

      if (!largo.trim() || !diametro.trim() ) {

        return useModalError()
  
      } else {

        Swal.fire(`Potencia recomendada: ${calcularPotenciaCartuchos(largo, diametro)}w`)

        setResistencia({
          largo: '',
          ancho: '',
          diametro: ''
        })

      }

    }

  }

  const handleClick = (e) => {

    e.preventDefault()

    setTipoResistencia(null)
    setResistencia({
      largo: '',
      ancho: '',
      diametro: ''
    })

  }

  const handleSelect = (e) => {

    setTipoResistencia(e.target.value)

  }

  return (
    <form 
      className='container'
      onSubmit={handleSubmit}
    >
          {

            tipoResistencia ? (

              <>
              
              {

                tipoResistencia === 'cartuchos' || tipoResistencia === 'sunchos' ? (

                  <div className='campo'>
                    <label>Diámetro:</label>
                    <input 
                      type="number"
                      value={diametro}
                      name='diametro'
                      onChange={(e) => setResistencia({
                        ...resistencia,
                        [e.target.name]: e.target.value
                      })}
                    />
                  </div>

                ) : (

                  null

                )

              }

              {

                tipoResistencia === 'cartuchos' ||tipoResistencia === 'planas' ? (

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

                ) : (

                  null

                )

              }

              {

                tipoResistencia === 'sunchos' || tipoResistencia === 'planas' ? (

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

                ) : (

                  null

                )

              }                
                <p className='campo p-form'>* Indicar medidas en milímetros</p>
                <div className='campo flex'>
                  <input type="submit"/>
                  <input
                    onClick={handleClick} 
                    type="button"
                    value="Volver"
                  />
                </div>
              </>

            ) : (

              <div className='campo padding-xl'>
                <label className='font-size-xl'>Tipo de resistencia:</label>
                <select 
                  name="resistencias"
                  onChange={handleSelect}
                >  
                  <option value=''>-- Seleccione una opción --</option>
                  <option value="planas">Planas</option>
                  <option value="sunchos">Sunchos</option>
                  <option value="cartuchos">Cartuchos</option>
                </select>
              </div>

            )
          }
        
    </form>
  )
}

export default Formulario
