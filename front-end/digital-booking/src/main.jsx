import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { IsLoggedProvider } from './context/IsLoggedContext'
import { ProductProvider } from './context/ProductContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IsLoggedProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </IsLoggedProvider>
  </React.StrictMode>
)
