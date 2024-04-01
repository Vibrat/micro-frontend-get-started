import React from 'react'
import { createRoot } from 'react-dom/client';
import { Basic2 } from './components/basic2';
import { Provider } from 'react-redux';

import './base.css'

const root = createRoot(document.getElementById('root2'))
root.render(
  <Provider store={window.store}>
    <Basic2 />
  </Provider>
)