import axios from "axios";

class ApiDocumentGeneratorCnh {
    private urlApi:string;

    constructor(){
        this.urlApi = "https://robsonalves-net-br-document-generator-srvapp.azurewebsites.net/api/";
    }

    async cnhCreate() {
        return axios.get<string>(`${this.urlApi}/cnh/create`)
        .then(response => response.data);
    }

    async cnhCreateList() {
        return await axios.get<string[]>(`${this.urlApi}/cnh/createlist`)
        .then(response => response.data);
    }

    async cnhIsValid(cnh: string) {
        return await axios.get<string[]>(`${this.urlApi}/cnh/isvalid/${cnh}`)
        .then(response => response.data);
    }
}

export default ApiDocumentGeneratorCnh