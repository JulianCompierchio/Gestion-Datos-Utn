import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import './ConsultCard.css'

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log(),
    );
    return (
        <Button className='consult-option-style' style={{backgroundColor: `rgba(3,76,140,0.7)`}} onClick={decoratedOnClick}>
        {children}
    </Button>
    );
}

const ConsultCard = () => {
    return (
    <div className='container-fluid consult-container-style'>
        <div className='d-flex justify-content-center'>
            <div>
                <div className='consult-title-style'>
                    Consultar
                </div>
                <ButtonGroup vertical>
                <Accordion flush>
                    <Accordion.Item eventKey="0">
                            <CustomToggle eventKey="0">
                                Alumnos
                            </CustomToggle>
                            <Accordion.Collapse eventKey="0">
                                <div>
                                    <Button style={{backgroundColor: 'rgba(3,76,140,0.5)'}} className='consult-suboption-style'>Inscriptos</Button>
                                    <Button style={{backgroundColor: 'rgba(3,76,140,0.5)'}} className='consult-suboption-style'>Por Turno</Button>
                                    <Button style={{backgroundColor: 'rgba(3,76,140,0.5)'}} className='consult-suboption-style'>Aprobados</Button>
                                </div>
                            </Accordion.Collapse>
                    </Accordion.Item>
                </Accordion>              
                    <Button  style={{backgroundColor: `rgba(3,76,140,0.6)`,borderBottomLeftRadius : 30, borderBottomRightRadius : 30, borderBottom : 0}} className='consult-option-style'>Turnos</Button>
                </ButtonGroup>
            </div>
        </div>
    </div>
    ) 
}

export default ConsultCard