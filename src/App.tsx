import { BrowserRouter } from 'react-router-dom'
import './App.css'

import { AppRouter } from './routes/AppRouter'

function App() {

  return (
    
    <BrowserRouter>
    <AppRouter/>
   
    </BrowserRouter>
    // se puede poner esas boquitas como para que retorne eso y no me muestre error 
  )
}

export default App
