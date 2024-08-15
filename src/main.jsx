import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Random from './Random.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Random />
  </StrictMode>,
)
