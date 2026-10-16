import error  from 'jquery';
import Global from '../Global';
import axios from 'axios';

export default class ServiceHospital {
    async obtenerHospitales(){
        let url = Global.urlApiTrabajadores;
        let endpoint="/api/hospitales"

        try{
            let response = await axios.get(url+endpoint);
            return response.data;
        }catch(error){
            throw error;
        }
        
    }

    async ontenerTrabajadores(data){
        let url = Global.urlApiTrabajadores;
        let endpoint="/api/trabajadores/trabajadoreshospitales?" + data;

        try{
            let response = await axios.get(url+endpoint);
            return response.data;
        }catch(error){
            throw error;
        }
        
    }
}