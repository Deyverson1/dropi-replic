/* This code snippet is a JavaScript React application that is rendering the `App` component into the
DOM. Here is a breakdown of what each part of the code is doing: */
import './styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
