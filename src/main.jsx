import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/styles/index.css'
import App from './App'
import ScrollButton from '../src/components/ScrollButton'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
    <App />
    </HashRouter>
    <ScrollButton/>
  </StrictMode>,
)
