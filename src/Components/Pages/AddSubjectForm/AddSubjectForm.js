import React, { useState } from "react";
import ApiFetcher from "../../../Api/ApiFetcher";
import { Container, Row, Col , Form} from 'react-bootstrap';
import BackButton from "../../Buttons/BackButton/BackButton";
import ADMButton from "../../Buttons/ADMButton/ADMButton";
import "../Styles/FormsStyle.css";

const AddSubjectForm = () => {

  const endpoint = "professors/list_all";

  const [fetchedData, setFetchedData] = useState({ response: [] });

  const handleDataFetched = (data) => {
    setFetchedData(data);
  };

  const [dataForm,setDataForm] = useState({
    descMat : '',
    descCarrera : '',
    nroLegajoP : ''
  });

  const handleOnChange = (evt) => {
      setDataForm({
        ...dataForm,
        [evt.target.name]: evt.target.value,
      });
    
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return(
    <Container>
      <ApiFetcher endpoint={endpoint} onDataFetched={handleDataFetched} />
      <Row className="justify-content-center">
        <Col md={6}>
          <div className='form-title-style' style={{backgroundColor : 'rgb(52, 199, 0)', marginBottom : '20px'}}>
            Materia
          </div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>

            <Form.Group>
              <Form.Label>Materia</Form.Label>
              <Form.Control type="text" required  value={dataForm.descMat} onChange={handleOnChange}/>
              <Form.Control.Feedback type="invalid" maxLength="30" >
                Ingrese la Materia
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>Carrera</Form.Label>
                <Form.Control type="text" required pattern="[0-9]+" value={dataForm.descCarrera} onChange={handleOnChange}/>
              <Form.Control.Feedback type="invalid">
                  Ingrese la Carrera
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>Numero Legajo Profesor Titular</Form.Label>
                <Form.Control as="select" type="text" required value={dataForm.nroLegajoP} onChange={handleOnChange}>
                {fetchedData.response.map((item) => (
                <option name="nroLegajoP" value={item.nroLegajoP} key={item.nroLegajoP}>{item.apeNomb}</option>
                ))}
                </Form.Control>
            </Form.Group>
            <div className="form-buttons-style">
              <BackButton props={{margin : '0px'}}/>
              <ADMButton props={{ background: '52, 199, 0', text : 'Agregar'}}/>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddSubjectForm;