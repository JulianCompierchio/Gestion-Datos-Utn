import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col  , Form, Button } from 'react-bootstrap';

const ProfesorsTable = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form>
            <Form.Group>
              <Form.Label>Nro Legajo</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Fecha de nacimiento</Form.Label>
              <Form.Control type="text" />
            </Form.Group>


            {/* Campo radiobuttons de sexo */}


            {/* Campo DROPDOWNLIST de Tipodoc */}

            <Form.Group>
              <Form.Label>Numero de documento</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Direccion </Form.Label>
              <Form.Control type="text" placeholder='(Opcional)' />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="Email" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Telefono</Form.Label>
              <Form.Control type="text" placeholder='(Opcional)'/>
            </Form.Group>

            <Form.Group>
              <Form.Label>Estado civil</Form.Label>
              <Form.Control type="text" placeholder='(Opcional)'/>
            </Form.Group>


            {/* Campo DROPDOWNLIST de Titulo */}

            
            <Button variant="success">Volver</Button>
            <Button variant="danger">Eliminar</Button>
            
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfesorsTable;
















// import React from 'react'
// import { useLocation } from 'react-router-dom';


// const ProfesorsTable = () => {
//   return (

//     <div className='container col-2 text-center row'>
//       <form>
//         <label>Nro Legajo</label>
//         <input type='text'/>

//         <label>Apellido</label>
//         <input type='text'/>

//         <label>Nombre</label>
//         <input type='text'/>

//         <label>Fecha de nacimiento</label>
//         <input type='text'/>

//         <input type='checkbox'/>

//         <label>Numero de documento</label>
//         <input type='text'/>

//         <label>Direcciom</label>
//         <input type='text'/>

//         <label>Email</label>
//         <input type='text'/>

//         <label>Telefono</label>
//         <input type='text' placeholder='(Opcional)'/>

//         <label>Estado civil</label>
//         <input type='text' placeholder='(Opcional)'/>

//         <label>Titulo</label>
//         <input type='text' placeholder='(Opcional)'/>

//       </form>

//       <button className='btn btn-success'>Volver</button>
//       <button className='btn btn-danger'>Eliminar</button>
//     </div>
//   )
// }

// export default ProfesorsTable