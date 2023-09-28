import UseResistenciasContext from "../hooks/UseResistenciasContext"

const ModalError = () => {

    const {error, setError, mensajeError} = UseResistenciasContext()

  return (
    <div className='modal-error'>
      <div className='modal-error-content'>
        <div>
            <img 
                src="../../img/icon-error.svg" 
                alt="Error"
                width="100px"
                height="100px"
            />
            <h3>Error</h3>
            <p>{mensajeError}</p>
            <button 
                type='button'
                className='button-modal'
                onClick={() => setError(!error)}
            >
                Cerrar
            </button>
        </div>
      </div>
    </div>
  )
}

export default ModalError
