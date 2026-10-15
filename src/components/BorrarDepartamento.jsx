import React, { Component } from 'react'
import ServiceDepartamentos from '../services/ServiceDepartamentos'
import { NavLink } from 'react-router-dom';

export default class BorrarDepartamento extends Component {
        service = new ServiceDepartamentos();

        state={
            departamento:[]
        }

        idDepartamento = this.props.idDepartamento.id;

        obtenerDepartamento =(idDepartamento) =>{
            this.service.obtenerDepartamento(idDepartamento).then((response)=>{
                this.setState({
                    departamento: response
                })
            })
        }

        borrarDepartamento = (idDepartamento) => {
            /*this.service.deleteDepartamento(idDepartamento).then((response)=>{
                this.obtenerDepartamentos()
            })*/
            this.props.borrarDepartamento()

        }

        componentDidMount = () => {
            //console.log(this.idDepartamento)
            this.obtenerDepartamento(this.idDepartamento)
        }
    render() {
        return (
        <div style={{display:"flex", flexDirection: "column", marginTop:"70px", padding : "20px",border : "10px solid #FFC5D3" , width: "fit-content", borderRadius: "8px", justifyContent:"center", alignItems:"center", margin: "40px auto 0"}}>
                
                <h1>Estas seguro de que quieres borrar??</h1>
                <div style={{display: "flex", flexDirection:"row", gap:"25px"}}>
                    <h2>Nombre: {this.state.departamento.nombre}</h2>
                    <h2>Localidad: {this.state.departamento.localidad}</h2>
                </div>
                <div style={{display: "flex", flexDirection:"row", gap:"5px"}}>
                    <button className="btn" style={{backgroundColor: "#FFC5D3", }} onClick={() => {this.borrarDepartamento()}}>SEGURO</button> 
                    <NavLink className="btn" to="/" style={{backgroundColor: "#FFC5D3", }}>CANCELAR</NavLink>
                </div>
        </div>
        
        )
    }
}
