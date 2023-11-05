import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './BackButton.css';

const BackButton = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); 
    };
    return (
    <div className='container-fluid'>
        <div className='d-flex justify-content-center'>
            <Button className='back-button-style' style={{backgroundColor: '#549CC5'}} onClick={goBack}>Volver</Button>
        </div>
    </div>
    )
}

export default BackButton