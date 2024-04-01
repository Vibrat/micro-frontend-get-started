// global.d.ts
type Store = import('./store').FederationStore

interface Window {
  store: undefined | Store
}
