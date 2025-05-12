import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/styles/index.css'
import App from './App'
import ScrollButton from '../src/components/ScrollButton'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
         <App />
    <ScrollButton/>
    </HelmetProvider>
 
  </StrictMode>,
)
