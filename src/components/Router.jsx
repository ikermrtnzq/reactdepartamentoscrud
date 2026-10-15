import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Menu from './Menu'
import Home from './Home'
import InsertarDepartamento from './InsertarDepartamento'
import UpdateDepartamento from './UpdateDepartamento'
import BorrarDepartamento from './BorrarDepartamento'

export default class Router extends Component {
    render() {
        function UpdateDepartaamentoElement() {
            let {id, nombre, localidad} = useParams();
            return(<UpdateDepartamento id={id} nombre={nombre} localidad={localidad}/>)
        }
        function DeleteDepartaamentoElement({borrarDepartamento}) {
            let idDepartamento = useParams();
            return(<BorrarDepartamento idDepartamento={idDepartamento} borrarDepartamento={borrarDepartamento}/>)
        }
        return (
        <div>
            <BrowserRouter>
                <Menu/>
                <Routes>
                    <Route path='/' element ={<Home/>}></Route>
                    <Route path='/nuevoDept' element={<InsertarDepartamento/>}></Route>
                    <Route path='/update/:id/:nombre/:localidad' element={<UpdateDepartaamentoElement/>}></Route>
                    <Route path='/delete/:id' element={<DeleteDepartaamentoElement borrarDepartamento={this.borrarDepartamento}/>}></Route>


                </Routes>
            </BrowserRouter>
        </div>
        )
    }
}
