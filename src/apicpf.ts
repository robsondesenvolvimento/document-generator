import * as rax from 'retry-axios';
import axios, { AxiosInstance } from "axios";

class ApiDocumentGeneratorCpf {
    private urlApi:string;
    

    constructor(){
        this.urlApi = "https://robsonalves-net-br-document-generator-srvapp.azurewebsites.net/api/";        
    }

    async cpfCreate() {    
        let myAxiosInstance:AxiosInstance;
        myAxiosInstance = axios.create();

        myAxiosInstance.defaults.raxConfig = {
            instance: myAxiosInstance,
            retry: 3,
            noResponseRetries: 2,
            retryDelay: 2000,
            httpMethodsToRetry: ['GET'],
            //statusCodesToRetry: [[100, 199], [429, 429], [500, 599]],
            backoffType: 'exponential'
        };

        const interceptorId = rax.attach(myAxiosInstance);
        return await myAxiosInstance.get<string>(`${this.urlApi}/cpf/create`)
        .then(response => response.data);
    }

    async cpfCreateList() {
        let myAxiosInstance:AxiosInstance;
        myAxiosInstance = axios.create();

        myAxiosInstance.defaults.raxConfig = {
            instance: myAxiosInstance,
            retry: 3,
            noResponseRetries: 2,
            retryDelay: 2000,
            httpMethodsToRetry: ['GET'],
            //statusCodesToRetry: [[100, 199], [429, 429], [500, 599]],
            backoffType: 'exponential'
        };

        const interceptorId = rax.attach(myAxiosInstance);
        return await myAxiosInstance.get<string[]>(`${this.urlApi}/cpf/createlist`)
        .then(response => response.data);
    }

    async cpfIsValid(cpf: string) {
        let myAxiosInstance:AxiosInstance;
        myAxiosInstance = axios.create();

        myAxiosInstance.defaults.raxConfig = {
            instance: myAxiosInstance,
            retry: 3,
            noResponseRetries: 2,
            retryDelay: 2000,
            httpMethodsToRetry: ['GET'],
            //statusCodesToRetry: [[100, 199], [429, 429], [500, 599]],
            backoffType: 'exponential'
        };

        const interceptorId = rax.attach(myAxiosInstance);
        return await myAxiosInstance.get<string[]>(`${this.urlApi}/cpf/isvalid/${cpf}`)
        .then(response => response.data);
    }
}

export default ApiDocumentGeneratorCpf