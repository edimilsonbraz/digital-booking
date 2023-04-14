import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { IsLoggedProvider } from './context/IsLoggedContext'
import { ProductProvider } from './context/ProductContext'
import { UserProvider } from './context/UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IsLoggedProvider>
     <UserProvider>
       <ProductProvider>
         <App />
       </ProductProvider>
      </UserProvider>
    </IsLoggedProvider>
  </React.StrictMode>
)
