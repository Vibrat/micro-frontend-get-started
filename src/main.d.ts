// global.d.ts
interface Window {
  store: undefined | import('./store').FederationStore
}

declare module 'app3/basic' {
  import { ComponentType } from 'react';
  const Component: ComponentType<any>;
  export default Component;
}