import React from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {LoginPage,SingUpPage} from './Routes.js'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      {/* this is the route of  login page */}
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/sign-up' element={<SingUpPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App