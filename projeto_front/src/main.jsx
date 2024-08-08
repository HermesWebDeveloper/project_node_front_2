import React from 'react'
import ReactDOM from 'react-dom/client'
import './components/form_user.css'
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Forms from './Form'
import Alterar_user from './components/alterar_user'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route index element={<Home />} />
        <Route path='form' element={<Forms />} />
        <Route path='users/:id' element={<Alterar_user />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
