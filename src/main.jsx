import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initiFirebase } from './firebase/config.js'
//import './index.css'

initiFirebase()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
