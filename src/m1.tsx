import React from 'react'
import { createRoot } from 'react-dom/client';
import { Basic } from './components/basic';
import { Provider } from 'react-redux';

import './base.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <Provider store={window.store}>
    <Basic />
  </Provider>
)