// A store that shared between multiple react apps via window interface.
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter'

const store = window.store || configureStore({
  reducer: {
    counter: counterReducer
  }
})
export type FederationStore = ReturnType<typeof configureStore>;
Object.assign(window, { store });
export default store

