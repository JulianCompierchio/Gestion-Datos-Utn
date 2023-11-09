import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import ApiFetcher from "../../../Api/ApiFetcher";
import { useState } from 'react';
import BackButton from "../../Buttons/BackButton/BackButton"; 
import ADMButton from "../../Buttons/ADMButton/ADMButton";

const AddStudentForm = () => {
  const endpoint = "type_docs/list_all";
  const endpoint2 = "degree/list_all";
  const [fetchedData, setFetchedData] = useState({ response: [] });
  const [fetchedData2, setFetchedData2] = useState({ response: [] });
  const [validated, setValidated] = useState(false);

  const [formData, setFormData] = useState({
    apellido: '',
    nombre: '',
    apeNomb: '',
    nroDoc: 0,
    codDoc: '',
    direccion: '',
    email: '',
    telefono: '',
    sexo: 'Masculino',
    fecNac: '',
    estCivil: '',
  });

  const handleDataFetched = (data) => {
    setFetchedData(data);
  };

  const handleDataFetched2 = (data) => {
    setFetchedData2(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    const studentData = {
      apeNomb: formData.apeNomb,
      fechaNacimiento: formData.fecNac,
      codDoc: formData.codDoc,
      nroDoc: formData.nroDoc,
      direccion: formData.direccion,
      email: formData.email,
      sexo: formData.sexo,
      telefono: formData.telefono,
      estCivil: formData.estCivil,
    };

    console.log(studentData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "apellido" || name === "nombre") {
      // Combina el apellido y el nombre cuando se cambian
      setFormData({
        ...formData,
        [name]: value,
        apeNomb: name === "apellido" ? value + " " + formData.nombre : formData.apellido + " " + value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <Container>
      <ApiFetcher endpoint={endpoint} onDataFetched={handleDataFetched} />
      <ApiFetcher endpoint={endpoint2} onDataFetched={handleDataFetched2} />
      <Row className="justify-content-center">
        <Col md={6}>
          <div className='text-center'><h2>Alumno</h2></div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>

            <Form.Group>
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" required maxLength="30" name="apellido" value={formData.apellido} onChange={handleChange}/>
              <Form.Control.Feedback type="invalid">
                Ingrese su Apellido
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" required maxLength="30" name="nombre" value={formData.nombre} onChange={handleChange}/>
              <Form.Control.Feedback type="invalid">
                Ingrese su Nombre
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>Fecha de nacimiento</Form.Label>
              <Form.Control type="date" required name="fecNac" value={formData.fecNac} onChange={handleChange}/>
              <Form.Control.Feedback type="invalid">
                Ingrese su Fecha de nacimiento
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>Sexo</Form.Label>
                <div className='d-flex '>
                  <Form.Check
                    type="radio"
                    label="Masculino"
                    name="sexo"
                    id="sexo-masculino"
                    className="form-check-inline mr-2"
                    onChange={handleChange}
                    defaultChecked={formData.sexo === 'Masculino'}
                  />
                  <Form.Check
                    type="radio"
                    label="Femenino"
                    name="sexo"
                    id="sexo-femenino"
                    className="form-check-inline"
                    onChange={handleChange}
                  />
                </div>
            </Form.Group>

            <Form.Group>
              <Form.Label>Tipo de Documento</Form.Label>
              <Form.Control as="select" name="codDoc" value={formData.codDoc} onChange={handleChange} required>
                <option value="" disabled hidden>Selecciona un tipo de documento</option>
                {fetchedData.response.map((item) => (
                  <option key={item.codDoc} value={item.codDoc}>
                    {item.descDoc}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Numero de documento</Form.Label>
              <Form.Control type="text" required name="nroDoc" value={formData.nroDoc} onChange={handleChange}/>
              <Form.Control.Feedback type="invalid" pattern="[0-9]+">
                Ingrese su Nro Documento (solo numeros permitidos)
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>Direccion </Form.Label>
              <Form.Control type="text" placeholder='(Opcional)' maxLength="50" name="direccion" value={formData.direccion} onChange={handleChange}/>
            </Form.Group>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required name="email" value={formData.email} onChange={handleChange}/>
              <Form.Control.Feedback type="invalid" maxLength="50" name="email" value={formData.email} onChange={handleChange}>
                Ingrese una direccion de correo valida
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>Telefono</Form.Label>
              <Form.Control type="text" placeholder='(Opcional)' maxLength="20" name="telefono" value={formData.telefono} onChange={handleChange}/>
            </Form.Group>

            <Form.Group>
              <Form.Label>Estado civil</Form.Label>
              <Form.Control as="select" name="estCivil" value={formData.estCivil} onChange={handleChange}>
                <option value="SOLTERO/A">SOLTERO/A</option>
                <option value="CASADO/A">CASADO/A</option>
                <option value="OTRO">OTRO</option>
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

export default AddStudentForm