import UseResistenciasContext from "../hooks/UseResistenciasContext"

const ModalError = () => {

    const {setError, mensajeError, setMensajeError} = UseResistenciasContext()

  return (
    <div className='modal'>
      <div className='modal-content'>
        <div>
            <img 
                src="../../img/icon-error.svg" 
                alt="Error"
                width="100px"
                height="100px"
            />
            <h3>Error</h3>
            <p className="p-error">{mensajeError}</p>
            <button 
                type='button'
                className='button-modal'
                onClick={() => {
                    setError(false),
                    setMensajeError('')
                  }
                }
            >
                Cerrar
            </button>
        </div>
      </div>
    </div>
  )
}

export default ModalError
