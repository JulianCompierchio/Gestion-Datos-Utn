import React, { useState } from 'react';
import ApiFetcher from '../../../Api/ApiFetcher';
import { useLocation } from 'react-router-dom';
import TableButton from '../../Buttons/TableButton/TableButton';
import Table from 'react-bootstrap/Table';
import BackButton from '../../Buttons/BackButton/BackButton';
import '../Styles/TablesStyle.css'

const ExamsTable = () => {
  const location = useLocation();
  const props = location.state.data.props
  props.link = "/ModifyExamForm"
  return (
    <div className='container-fluid'>
      <div className='row d-flex justify-content-center align-items-center'>
        <div className='row col-12 table-title-style' style={{ backgroundColor : `rgb(${props.background})`}}>
          Exámenes
        </div>
      </div>
      <div className='row col-12 table-container-style'>
        <Table responsive striped bordered hover variant='dark'className='table-style'>
          <thead>
            <tr>
              <th>#</th>
              {Array.from({ length: 13 }).map((_, index) => (
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
              <td>
                <TableButton props = {props}/>
              </td>
            </tr>
            <tr>
              <td>2</td>
              {Array.from({ length: 12 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
              <td>
                <TableButton props = {props}/>
              </td>
            </tr>
            <tr>
              <td>3</td>
              {Array.from({ length: 12 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
              <td>
                <TableButton props = {props}/>
              </td>
            </tr>
          </tbody>
        </Table>
        <BackButton/>
      </div>
    </div>
  )
}

export default ExamsTable