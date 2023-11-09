import React from 'react';
import Button from 'react-bootstrap/Button';
import './ADMButton.css';


const ADMButton = (props) => {
    return (
    <div className='container-fluid'>
        <div className='d-flex justify-content-center'>
            <Button className='adm-button-style' style={{ backgroundColor : `rgb(${props.props.background})`}} type='submit'>{props.props.text}</Button>
        </div>
    </div>
    )
}

export default ADMButton