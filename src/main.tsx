import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './global.scss'
import { store } from './store'
///부모 컴포넌트를 wrapping 하면 자녀 컴포넌트도 자동 적용
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>  
    <App />
  </Provider>,
)
