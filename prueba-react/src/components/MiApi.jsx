import React, { useState, useEffect } from 'react'
import Card from './Card'

const MiApi = () => {

    const [info, setInfo] = useState([])
    const [busqueda, setBusqueda] = useState("")

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const url = "https://thronesapi.com/api/v2/Characters"
        const response = await fetch(url)
        const data = await response.json()
        data.sort((a, b) => (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0))
        setInfo(data)
    }

    return (
        <div>
            <div className="mt-4 mb-5 mx-auto" style={{ width: '50%' }}>
                <input
                    className="form-control"
                    type="search"
                    placeHolder="Buscar por nombre o apellido"
                    onChange={(e) => setBusqueda(e.target.value)}
                />
            </div>
            <div>
                {info.filter(char =>
                    char.firstName.toLowerCase().includes(busqueda.toLowerCase()) ||
                    char.lastName.toLowerCase().includes(busqueda.toLowerCase())
                ).map(char => (
                    <Card key={char.id} char={char} />
                ))}
            </div>
        </div>
    )
}

export default MiApi