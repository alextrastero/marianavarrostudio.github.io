import { h, render } from 'preact';
import './stylesheets/app';

let root;
function renderApp() {
  let App = require('./components/app').default;
  root = render(<App />, document.body, root);
}

renderApp();

// in development, set up HMR:
if (module.hot) {
  require('preact/devtools'); // turn this on if you want to enable React DevTools!
  module.hot.accept('./components/app', renderApp);
}
