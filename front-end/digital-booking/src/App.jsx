import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import { ToastContainer } from 'react-toastify'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Router } from './Router'

import './styles/global.css'

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <ErrorBoundary>
        <Router />
      </ErrorBoundary>
      <Footer />
      <ToastContainer/>
    </BrowserRouter>
  )
}


