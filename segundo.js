// 1 - Faça uma função que retorne um objeto que represente você, com os seguintes atributos: 
// altura: ponto flutuante
// corCabelo: string
// cursos: array
// escreverNome: função que escreve seu nome
// filhos: array de objetos, o objeto filho precisa ter nome e idade
// habilitado: boolean
// idade: inteiro
// mae: objeto com nome e idade
// nome: string

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

// 2 - faça uma função que utilize a função anterior e filtre pelos filhos com mais de 1 ano de idade.

function getFilhosMaisUmAnoIdade() {
    return getObj().filhos.filter((filho) => { return filho.idade > 1 });
}

// 3 - faça uma função que utilize a função 1 e obtenha somente o nome dos filhos com mais de 1 ano de idade.

function getNomeFilhosMaisUmAnoIdade() {
    return getFilhosMaisUmAnoIdade().map((filho) => { return filho.nome });
}