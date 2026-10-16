import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Global from '../Global'

export default class Menu extends Component {

    render() {
        return (
            <nav className="navbar " style={{backgroundColor : "#FFC5D3", fontWeight:"bold"}}>
                <div className="container-fluid">
                <a className="navbar-brand" href="#">Menu</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink style={{textDecoration : "none", color : "black"}} to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={{textDecoration : "none", color : "black"}} to="/nuevoDept">Insertar Departamento</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={{textDecoration : "none", color : "black"}} to="/hospitales">Hospitales</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Oficios
                            </a>
                            <ul className="dropdown-menu">
                            
                            </ul>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        )
    }
}
