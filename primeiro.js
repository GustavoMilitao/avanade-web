function soma(n1, n2) {
    return n1 + n2;
}



// 1 - Crie uma função que retorne o seu nome

function meuNome() {
    return "Gustavo Militão";
}

// 2 - Crie uma função que retorne o nome passado por parâmetro

function retornaNomePassadoPorParametro(nome) {
    return nome;
}

// 3 - Faça uma função para dividir 2 números

function divisao(n1, n2) {
    return n2 === 0 ? 0 : n1 / n2;
    // if (n2 === 0) {
    //     return 0;
    // }
    // return n1 / n2;
}

// 4 - faça uma função que retorne um array com o nome dos alunos presentes na aula

function alunosPresentes() {
    return ["André", "Erick", "Cassia", "Felipe", "Nilce", "Moisés"];
}

// 5 - faça uma função que recebe um array e um valor, adicione o valor no array e retorne o array

function adicionarAoArray(arr, valor) {
    arr.push(valor);
    return arr;
}

function filtro(filho) {
    return filho.nome === "Ana";
}

pessoa.filhos.filter(filtro)

pessoa.filhos.filter((filho) => {
    return filho.nome === "Ana";
})