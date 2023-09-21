import Formulario from "./components/Formulario"
import ListaOpciones from "./components/ListaOpciones"

function App() {

  return (
    <>
      <header>
        <h1>Calculadora de Potencia</h1>
      </header>
      <div className="flex">
        <ListaOpciones />
        <main className="container">
          <div className="form-container">
            <Formulario />
          </div>
        </main>
      </div>
    </>
  )
}

export default App
