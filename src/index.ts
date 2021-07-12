import ApiDocumentGenerator from './api';

const app = document.getElementById("app");

const div = document.createElement("div");
div.innerHTML = `<h1>Document Generator</h1>`;
app?.appendChild(div);

var api = new ApiDocumentGenerator();

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

    data.forEach(element => {
        const createElementCpf = document.createElement("div");
        createElementCpf.innerHTML = `${element}`;
        app?.appendChild(createElementCpf);
    });
});

api.cpfIsValid("82824329467").then(data => {
    const createCpfIsValid = document.createElement("div");
    createCpfIsValid.innerHTML = `
        <h1>CPF isValid</h1>
        <p>CPF 82824329467 valid:${data}</p>`;
    app?.appendChild(createCpfIsValid);
})


