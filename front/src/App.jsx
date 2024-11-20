import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from '@redux/slice'
import './App.scss'
import { BrowserRouter } from 'react-router-dom'
import PublicRoutes from '@pages/publicRoutes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PublicRoutes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
