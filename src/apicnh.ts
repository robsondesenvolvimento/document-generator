import * as rax from 'retry-axios';
import axios, { AxiosInstance } from "axios";

class ApiDocumentGeneratorCnh {
    private urlApi:string;

    constructor(){
        this.urlApi = "https://robsonalves-net-br-document-generator-srvapp.azurewebsites.net/api/";
    }

    async cnhCreate() {
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
        return await myAxiosInstance.get<string>(`${this.urlApi}/cnh/create`)
        .then(response => response.data);
    }

    async cnhCreateList() {
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
        return await myAxiosInstance.get<string[]>(`${this.urlApi}/cnh/createlist`)
        .then(response => response.data);
    }

    async cnhIsValid(cnh: string) {
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
        return await myAxiosInstance.get<string[]>(`${this.urlApi}/cnh/isvalid/${cnh}`)
        .then(response => response.data);
    }
}

export default ApiDocumentGeneratorCnh