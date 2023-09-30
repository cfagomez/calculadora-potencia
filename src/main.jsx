import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ResistenciasProvider from './context/ResistenciasProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResistenciasProvider>
      <App />
    </ResistenciasProvider>
  </React.StrictMode>,
)
