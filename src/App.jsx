import Formulario from "./components/Formulario"

function App() {

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
    </>
  )
}

export default App
