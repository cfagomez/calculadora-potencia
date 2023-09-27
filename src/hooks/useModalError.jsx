import Swal from "sweetalert2"

const useModalError = () => {
  return (
    
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Debes ingresar los datos correspondientes!'
      })

  )
}

export default useModalError
