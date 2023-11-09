import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import ApiFetcher from "../../../Api/ApiFetcher";
import { useState } from 'react';
import BackButton from "../../Buttons/BackButton/BackButton"; 
import ADMButton from "../../Buttons/ADMButton/ADMButton";

const AddSubjectForm = () => {
  const endpoint = "professors/list_all";
  const [fetchedData, setFetchedData] = useState({ response: [] });

  const handleDataFetched = (data) => {
    setFetchedData(data);
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    }}

  return(
    <Container className='mt-3'>
      <ApiFetcher endpoint={endpoint} onDataFetched={handleDataFetched} />
      <Row className="justify-content-center">
        <Col md={6}>
          <div className='text-center'><h2>Materia</h2></div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Codigo Materia</Form.Label>
              <Form.Control type="text" required maxLength="5"/>
              <Form.Control.Feedback type="invalid">
                Ingrese el codigo de materia
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>Materia</Form.Label>
              <Form.Control type="text" required />
              <Form.Control.Feedback type="invalid" maxLength="30" >
                Ingrese la Materia
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>Carrera</Form.Label>
              <Form.Control type="text" required />
              <Form.Control.Feedback type="invalid" maxLength="30" >
                Ingrese la Carrera
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>Profesor</Form.Label>
              <Form.Control as="select">
                {fetchedData.response.map((item) => (
                  <option key={item.nroLegajoP} value={item.nroLegajoP}>
                    {item.apeNomb}
                  </option>
                ))}
              </Form.Control>
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

export default AddSubjectForm