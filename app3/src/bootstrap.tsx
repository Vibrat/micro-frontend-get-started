import React from 'react'
import { createRoot } from 'react-dom/client';
import  App3Basic from './components/basic';
import { Provider } from 'react-redux';

import './store'
import './base.css'

// const store = await import("app1/store") as Store;
const root = createRoot(document.getElementById('app3'))

root.render(
  <Provider store={window?.store}>
    <App3Basic />
  </Provider>
)