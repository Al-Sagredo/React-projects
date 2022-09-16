import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

const card = ({ url, title, desc }) => {
    return (
        <div>
            <Card className="mt-3" style={{ width: '100%' }} >
                <Card.Img variant="top" src={url}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </div>
    )
}

export default card