import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UsuarioProvider } from './componentes/UsuariosContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UsuarioProvider>
     <App />
    </UsuarioProvider>
  </React.StrictMode>
);


