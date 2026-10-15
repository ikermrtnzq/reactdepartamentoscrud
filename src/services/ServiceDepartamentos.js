import error  from 'jquery';
import Global from '../Global';
import axios from 'axios';

export default class ServiceDepartamentos {
    obtenerDepartamentos(){
        return new Promise(function(resolve){
            let url = Global.urlApiDepartamentos;
            let endpoint = "/api/departamentos";

            axios.get(url+ endpoint).then((response) => {
                resolve(response.data)
                //console.log(response.data)
            })
        })
    }

    obtenerDepartamento(idDepartamento){
        return new Promise(function(resolve){
            let url = Global.urlApiDepartamentos;
            let endpoint = "/api/departamentos/"+idDepartamento;

            axios.get(url+ endpoint).then((response) => {
                resolve(response.data)
                //console.log(response.data)
            })
        })
    }

    insertarDepartamento(departamento) {
        return new Promise(function(resolve,reject){
            let url = Global.urlApiDepartamentos;
            let endpoint = "/api/departamentos";

            axios.post(url+ endpoint, departamento).then((response) => {
                resolve(response.data)
                //console.log(response.data)
            }).catch((error) => {
                reject(error)
            })
        })
    }

    updateDepartamento(departamento) {
        return new Promise(function(resolve){
            let url = Global.urlApiDepartamentos;
            let endpoint = "/api/departamentos";

            axios.put(url+ endpoint, departamento).then((response) => {
                resolve(response)
                //console.log(response.data)
            })
        })
    }

    deleteDepartamento(idDepartamento){
        return new Promise(function(resolve){
            let url = Global.urlApiDepartamentos;
            let endpoint = "/api/departamentos/" + idDepartamento;

            axios.delete(url+ endpoint).then((response) => {
                resolve(response)
                //console.log(response.data)
            })
        })
    }
}