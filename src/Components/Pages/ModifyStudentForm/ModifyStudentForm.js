import React, { useState } from 'react';
import ApiFetcher from '../../../Api/ApiFetcher';
import { useLocation } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import BackButton from '../../Buttons/BackButton/BackButton';
import ADMButton from '../../Buttons/ADMButton/ADMButton';
import './ModifyStudentForm.css';

const ModifyStudentForm = () => {
  const location = useLocation();
  console.log(location)
  const itemdata = location.state.data.itemdata[0]

  const [nroLegajo, setNroLegajo] = useState(itemdata.nroLegajoA);
  return (
    <div className='container-fluid'>
      <div className='row d-flex justify-content-center align-items-center'>
        <Form>
          <Form.Group className="mb-3" controlId="Nro.Legajo">
            <Form.Label>Nro.Legajo</Form.Label>
            <Form.Control type="text" value={nroLegajo} disabled />
          </Form.Group>
          <ADMButton/>
        </Form>
      </div>
    </div>
  )
}

export default ModifyStudentForm