
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Recipecontext from './context/Recipecontext.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
   <Recipecontext>
      <BrowserRouter>
         <App />
         <ToastContainer position='top-center' autoClose={500} />
      </BrowserRouter>
   </Recipecontext>

)
