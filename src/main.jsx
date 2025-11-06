import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Calc from './components/Calc.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Calc/>
    <App />
  </StrictMode>,
)
