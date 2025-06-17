import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import Mainroutes from './routes/Mainroutes.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <StrictMode>
    <Mainroutes />
    <ToastContainer />
  </StrictMode>,
 </BrowserRouter>
)
