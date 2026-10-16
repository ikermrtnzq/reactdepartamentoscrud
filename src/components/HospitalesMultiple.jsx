import React, { Component } from 'react'
import ServiceHospital from '../services/SeviceHospital'
import Trabajadores from './Trabajadores';


export default class HospitalesMultiple extends Component {
    state = {
        hospitales: [],
        hospitalesSeleccionados: []
    }
    selectHospital= React.createRef();
    service = new ServiceHospital();

    cargarHospitales = async() => {
        let datos = await this.service.obtenerHospitales();
        this.setState({
            hospitales: datos
        })
    }

    getHospitalesSeleccionaos = (event) => {
        event.preventDefault();
        let opciones = this.selectHospital.current.options;
        let aux = []
        for(let option of opciones){
            if (option.selected) {
                aux.push(option.value)
                
            }
        }
        console.log(aux);
        this.setState({
            hospitalesSeleccionados: aux
        })
    }
    componentDidMount  = async() => {
        await this.cargarHospitales();
    }
    render() {
        return (
        <div style={{margin: "30px",fontWeight:"bold"}}>
            <h1>Hospitales </h1>
            <form style={{display:"flex", flexDirection: "column", gap: "10px",padding : "20px",border : "10px solid #FFC5D3" , width: "fit-content", borderRadius: "8px"}}>
                <label>Seleccione hospital</label>
                <select ref={this.selectHospital} className='form-control' size={6} multiple >
                    {
                        this.state.hospitales.map((hospital, index)=>{
                            return(
                                <option key={index} value={hospital.idHospital}>{hospital.nombre}</option>
                            )
                        })
                    }
                </select>
                <button style={{borderRadius: "5px", backgroundColor:"#FFC5D3", border:"1px solid #FFC5D3", paddingLeft: "25px", paddingRight:"30px"}} onClick={this.getHospitalesSeleccionaos}>Mostrar Trabajadores</button>
            </form>
            {
                this.state.hospitalesSeleccionados.length != 0 &&
                (<Trabajadores hospitalesSeleccionados={this.state.hospitalesSeleccionados}/>)
            }
        </div>
        )
    }
}
