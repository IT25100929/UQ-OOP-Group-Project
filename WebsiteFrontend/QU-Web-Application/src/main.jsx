import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 1. Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// 2. Import Bootstrap JS Bundle (includes Popper.js)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
