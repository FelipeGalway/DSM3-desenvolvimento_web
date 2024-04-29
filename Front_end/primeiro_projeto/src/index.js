import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import Exemplo from './Components/Exemplo';
import Cadastro from './Components/Cadastro';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />        
//   </React.StrictMode>
// );

const cadastro = ReactDOM.createRoot(document.getElementById('cadastro'));
cadastro.render(
  <React.StrictMode>
    <Cadastro />        
  </React.StrictMode>
);

// const exemplo = ReactDOM.createRoot(document.getElementById('exemplo'));
// exemplo.render(
//   <React.StrictMode>    
//     <Exemplo />
//   </React.StrictMode>
// );

