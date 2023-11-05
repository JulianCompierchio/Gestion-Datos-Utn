import React from 'react';
import Table from 'react-bootstrap/Table';
import BackButton from '../../Buttons/BackButton/BackButton';
import '../Styles/TablesStyle.css'

const ConsultStudentsPerShift = () => {
    return (
        <div className='container-fluid'>
            <div className='row d-flex justify-content-center align-items-center'>
                <div className='row col-12 table-title-style' style={{ backgroundColor : 'rgb(3,76,140)', width : '200px'}}>
                    Alumnos Por Turno
                </div>
            </div>
            <div className='row col-12 table-container-style'>
                <Table responsive striped bordered hover variant='dark'className='table-style'>
                    <thead>
                        <tr>
                        <th>#</th>
                        {Array.from({ length: 12 }).map((_, index) => (
                            <th key={index}>Table heading</th>
                        ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        {Array.from({ length: 12 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                        </tr>
                        <tr>
                        <td>2</td>
                        {Array.from({ length: 12 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                        </tr>
                        <tr>
                        <td>3</td>
                        {Array.from({ length: 12 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                        </tr>
                    </tbody>
                </Table>
                <BackButton/>
            </div>
        </div>
    )
}

export default ConsultStudentsPerShift