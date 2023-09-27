import Swal from "sweetalert2"

const useModalError = () => {
  return (
    
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Debes completar todos los campos!'
      })

  )
}

export default useModalError
