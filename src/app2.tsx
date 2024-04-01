import React from 'react'
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import './base.css'
import { Basic2 } from './components/basic2';

const root = createRoot(document.getElementById('root'))
root.render(
  <Provider store={window.store}>
    <Basic2 />
  </Provider>
)