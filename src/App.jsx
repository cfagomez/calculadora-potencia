import Formulario from "./components/Formulario"

function App() {

  return (
    <>
      <header>
        <h1>Calculadora de Potencia</h1>
      </header>
      <main className="container">
        <div>
          <h2>¿Que desea calcular?</h2>
          <button className="button">Planas</button>
        </div>
        <div className="form-container">
          <Formulario />
        </div>
      </main>
    </>
  )
}

export default App
