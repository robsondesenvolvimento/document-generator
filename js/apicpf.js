const axios = require('axios');

class ApiDocumentGeneratorCpf {

    constructor(){
        this.urlApi = "https://robsonalves-net-br-document-generator-srvapp.azurewebsites.net/api/";
    }

    async cpfCreate() {
        return await axios.get(`${this.urlApi}/cpf/create`)
        .then(response => response.data);
    }

    async cpfCreateList() {
        return await axios.get(`${this.urlApi}/cpf/createlist`)
        .then(response => response.data);
    }

    async cpfIsValid(cpf) {
        return await axios.get(`${this.urlApi}/cpf/isvalid/${cpf}`)
        .then(response => response.data);
    }
}

module.exports = ApiDocumentGeneratorCpf