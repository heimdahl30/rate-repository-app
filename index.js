import { registerRootComponent } from 'expo';

if (typeof FinalizationRegistry === 'undefined') {
  global.FinalizationRegistry = class {
    constructor() { }
    register() { }
    unregister() { }
  };
}

import App from './App';

registerRootComponent(App);