import UseResistenciasContext from "../hooks/UseResistenciasContext"

const ModalResultado = () => {

    const {setResistencia, resultado, setResultado} = UseResistenciasContext()

  return (
    <div className='modal'>
      <div className='modal-content'>
        <div>
            <img 
                src="../../img/icon-success.svg" 
                alt="Validado"
                width="100px"
                height="100px"
            />
            <p className="p-success">Potencia recomendada: {resultado}w</p>
            <button 
                type='button'
                className='button-modal btn-success'
                onClick={() => {
                    setResultado(null),
                    setResistencia({
                        largo: '',
                        ancho: '',
                        diametro: ''
                    })
                }
                }
            >
                Aceptar
            </button>
        </div>
      </div>
    </div>
  )
}

export default ModalResultado
