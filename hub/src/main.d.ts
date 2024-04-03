// global.d.ts
interface Window {
  store: undefined | import('./store').FederationStore
}

declare module 'app3/basic' {
  import { ComponentType, FC } from 'react';
  const Component: ComponentType<any>;
  export default Component;
}

declare module 'styleguide/base' {
  import { ComponentType } from 'react';
  const Component: ComponentType<any>;
  export default Component;
}