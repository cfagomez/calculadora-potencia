import Formulario from "./components/Formulario"
import ModalError from "./components/ModalError"
import ModalResultado from "./components/ModalResultado"
import UseResistenciasContext from "./hooks/UseResistenciasContext"

function App() {

  const {error, resultado} = UseResistenciasContext()

  return (
    <>
      <header>
        <h1>Calculadora de Potencia</h1>
      </header>
      <div>
        <main className="container">
          <div className="form-container">
            <Formulario />
          </div>
        </main>
      </div>
      {

        error && <ModalError />

      }
      {
        resultado && <ModalResultado />
      }
    </>
  )
}

export default App
