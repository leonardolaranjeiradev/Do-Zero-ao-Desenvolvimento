// =====================================================
// EXERCÍCIO 1 - PRIMEIRA CLASSE
// =====================================================
//
// Crie uma classe chamada Cachorro.
//
// Ela deverá possuir:
//
// - nome
// - raça
// - idade
//
// Crie um método chamado apresentar() que exiba:
//
// "Olá! Meu nome é Rex, sou um Labrador e tenho 3 anos."
//
// Depois crie um objeto dessa classe e chame o método.

class Cachorro  {
    constructor (nome, raca, idade) {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;    
    }
    apresentar () {
        console.log(`Olá! Meu nome é ${this.nome}, sou um ${this.raca} e tenho ${this.idade} anos.`);

    }
}   

const cachorro1 = new Cachorro ("Iron", "Dálmata", 7);
cachorro1.apresentar();