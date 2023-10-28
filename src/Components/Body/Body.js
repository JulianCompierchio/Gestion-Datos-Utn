import React from 'react'
import ADMCard from '../ADMCard/ADMCard'
import ConsultCard from '../Consult/ConsultCard/ConsultCard'
import Title from '../Title/Title'
import './Body.css'

const propsAgregar = {
    text : 'Agregar', 
    background : '52, 199, 0'
}

const propsModificar = {
    text : 'Modificar', 
    background : '211, 114, 28'
}

const propsEliminar = {
    text : 'Eliminar', 
    background : '238, 22, 35'
}

const Body = () => {
    return (
    <div className='container-fluid body-style'>
        <div className='row'>
            <Title/>
        </div>  
        <div className='row'>   
            <div className='col-6'>
                <ADMCard props = {propsAgregar}/>
            </div>   
            <div className='col-6'>
                <ADMCard props = {propsModificar}/>    
            </div> 
            <div className='col-6'>
                <ADMCard props = {propsEliminar}/>    
            </div> 
            <div className='col-6'>
                <ConsultCard/>
            </div>          
        </div>
    </div>
    )
}

export default Body