import React from 'react'
import ReactDOM from 'react-dom/client'
import Form_user from './components/form_user'
import './components/form_user.css'
import Users from './components/users'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Form_user /> 
    <Users />
  </React.StrictMode>,
)
