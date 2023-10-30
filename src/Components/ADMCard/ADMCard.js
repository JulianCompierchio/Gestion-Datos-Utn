import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';
import './ADMCard.css'

const ADMCard = (props) => {
    return (
        <div className='container-fluid card-container-style'>
            <div className='d-flex justify-content-center'>
                <ButtonGroup vertical>
                    <div style={{backgroundColor : `rgba(${props.props.background},1)`}} className='card-title-style'>
                        {props.props.text}
                    </div>
                    <Link to={{ pathname: '/StudentsTable'}} state={{data : props}} className='link-style'>
                        <Button style={{backgroundColor : `rgba(${props.props.background}, 0.4)`}} className='card-option-style'>Alumno</Button>
                    </Link>
                    <Link to={{ pathname: '/ProfesorsTable'}} state={{data : props}} className='link-style'>
                        <Button style={{backgroundColor : `rgba(${props.props.background}, 0.4)`}} className='card-option-style'>Profesor</Button>
                    </Link>
                    <Link to={{ pathname: '/ExamsTable' }} state={{data : props}} className='link-style'>
                        <Button style={{backgroundColor : `rgba(${props.props.background}, 0.4)`}} className='card-option-style'>Exámen</Button>
                    </Link>
                    <Link to={{ pathname: '/SubjectsTable'}} state={{data : props}} className='link-style'>
                        <Button style={{backgroundColor : `rgba(${props.props.background}, 0.4)`, borderBottomLeftRadius : 30, borderBottomRightRadius : 30, borderBottom : 0}} className='card-option-style'>
                            Materia
                        </Button>
                    </Link>
                </ButtonGroup>
            </div>
        </div>    
    )
}

export default ADMCard