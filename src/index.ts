import ApiDocumentGeneratorCpf from './apicpf';
import ApiDocumentGeneratorCnh from './apicnh';

const app = document.getElementById("app");

const div = document.createElement("div");
div.innerHTML = `<h1>Document Generator</h1>`;
app?.appendChild(div);

var api = new ApiDocumentGeneratorCpf();

api.cpfCreate().then(data => {
    const createCpf = document.createElement("div");
    createCpf.innerHTML = `
        <h1>CPF</h1>
        <p>${data}</p>`;
    app?.appendChild(createCpf);
})

api.cpfCreateList().then(data => {
    const createListCpf = document.createElement("div");
    createListCpf.innerHTML = `<h1>Lista de CPF's</h1>`;    
    app?.appendChild(createListCpf);

    const createElementCpf = document.createElement("div");
    createElementCpf.innerHTML = `${data} `;
    app?.appendChild(createElementCpf);
    
    //data.forEach(element => {
    //    const createElementCpf = document.createElement("div");
    //    createElementCpf.innerHTML = `${element}`;
    //    app?.appendChild(createElementCpf);
    //});
});

api.cpfIsValid("47590089472").then(data => {
    const createCpfIsValid = document.createElement("div");
    createCpfIsValid.innerHTML = `
        <h1>CPF isValid</h1>
        <p>CPF 47590089472 valid:${data}</p>`;
    app?.appendChild(createCpfIsValid);
})

var apiCnh = new ApiDocumentGeneratorCnh();

apiCnh.cnhCreate().then(data => {
    const createCnh = document.createElement("div");
    createCnh.innerHTML = `
        <h1>CNH</h1>
        <p>${data}</p>`;
    app?.appendChild(createCnh);
})

apiCnh.cnhCreateList().then(data => {
    const createListCnh = document.createElement("div");
    createListCnh.innerHTML = `<h1>Lista de CNH's</h1>`;    
    app?.appendChild(createListCnh);

    const createElementCnh = document.createElement("div");
    createElementCnh.innerHTML = `${data} `;
    app?.appendChild(createElementCnh);
    
    //data.forEach(element => {
    //    const createElementCpf = document.createElement("div");
    //    createElementCpf.innerHTML = `${element}`;
    //    app?.appendChild(createElementCpf);
    //});
});

apiCnh.cnhIsValid("25551650249").then(data => {
    const createCpfIsValid = document.createElement("div");
    createCpfIsValid.innerHTML = `
        <h1>CNH isValid</h1>
        <p>CNH 25551650249 valid:${data}</p>`;
    app?.appendChild(createCpfIsValid);
})

