import React from 'react';
import Button from 'react-bootstrap/Button';
import './ADMButton.css';


const ADMButton = ({background, text, item}) => {
    console.log(item)
    return (
    <div className='container-fluid'>
        <div className='d-flex justify-content-center'>
            <Button className='adm-button-style' style={{ backgroundColor : `rgb(${background})`}} type='submit'>{text}</Button>
        </div>
    </div>
    )
}

export default ADMButton