import React from 'react'
import { useLocation } from 'react-router-dom';
import ADMButton from '../../Buttons/ADMButton/ADMButton';
import './SubjectsTable.css'

const SubjectsTable = () => {

  const location = useLocation();
  const props = location.state.data.props
  return (
    <div className='container-fluid'>
      <div className='row d-flex justify-content-center align-items-center'>
        <div className='col-12 title-style'>
          {props.text}
        </div>
      </div>
      <div className='row col-12'>
        SubjectsTable
        <ADMButton props = {props}/>
      </div>
    </div>
  )
}

export default SubjectsTable