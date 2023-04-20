import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { AppRoutes } from './Routes'
import { IsLoggedProvider } from './context/IsLoggedContext'
import { ProductProvider } from './context/ProductContext'
import { UserProvider } from './context/UserContext'
import { ReservationProvider } from './context/ReservationContext'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

import { AuthProvider } from './context/AuthContext'

import './styles/global.css'
import { theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <IsLoggedProvider>
            <UserProvider>
              <ProductProvider>
                <ReservationProvider>
                  <Header />
                  <AppRoutes />
                  <Footer />
                </ReservationProvider>
              </ProductProvider>
            </UserProvider>
          </IsLoggedProvider>
        </BrowserRouter>
      </AuthProvider>

      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
)
