// global.d.ts
type Store = import('./store').FederationStore

interface Window {
  store: undefined | Store
}

declare module 'app1/store' {
  export default Store;
}