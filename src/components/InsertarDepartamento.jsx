import React, { Component } from 'react'
import ServiceDepartamentos from '../services/ServiceDepartamentos';
import { Navigate } from 'react-router-dom';

export default class InsertarDepartamento extends Component {

    inputNumero= React.createRef();
    inputNombre= React.createRef();
    inputLocalidad= React.createRef();

    service= new ServiceDepartamentos();

    state = {
        status: false,
        mensaje : null
    }

    mandarDepartamento = (event) => {
        event.preventDefault();
        let departamento = {
            numero : parseInt(this.inputNumero.current.value),
            nombre: this.inputNombre.current.value,
            localidad: this.inputLocalidad.current.value
        }

        this.service.insertarDepartamento(departamento).then((result) =>{
            this.setState({
                status: true
            })
        }).catch((error)=> {
            this.setState({
                mensaje : error.message
            })
        })
    }

    
    render() {
        if(this.state.status){
            return(<Navigate to = '/'/>)
        }else{
            return (
                <div style={{margin: "30px", fontSize:"20px"}}>                    
                    <form style={{display:"flex", flexDirection: "column", marginTop:"70px", padding : "20px",border : "10px solid #FFC5D3" , width: "fit-content", borderRadius: "8px", justifyContent:"center", alignItems:"center", margin: "40px auto 0"}}>
                        <h1 style={{color: "#D97891   "}} >Insertar Departamento</h1>
                        <label>Introduzca el numero:</label>
                        <input style={{border: "1px solid #D97891 "}} ref={this.inputNumero} type="number" /><br/>
                        <label>Introduzca el nombre:</label>
                        <input style={{border: "1px solid #D97891 "}} ref={this.inputNombre} type="text" /><br/>
                        <label>Introduzca la loaclidad:</label>
                        <input style={{border: "1px solid #D97891 "}} ref={this.inputLocalidad} type="text" /><br/>
                        <p style={{color: "red", fontWeight: "bold"}}>{this.state.mensaje}</p>
                        <button style={{borderRadius: "5px", backgroundColor:"#FFC5D3", border:"1px solid #FFC5D3", paddingLeft: "25px", paddingRight:"30px"}} onClick={this.mandarDepartamento}>GUARDAR</button>
                    </form>
                </div>
            )
        }
        
    }
}
