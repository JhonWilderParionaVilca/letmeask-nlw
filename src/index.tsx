import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '~/App';
import reportWebVitals from '~/reportWebVitals';

import '~/assets/styles/normalize.css';
import '~/assets/styles/global.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('nlw')
);

reportWebVitals();
