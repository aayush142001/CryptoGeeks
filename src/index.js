import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CurrContext from './CurrContext';
import 'react-alice-carousel/lib/alice-carousel.css';

ReactDOM.render(
  
  <CurrContext>
    <App />
    </CurrContext>,
  document.getElementById('root')
);
