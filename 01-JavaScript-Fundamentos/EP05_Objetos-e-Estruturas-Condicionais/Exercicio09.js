// =====================================================
// EXERCÍCIO 9 - CASA DE RAÇÃO
// =====================================================
//
// Crie um vetor contendo quatro objetos.
//
// Cada objeto representa um produto.
//
// Cada produto deve possuir:
//
// - nome
// - preco
// - estoque
//
// Depois exiba apenas:
//
// - o nome do primeiro produto;
// - o preço do terceiro;
// - o estoque do último produto.

const produtos = [
    {
        nome: "Ração",
        preco: 159.90,
        estoque: 10
    },
     {
        nome: "Petisco",
        preco: 19.90,
        estoque: 7
    },
     {
        nome: "Brinquedo",
        preco: 10.90,
        estoque: 30
    },
     {
        nome: "Areia pra Gato",
        preco: 55.90,
        estoque: 3
    }
];

console.log("O nome do primeiro produto é: " + produtos[0].nome);
console.log("O preço do terceiro produto é de: " + produtos[2].preco);
console.log("O último produto tem " + produtos[3].estoque + " em estoque");
