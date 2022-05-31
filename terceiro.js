// alert('foi importado o arquivo terceiro.js');

function onClickLoginButton() {
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    alert(`o usuário digitado é ${usuario} e a senha é ${senha}`);
}


function obterPokemons() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon');
    xhr.onload = function () {
        var lista = JSON.parse(xhr.response).results.map((pokemon) => { return pokemon.name });
        var xhr2 = new XMLHttpRequest();
        xhr2.onload = function () {
            console.log(JSON.parse(xhr2.response).sprites.front_default);
            document.getElementById('pokemons').innerHTML += `<img src="${JSON.parse(xhr2.response).sprites.front_default}" />`
        }
        lista.forEach((nomePokemon, i) => {
            console.log(i);
            setTimeout(() => {
                xhr2.open('GET', `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`);
                xhr2.send();
            }, 1000*i);
        })
        // document.getElementById('pokemons').innerText = lista;
    };
    xhr.send();

}