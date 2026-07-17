// =====================================================
// EXERCÍCIO 9 - PET SHOP
// =====================================================
//
// Crie um vetor contendo
// cinco objetos.
//
// Cada objeto representa
// um produto.
//
// O produto deverá possuir:
//
// - nome
// - preco
// - estoque
//
// Utilize um FOR para:
//
// - exibir o nome;
// - exibir o preço;
// - informar:
//
// "Disponível"
//
// caso estoque seja maior
// que zero.
//
// Caso contrário:
//
// "Esgotado"

const produtos = [
    {
        nome: "Coleira",
        preco: 60,
        estoque: 10
    },
     {
        nome: "Guia",
        preco: 80,
        estoque: 0
    },
     {
        nome: "Peitoral",
        preco: 112,
        estoque: 7
    },
     {
        nome: "Guia Unificada",
        preco: 33,
        estoque: 2
    },
     {
        nome: "Peitoral H",
        preco: 90,
        estoque: 0
    }
    
];

for (let i = 0; i < produtos.length; i++) {
    console.log("Produto " + (i + 1));
    console.log("Nome: " + produtos[i].nome);
    console.log("Preço: " + produtos[i].preco);
    if (produtos[i].estoque > 0) {
        console.log("Disponível");
    } else {
        console.log("Esgotado");
    }
    console.log("============================");

}