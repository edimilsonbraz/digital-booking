import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { IsLoggedProvider } from './context/IsLoggedContext'
import { ProductProvider } from './context/ProductContext'
import { UserProvider } from './context/UserContext'
import { ReservationProvider } from './context/ReservationContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IsLoggedProvider>
     <UserProvider>      
       <ProductProvider>
        <ReservationProvider>
         <App />
         </ReservationProvider>
       </ProductProvider>
      </UserProvider>
    </IsLoggedProvider>
  </React.StrictMode>
)
