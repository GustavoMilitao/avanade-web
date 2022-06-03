const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());


const lista = [];

function getObj(req, res) {
    res.send(lista);
}

function criandoObj(req, res) {
    const obj = req.body;
    lista.push(obj);
    res.send('inserido com sucesso');
}

app.get('/obj', getObj);
app.post('/criando', criandoObj);


app.listen(3000);