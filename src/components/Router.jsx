import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Menu from './Menu'
import Home from './Home'
import InsertarDepartamento from './InsertarDepartamento'
import UpdateDepartamento from './UpdateDepartamento'
import BorrarDepartamento from './BorrarDepartamento'
import { useLocation } from 'react-router-dom'
import HospitalesMultiple from './HospitalesMultiple'

export default class Router extends Component {

    render() {
        function UpdateDepartaamentoElement() {
            let {id, nombre, localidad} = useParams();
            return(<UpdateDepartamento id={id} nombre={nombre} localidad={localidad}/>)
        }
    
        function DeleteDepartaamentoElement({recibirMensaje}) {
            let idDepartamento = useParams();
            return(<BorrarDepartamento idDepartamento={idDepartamento} borrarDepartamento={recibirMensaje}/>)
        }

        function HomeElement(){
            let location = useLocation();
            return(<Home mensaje={location.state?.mensaje}/>)
        }
        return (
        <div>
            <BrowserRouter>
                <Menu/>
                <Routes>
                    <Route path='/' element ={<Home mandarMensaje={this.registrarMetodoHome}/>}></Route>
                    <Route path='/nuevoDept' element={<InsertarDepartamento/>}></Route>
                    <Route path='/update/:id/:nombre/:localidad' element={<UpdateDepartaamentoElement/>}></Route>
                    <Route path='/delete/:id' element={<DeleteDepartaamentoElement recibirMensaje={this.recibirMensaje}/>}></Route>
                    <Route path='/home' element ={<HomeElement/>}></Route>
                    <Route path='/hospitales' element ={<HospitalesMultiple/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
        )
    }
}
