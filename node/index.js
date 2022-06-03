// 1- Crie uma função dentro do arquivo index.js que imprima no console o seguinte objeto:

function getObj() {
    return {
        altura: 1.75,
        corCabelo: "preto",
        cursos: ["JS", "JAVA", "C#"],
        nome: "Marcos",
        escreverNome: function () {
            console.log(this.nome);
        },
        filhos: [{ nome: "José", idade: 50 }, { nome: "Maria", idade: 0 }],
        habilitado: false,
        idade: 25,
        mae: { nome: "Iza", idade: 62 }
    };
}

console.log(getObj());


// execute com npm run start para ver o resultado no console.

// 2 - Crie uma função no arquivo index.js que utilize a função anterior e filtre pelos filhos com mais de 1 ano de idade.

function getFilhosMaisUmAnoIdade() {
    return getObj().filhos.filter((filho) => { return filho.idade > 1 });
}

console.log(getFilhosMaisUmAnoIdade());


var xhr = new XMLHttpRequest();