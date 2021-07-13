const ApiDocumentGeneratorCpf = require('./apicpf');
const ApiDocumentGeneratorCnh = require('./apicnh');

const apiCpf = new ApiDocumentGeneratorCpf();
const apiCnh = new ApiDocumentGeneratorCnh();

apiCpf.cpfCreate().then(data => {
    console.log("Criado CPF.")
    console.log(data);
})

apiCpf.cpfCreateList().then(data => {
    console.log("Criada lista de CPF.");
    //data.forEach(element => {
        console.log(data);
    //})
});

apiCnh.cnhCreate().then(data => {
    console.log("Criado CNH.")
    console.log(data);
})

apiCnh.cnhCreateList().then(data => {
    console.log("Criada lista de CNH.");
    //data.forEach(element => {
        console.log(data);
    //})
});