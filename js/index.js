const ApiDocumentGenerator = require('./api');

const api = new ApiDocumentGenerator();

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