import React from "react"

const Input = ({name, setName, password, setPassword}) => {
    return (
        <div className="formulario">
            <div>
                <label htmlFor="nombre">Nombre</label>
                <input 
                id="nombre" 
                type="text"
                className="form-control mb-3"
                value={name}
                onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="password">Contraseña</label>
                <input 
                id="password" 
                type="password"
                className="form-control mb-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}></input>
            </div>
        </div>
    )
}

export default Input