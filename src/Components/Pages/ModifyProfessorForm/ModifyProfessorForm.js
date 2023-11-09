import React, { useState } from "react";
import ApiFetcher from "../../../Api/ApiFetcher";
import { useLocation } from "react-router-dom";
import { Container, Row, Col , Form} from 'react-bootstrap';
import BackButton from "../../Buttons/BackButton/BackButton";
import ADMButton from "../../Buttons/ADMButton/ADMButton";
import "../Styles/FormsStyle.css";

const ModifyProfessorForm = () => {

  const endpointDoc = "type_docs/list_all";
  const endpointTit = "degree/list_all";

  const [fetchedDataDoc, setFetchedDataDoc] = useState({ response: [] });
  const [fetchedDataTit, setFetchedDataTit] = useState({ response: [] });

  const handleDataFetchedDoc = (data) => {
    setFetchedDataDoc(data);
  };

  const handleDataFetchedTit = (data) => {
    setFetchedDataTit(data);
  };

  const location = useLocation();
  console.log(location);
  const itemdata = location.state.data;

  let masc = false;
  let feme = false;
  const [ape, nom] = itemdata.apeNomb.split(' ');
  const [fNac] = itemdata.fecNac.split('T');
  if (itemdata.sexo === 'M'){
    masc = true;
  }  
  else{
    feme = true;
  }
  const [dataForm,setDataForm] = useState({
    ape : ape,
    nom : nom,
    fNacimiento : fNac,
    femenino : feme,
    masculino : masc,
    tipoDoc : itemdata.codDocNavigation.descDoc,
    nroDoc : itemdata.nroDoc,
    dir : itemdata.direccion,
    email : itemdata.email,
    tel : itemdata.telefono,
    estCivil : itemdata.estCivil,
    codTitulo : itemdata.codTituloNavigation.codTitulos
  });

  const handleOnChange = (evt) => {
    if (evt.target.type === "radio") {
      setDataForm({
        ...dataForm,
        masculino: evt.target.name === "M",
        femenino: evt.target.name === "F",
      });
    } else {
      setDataForm({
        ...dataForm,
        [evt.target.name]: evt.target.value,
      });
    }
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

  return (
    <Container>
      <ApiFetcher endpoint={endpointDoc} onDataFetched={handleDataFetchedDoc} />
      <ApiFetcher endpoint={endpointTit} onDataFetched={handleDataFetchedTit} />
      <Row className="justify-content-center">
        <Col md={6}>
          <div className='form-title-style' style={{backgroundColor : 'rgb(211, 114, 28)'}}>
            Profesor
          </div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>

            <Form.Group>
              <Form.Label>Nro Legajo</Form.Label>
              <Form.Control type="text" name="legajo" disabled value={itemdata.nroLegajoA}/>
            </Form.Group>

            <Form.Group>
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" name="ape" required maxLength="30" value={dataForm.ape} onChange={handleOnChange}/>
              <Form.Control.Feedback type="invalid">
                Ingrese su Apellido
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" name="nom" required maxLength="30" value={dataForm.nom} onChange={handleOnChange}/>
              <Form.Control.Feedback type="invalid">
                Ingrese su Nombre
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>Fecha de Nacimiento</Form.Label>
              <Form.Control type="date" name="fNacimiento"required value={dataForm.fNacimiento} onChange={handleOnChange}/>
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
                    name="M"
                    checked = {dataForm.masculino}
                    className="form-check-inline mr-2"
                    onChange={handleOnChange}
                    required/>
                  <Form.Check
                    type="radio"
                    label="Femenino"
                    name="F"
                    checked={dataForm.femenino}
                    className="form-check-inline"
                    onChange={handleOnChange}
                    required/>
                </div>
                <Form.Control.Feedback type="invalid">
                  Seleccione al menos una opción.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>Tipo de Documento</Form.Label>
              <Form.Control as="select" name="tipoDoc" value={dataForm.tipoDoc} onChange={handleOnChange}>
              {fetchedDataDoc.response.map((item) => (
                <option name="tipoDoc" value={item.codDoc} key={item.codDoc}>{item.descDoc}</option>
              ))}
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Numero de documento</Form.Label>
              <Form.Control type="text" name="nroDoc" required value={dataForm.nroDoc} onChange={handleOnChange}/>
              <Form.Control.Feedback type="invalid" pattern="[0-9]+">
                Ingrese su Nro Documento (solo numeros permitidos)
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>Direccion </Form.Label>
              <Form.Control type="text" name="dir" placeholder='(Opcional)' maxLength="50" value={dataForm.dir} onChange={handleOnChange}/>
            </Form.Group>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="Email" name="email" required value={dataForm.email} onChange={handleOnChange}/>
              <Form.Control.Feedback type="invalid" maxLength="50">
                Ingrese una direccion de correo valida
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>Telefono</Form.Label>
              <Form.Control type="text" name="tel"placeholder='(Opcional)' maxLength="20" value={dataForm.tel} onChange={handleOnChange}/>
            </Form.Group>

            <Form.Group>
              <Form.Label>Estado civil</Form.Label>
              <Form.Control type="text" name="estCivil" placeholder='(Opcional)' maxLength="10" value={dataForm.estCivil} onChange={handleOnChange}/>
            </Form.Group>

            <Form.Group>
              <Form.Label>Título</Form.Label>
              <Form.Control as="select" name="codTitulo" value={dataForm.codTitulo} onChange={handleOnChange}>
              {fetchedDataTit.response.map((item) => (
                <option name="codTitulo" value={item.codTitulos} key={item.codTitulos}>{item.descTitulo}</option>
              ))}
              </Form.Control>
            </Form.Group>

            <div className="form-buttons-style">
              <BackButton props={{margin : '0px'}}/>
              <ADMButton props={{ background: '211, 114, 28', text : 'Modificar'}}/>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ModifyProfessorForm