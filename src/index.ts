import ApiDocumentGenerator from './api';

const app = document.getElementById("app");

const div = document.createElement("div");
div.innerHTML = `<h1>Document Generator</h1>`;

var api = new ApiDocumentGenerator();

api.cpfCreate().then(data => {
    console.log("Criado CPF.")
    console.log(data);
})

api.cpfCreateList().then(data => {
    console.log("Criada lista de CPF.");
    data.forEach(element => {
        console.log(element);
    })
});


app?.appendChild(div);