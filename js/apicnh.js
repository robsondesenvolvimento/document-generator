const axios = require('axios');

class ApiDocumentGeneratorCnh {

    constructor(){
        this.urlApi = "https://robsonalves-net-br-document-generator-srvapp.azurewebsites.net/api/";
    }

    async cnhCreate() {
        return await axios.get(`${this.urlApi}/cnh/create`)
        .then(response => response.data);
    }

    async cnhCreateList() {
        return await axios.get(`${this.urlApi}/cnh/createlist`)
        .then(response => response.data);
    }

    async cnhIsValid(cnh) {
        return await axios.get(`${this.urlApi}/cpf/isvalid/${cnh}`)
        .then(response => response.data);
    }
}

module.exports = ApiDocumentGeneratorCnh