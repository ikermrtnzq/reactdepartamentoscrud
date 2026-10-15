import React, { Component } from 'react'
import loading from '../assets/images/cargando.jpg'
import './Home.css'
import ServiceDepartamentos from '../services/ServiceDepartamentos'
import { NavLink } from 'react-router-dom'
import BorrarDepartamento from './BorrarDepartamento'
export default class Home extends Component {

    state = {
        status: false,
        departamentos: []
    }

    service = new ServiceDepartamentos();

    obtenerDepartamentos = () => {
        this.service.obtenerDepartamentos().then((response)=>{
            this.setState({
                departamentos: response,
                status: true
            })
        })
    }

    borrarDepartamento = (idDepartamento) => {
        console.log("HOLA")

    }
    componentDidMount = () => {
        this.obtenerDepartamentos()
    }
    render() {
        if(this.state.status){
            return (
                <div style={{margin: "30px"}}>
                    <h1>Home</h1>
                    <table style={{borderRadius: "10px", marginTop:"30px", justifyContent:"center", alignItems:"center", margin: "0 auto"}}>
                        <thead>
                            <tr>
                                <th style={{ backgroundColor : "#FFC5D3" ,padding: "10px",border : "1px solid #FFC5D3", borderBottom: "1px solid #D3D3D3"}}>Numero</th>
                                <th style={{ backgroundColor : "#FFC5D3" ,padding: "10px",border : "1px solid #FFC5D3", borderBottom: "1px solid #D3D3D3"}}>Nombre</th>
                                <th style={{ backgroundColor:"#FFC5D3" ,padding: "10px",border : "1px solid #FFC5D3",borderBottom: "1px solid #D3D3D3"}}>Localidad</th>
                                <th style={{ backgroundColor:"#FFC5D3" ,padding: "10px",border : "1px solid #FFC5D3",borderBottom: "1px solid #D3D3D3"}}>Update</th>
                                <th style={{ backgroundColor:"#FFC5D3" ,padding: "10px",border : "1px solid #FFC5D3",borderBottom: "1px solid #D3D3D3"}}>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                    this.state.departamentos.map((departamento, index) => {
                                        return(
                                            <tr >
                                                <td style={{padding: "10px",border : "1px solid #D3D3D3"}}> {departamento.numero}  </td>
                                                <td style={{padding: "10px",border : "1px solid #D3D3D3"}}> {departamento.nombre}  </td>
                                                <td style={{padding: "10px",border : "1px solid #D3D3D3"}}> {departamento.localidad} </td>
                                                <td style={{padding: "10px",border : "1px solid #D3D3D3"}}><NavLink className="btn" style={{backgroundColor: "#FFC5D3", }} to={"/update/"+ departamento.numero + "/" + departamento.nombre + "/" + departamento.localidad} >🔄</NavLink></td>
                                                <td style={{padding: "10px",border : "1px solid #D3D3D3"}}><NavLink className="btn" style={{backgroundColor: "#FFC5D3", }} to={"/delete/"+departamento.numero} borrarDepartamento={this.borrarDepartamento} >🗑️</NavLink></td>

                                            </tr>
                                        )
                                    })
                                }
                        </tbody>
                    </table>
                    <br />
                </div>
            )
        }else{
            return(
                <div style={{display: 'flex', flexDirection : 'column', alignItems:"center", margin: "0 auto", marginTop:"300px"}}>
                    <img className='girar' src={loading} alt='loading....' style={{width: "180px" }}></img>
                </div>
            )
            
        }
    }
}
