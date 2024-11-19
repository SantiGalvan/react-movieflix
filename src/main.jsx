import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { LoaderProvider } from './contexts/LoaderContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <LoaderProvider>

      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>

        <App />

      </BrowserRouter>

    </LoaderProvider>

  </StrictMode>,
)
