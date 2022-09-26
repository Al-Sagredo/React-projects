import React from 'react'

const Card = ({ char }) =>
    <div className="card mb-5 mx-auto" style={{ width: '18rem' }}>
        <img className="card-img-top" alt="character image" src={char.imageUrl} />
        <div className="card-body">
            <h5 className="card-title">{char.firstName} {char.lastName}</h5>
        </div>
    </div>

export default Card