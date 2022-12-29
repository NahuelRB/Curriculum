import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Opciones/Header';
import './index.css';
import MenuPrincipal from './MenuPrincipal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <MenuPrincipal/>
  </React.StrictMode>
);
