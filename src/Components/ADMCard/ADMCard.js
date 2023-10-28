import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './ADMCard.css'



const ADMCard = (props) => {

    return (
        <div className='container-fluid card-container-style'>
            <div className='d-flex justify-content-center'>
                <ButtonGroup vertical>
                    <div style={{backgroundColor : `rgba(${props.props.background},1)`}} className='card-title-style'>
                        {props.props.text}
                    </div>
                    <Button style={{backgroundColor : `rgba(${props.props.background}, 0.4)`}} className='card-option-style'>Alumno</Button>
                    <Button style={{backgroundColor : `rgba(${props.props.background}, 0.4)`}} className='card-option-style'>Profesor</Button>
                    <Button style={{backgroundColor : `rgba(${props.props.background}, 0.4)`}} className='card-option-style'>Exámen</Button>
                    <Button style={{backgroundColor : `rgba(${props.props.background}, 0.4)`, borderBottomLeftRadius : 30, borderBottomRightRadius : 30, borderBottom : 0}} className='card-option-style'>
                        Materia
                    </Button>
                </ButtonGroup>
            </div>
        </div>    
    )
}

export default ADMCard