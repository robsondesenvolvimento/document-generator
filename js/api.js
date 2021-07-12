const axios = require('axios');

class ApiDocumentGenerator {

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
}

module.exports = ApiDocumentGenerator