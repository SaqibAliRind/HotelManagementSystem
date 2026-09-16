import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/store'
import App from './App'
import './index.css'

import { SocketProvider } from './context/SocketContext'
import { ToastProvider } from './context/ToastContext'
import axios from 'axios'

if (import.meta.env.MODE === 'production') {
  axios.defaults.baseURL = 'https://server-five-sand-15.vercel.app';
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <SocketProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </SocketProvider>
    </Provider>
  </React.StrictMode>,
)
