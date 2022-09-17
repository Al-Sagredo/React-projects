import React, { useState } from 'react'
import { BaseColaboradores } from '../BaseColaboradores'

const Colaboradores = () => {

    const [listaColab, setListaColab] = useState(BaseColaboradores) //el estado es un array de objetos
    const [nuevoColab, setNuevoColab] = useState({ nombre: '', correo: '' })
    const [busqueda, setBusqueda] = useState('')

    const handleInput = (e, propiedad) => {
        setNuevoColab({ ...nuevoColab, [propiedad]: e.target.value })//añade propiedades al objeto nuevoColab
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setListaColab([...listaColab, nuevoColab])//agrega el objeto nuevoColab a la lista
        setNuevoColab({nombre: "", correo: ""})//limpia los campos
    }

    return (
        <div>
            <div>
                <h2>Buscador de colaboradores</h2>
                <input 
                type='text'
                onChange={(e) => setBusqueda(e.target.value)}//el nuevo estado de "busqueda" es el string ingresado
                placeholder='Busca un colaborador'></input>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        type="text"
                        onChange={(e) => handleInput(e, "nombre")}
                        value={nuevoColab.nombre}
                        id='nombre'

                    ></input>
                </div>
                <div>
                    <label htmlFor="correo">Correo</label>
                    <input
                        type="text"
                        onChange={(e) => handleInput(e, "correo")}
                        id='correo'
                        value={nuevoColab.correo}

                    ></input>
                </div>
                <button type='submit'
                >Agregar</button>
            </form>
            <ul>
                {listaColab.filter(colab => colab.nombre.toLowerCase().includes(busqueda.toLowerCase()))
                    .map(colab => (<li key={colab.correo}>{colab.nombre} - {colab.correo}</li>))  
                }
            </ul>
        </div>
    )
}

export default Colaboradores