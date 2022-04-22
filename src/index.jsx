import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Api from './Api/Api'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Api />
  </React.StrictMode>
);

