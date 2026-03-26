import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../src/Store/Store.jsx'
import ToastProvider from './Store/Provider/ToastProvider.jsx'
import Authprovider from './Store/Provider/AuthProvider.jsx'



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
        <Provider store={store}>
            <Authprovider>
                <ToastProvider>
                    
                        <App />
                    
                </ToastProvider>
            </Authprovider>
        </Provider>
    </BrowserRouter>

)
