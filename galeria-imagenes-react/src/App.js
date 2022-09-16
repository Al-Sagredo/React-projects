import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Boton from './components/Boton'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title='Galería de imágenes con React' />
      <hr />
      <Main />
      <Boton />
      <hr />
      <Footer desc='Página creada por Alvaro Sagredo' />
      
    </div>
  );
}

export default App;
