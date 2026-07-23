// =====================================================
// EXERCÍCIO 6 - CONTROLE DE ESTOQUE
// =====================================================
//
// Crie uma classe chamada Produto.
//
// A classe deverá armazenar:
//
// - nome
// - preco
// - quantidade
//
// Implemente métodos para:
//
// - adicionar itens ao estoque.
// - remover itens do estoque.
// - exibir as informações do produto.
//
// Regras:
//
// - Não permitir que a quantidade fique negativa.
// - Caso a remoção não seja possível, exiba uma mensagem adequada.
//
// -----------------------------------------------------
//
// Em seguida, crie uma classe:
//
// ProdutoPerecivel extends Produto
//
// Ela deverá possuir:
//
// - validade (em dias)
//
// Sobrescreva o método responsável por exibir
// as informações do produto para incluir a validade.
//
// Crie alguns produtos e teste diferentes cenários.

class Produto {
    constructor (nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    addItens (valor) {
        this.quantidade += valor;        
    }
    removerItens (valor) {
        if (this.quantidade >= valor) {
            this.quantidade -= valor;
        } else {
            console.log("Você não possuí essa quantidade em estoque.");
        }
    }
    exibirItens () {
        console.log(`Produto: ${this.nome}`);
        console.log(`Preço: ${this.preco},00`);
        console.log(`Estoque: ${this.quantidade}`);
        
    }

}

class ProdutoPerecivel extends Produto{
    constructor (nome, preco, quantidade, validade) {
        super(nome, preco, quantidade);
        this.validade = validade;
    }

    exibirItens () {
        super.exibirItens();
        console.log(`Validade: ${this.validade} dias`);
        console.log("=================================");
    }
}

const produto2 = new ProdutoPerecivel ("Leite Crú", 14, 11, 7);
produto2.exibirItens();
produto2.addItens(10);
produto2.exibirItens();
produto2.removerItens(15);
produto2.exibirItens();
produto2.removerItens(20);
produto2.removerItens(10);
produto2.exibirItens();
produto2.removerItens(1);