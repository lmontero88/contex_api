import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProvedorTema } from './contexto/contextoTema.js';



ReactDOM.render(
  <React.StrictMode>
    <ProvedorTema>
      <App />
    </ProvedorTema>
  </React.StrictMode>,
  document.getElementById('root')
);

