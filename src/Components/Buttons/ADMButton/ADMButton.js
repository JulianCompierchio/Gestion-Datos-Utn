import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './ADMButton.css'


const ADMButton = (props) => {
    return (
    <div className='container-fluid button-container-style'>
        <div className='d-flex justify-content-center'>
            <Link to={''}>
                <Button className='button-style' style={{}}>BOTON</Button>
            </Link>
        </div>
    </div>
    )
}

export default ADMButton