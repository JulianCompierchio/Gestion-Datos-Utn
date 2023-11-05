import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './TableButton.css'

const TableButton = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(props.text)
  return (
      <div className='container-fluid'>
        {props.props.text === 'Modificar' ?
        <div className='d-flex justify-content-center'>
          <Link to={props.props.link}>
            <Button className='table-button-style' style={{ backgroundColor : `rgb(${props.props.background})`}}>{props.props.text}</Button>
          </Link>
        </div> : 
        <div className='d-flex justify-content-center'>
          <Button className='table-button-style' style={{ backgroundColor : `rgb(${props.props.background})`}} onClick={handleShow}>{props.props.text}</Button>
          <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
            <Modal.Header className='modal-header-style'>
              <Modal.Title>Eliminar {props.props.type}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal-body-style'>
              Esta seguro de eliminar el registro seleccionado?
            </Modal.Body>
            <Modal.Footer className='modal-footer-style'>
              <Button className='table-button-style' variant='secondary' onClick={handleClose}>
                Cancelar
              </Button>
              <Button className='table-button-style' style={{ backgroundColor : `rgb(${props.props.background})`}}>
                Confimar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>        
        }
      </div>
  )
}

export default TableButton