import React, { useState } from 'react';
import { BaseColaboradores } from './BaseColaboradores'

function App() {

  const [listaColab, setListaColab] = useState(BaseColaboradores) //el estado es un array de objetos
  const [nuevoColab, setNuevoColab] = useState({ nombre: '', correo: '' })
  const [busqueda, setBusqueda] = useState('')

  const handleInput = (e, propiedad) => {
    setNuevoColab({ ...nuevoColab, [propiedad]: e.target.value })//añade propiedades al objeto nuevoColab
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setListaColab([...listaColab, nuevoColab])//agrega el objeto nuevoColab a la lista
    setNuevoColab({ nombre: "", correo: "" })//limpia los campos
  }
  return (
    <div>
      <nav className='navbar bg-info mb-5 p-4'>
        <div className='container-fluid'>
          <a className="navbar-brand">Buscador de colaboradores</a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type='text'
              onChange={(e) => setBusqueda(e.target.value)}//el nuevo estado de "busqueda" es el string ingresado
              placeholder='Busca un colaborador'></input>

          </form>
        </div>
      </nav>
      <form className="w-75 ms-3 mt-2" onSubmit={(e) => handleSubmit(e)}>
        <div className='mb-3'>
          <label className='form-label' htmlFor="nombre">Nombre</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => handleInput(e, "nombre")}
            value={nuevoColab.nombre}
            id='nombre'

          ></input>
        </div>
        <div className='mb-3'>
          <label className='form-label' htmlFor="correo">Correo</label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => handleInput(e, "correo")}
            id='correo'
            value={nuevoColab.correo}

          ></input>
        </div>
        <button type='submit' className='btn btn-success my-4'
        >Agregar</button>
      </form>
      
      <hr/>
      <div className="ms-5">
      <h1>Listado de colaboradores</h1>
      <ul className="mt-3">
        {listaColab.filter(colab => colab.nombre.toLowerCase().includes(busqueda.toLowerCase()))
          .map(colab => (<li key={colab.correo}>{colab.nombre} - {colab.correo}</li>))
        }
      </ul>
      </div>
    </div>
  );

}

export default App;
