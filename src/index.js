import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter } from 'react-router-dom';

function Router() {
  return(
    <BrowserRouter>
      <Route exact path = '/' component = {App} />
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
 
reportWebVitals();
