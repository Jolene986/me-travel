import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { DestinationProvider } from './context';

ReactDOM.render(
  <DestinationProvider>
    <Router>
      <App />
    </Router>
  </DestinationProvider>,
  document.getElementById('root')
);
