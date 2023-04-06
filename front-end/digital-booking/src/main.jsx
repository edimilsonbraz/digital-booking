import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { IsLoggedProvider } from './context/IsLoggedContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IsLoggedProvider>
      <App />
    </IsLoggedProvider>
  </React.StrictMode>,
)
