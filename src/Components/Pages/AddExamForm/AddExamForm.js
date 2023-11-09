import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import ApiFetcher from "../../../Api/ApiFetcher";
import { useState } from 'react';
import BackButton from "../../Buttons/BackButton/BackButton"; 
import ADMButton from "../../Buttons/ADMButton/ADMButton";

const AddExamForm = () => {
  const endpoint = "descmat/list_all";
  const [fetchedData, setFetchedData] = useState({ response: [] });
  const [validated, setValidated] = useState(false);

  const handleDataFetched = (data) => {
    setFetchedData(data);
  };


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    }}

  return(
    <Container>
      <ApiFetcher endpoint={endpoint} onDataFetched={handleDataFetched} />
      <Row className="justify-content-center">
        <Col md={6}>
          <div className='text-center'><h2>Examen</h2></div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>

            <Form.Group>
              <Form.Label>Materia</Form.Label>
              <Form.Control as="select"  required >
                <option value="" disabled hidden>Selecciona una materia</option>
                {fetchedData.response.map((item) => (
                  <option key={item.nroLegajoP} value={item.nroLegajoP}>
                    {item.apeNomb}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Turno</Form.Label>
                <div className='d-flex '>
                  <Form.Check
                    type="radio"
                    label="Marzo"
                    name="turno"
                    id="turno-marzo"
                    className="form-check-inline mr-2"
                    
                  />
                  <Form.Check
                    type="radio"
                    label="Junio"
                    name="turno"
                    id="turno-junio"
                    className="form-check-inline mr-2"
                   
                  />
                  <Form.Check
                    type="radio"
                    label="Septiembre"
                    name="turno"
                    id="turno-septiembre"
                    className="form-check-inline mr-2"
                    
                  />
                  <Form.Check
                    type="radio"
                    label="Diciembre"
                    name="turno"
                    id="turno-diciembre"
                    className="form-check-inline"
                    
                  />
                </div>
            </Form.Group>

            <Form.Group>
              <Form.Label>Año</Form.Label>
              <Form.Control type="text" required maxLength="4" pattern="[0-9]+" />
              <Form.Control.Feedback type="invalid">
                Ingrese el año 
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>Nota </Form.Label>
              <Form.Control type="text" placeholder='(Opcional)' maxLength="2" pattern="^(?:[1-9]|10)$" />
              <Form.Control.Feedback type="invalid">
                La nota debe estar entre 1 y 10.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>Fecha de inscripcion</Form.Label>
              <Form.Control type="date" placeholder='(Opcional)' />
            </Form.Group>

            <div className='m-4 d-flex justify-content-center'>
              <BackButton props={{margin : '0px'}}/>
              <ADMButton props={{ background: '52, 199, 0', text : 'Agregar'}}/>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}


export default AddExamForm