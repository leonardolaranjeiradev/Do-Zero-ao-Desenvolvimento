// =====================================================
// EXERCÍCIO 5 - PET SHOP
// =====================================================
//
// Crie um objeto chamado produto.
//
// Ele deverá possuir:
//
// - nome
// - preco
// - estoque
//
// Caso o estoque seja maior que zero,
// informe que o produto está disponível.
//
// Caso contrário,
// informe que o produto está esgotado.

const produto = {
    nome: "Bolinha",
    preco: 8.70,
    estoque: 0
};

if (produto.estoque > 0) {
    console.log("Produto está disponível")
}else {
    console.log("Produto está esgostado")
};
