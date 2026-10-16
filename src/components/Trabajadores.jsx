import React, { Component } from 'react'
import ServiceHospital from '../services/SeviceHospital'

    export default class Trabajadores extends Component {
        state={
            trabajadores: []
        }
        service= new ServiceHospital();

        cargarTrabajadores = async() =>{
            let hospitales = this.props.hospitalesSeleccionados;
            //console.log("Hospitales:"+hospitales)
            let data =""
            for(let id of hospitales){
                console.log("id: " +id)
                data = data+ "idhospital="+id+"&"
            }
            data = data.substring(0,data.length-1);
            console.log("ruta: " +data)
            let datos= await this.service.ontenerTrabajadores(data);
            console.log(datos);
            this.setState({
                trabajadores: datos
            })
        }

        componentDidMount = async() => {
            await this.cargarTrabajadores();
        }
        componentDidUpdate = async(oldProps) => {
            if(this.props.hospitalesSeleccionados != oldProps.hospitalesSeleccionados){
                await this.cargarTrabajadores();
            }
        }

        async componentDidMount() {
            try {
                let datos = await this.service.obtenerHospitales();
            } catch (error) {
                console.log(error)
            }
        }
        render() {
        return (
        <div style={{marginTop: "20px",fontWeight:"bold"}}>
            <h1>Trabajadores</h1>
            <table style={{borderRadius: "10px", marginTop:"30px", justifyContent:"center", alignItems:"center", margin: "0 auto"}}>
                        <thead>
                            <tr>
                                <th style={{ backgroundColor : "#FFC5D3" ,padding: "10px",border : "1px solid #FFC5D3", borderBottom: "1px solid #D3D3D3"}}>Numero</th>
                                <th style={{ backgroundColor : "#FFC5D3" ,padding: "10px",border : "1px solid #FFC5D3", borderBottom: "1px solid #D3D3D3"}}>Nombre</th>
                                <th style={{ backgroundColor:"#FFC5D3" ,padding: "10px",border : "1px solid #FFC5D3",borderBottom: "1px solid #D3D3D3"}}>oficio</th>
                                <th style={{ backgroundColor:"#FFC5D3" ,padding: "10px",border : "1px solid #FFC5D3",borderBottom: "1px solid #D3D3D3"}}>Salario</th>
                                <th style={{ backgroundColor:"#FFC5D3" ,padding: "10px",border : "1px solid #FFC5D3",borderBottom: "1px solid #D3D3D3"}}>Hospital</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                    this.state.trabajadores.map((trabajador, index) => {
                                        return(
                                            <tr >
                                                <td style={{padding: "10px",border : "1px solid #D3D3D3"}}> {trabajador.idTrabajador}  </td>
                                                <td style={{padding: "10px",border : "1px solid #D3D3D3"}}> {trabajador.apellido}  </td>
                                                <td style={{padding: "10px",border : "1px solid #D3D3D3"}}> {trabajador.oficio} </td>
                                                <td style={{padding: "10px",border : "1px solid #D3D3D3"}}> {trabajador.salario} €</td>
                                                <td style={{padding: "10px",border : "1px solid #D3D3D3"}}> {trabajador.idHospital} </td>

                                            </tr>
                                        )
                                    })
                                }
                        </tbody>
                    </table>
        </div>
        )
    }
}
