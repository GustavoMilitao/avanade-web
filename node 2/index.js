const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());


var lista = [];

function getPokemon(req, res) {
    res.send(lista);
}

function criandoPokemon(req, res) {
    const pokemon = req.body;
    const pokemonPesquisado = lista.find((pokemonNaLista) => pokemonNaLista.id === pokemon.id);
    if (!pokemonPesquisado) {
        lista.push(pokemon);
        res.send('inserido com sucesso');
    } else {
        res.send(`não é possível inserir pois já existe um pokemon com o id ${pokemon.id}`);
    }
}

function getPokemonById(req, res) {
    const pokemonId = req.params.id;
    const pokemonPesquisado = lista.find((pokemonNaLista) => pokemonNaLista.id == pokemonId);
    if(!pokemonPesquisado){
        res.send(`não existe um pokemón com o id ${pokemonId}`)
    } else {
        res.send(pokemonPesquisado);
    }
}

function deletePokemon(req, res) {
    const pokemonId = req.params.id;
    lista = lista.filter((pokemon) => pokemon.id != pokemonId);
    res.send(`pokemon de id ${pokemonId} foi removido com sucesso!`);
}

// Implemente uma verificação de id na rota POST /pokemon para NÃO inserir se já existir um pokemón 
// na lista (utilizar a função find para obter pelo id, pesquisar no google caso tenha dúvidas).

// Crie no projeto do pokemón a rota GET /pokemon/:id onde o id é o req.params.id e use a função 
// find da lista para obter o objeto correspondente ao id.

// Crie no projeto do pokemón a rota DELETE /pokemon/:id onde o id é o req.params.id e utilize a função 
// filter da lista para atualizar a lista somente com os ids que NÃO são o id passado como 
// parâmetro (se tiver dúvidas pesquisar no google como remover um objeto de uma lista de objetos).

app.get('/pokemon', getPokemon);
app.get('/pokemon/:id', getPokemonById);
app.post('/pokemon', criandoPokemon);
app.delete('/pokemon/:id', deletePokemon);


app.listen(3000);