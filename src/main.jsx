import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PlanasProvider from './context/planasProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PlanasProvider>
      <App />
    </PlanasProvider>
  </React.StrictMode>,
)
