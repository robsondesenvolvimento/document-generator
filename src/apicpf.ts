import axios from "axios";

class ApiDocumentGeneratorCpf {
    private urlApi:string;

    constructor(){
        this.urlApi = "https://robsonalves-net-br-document-generator-srvapp.azurewebsites.net/api/";
    }

    async cpfCreate() {
        return axios.get<string>(`${this.urlApi}/cpf/create`)
        .then(response => response.data);
    }

    async cpfCreateList() {
        return await axios.get<string[]>(`${this.urlApi}/cpf/createlist`)
        .then(response => response.data);
    }

    async cpfIsValid(cpf: string) {
        return await axios.get<string[]>(`${this.urlApi}/cpf/isvalid/${cpf}`)
        .then(response => response.data);
    }
}

export default ApiDocumentGeneratorCpf