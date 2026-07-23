// =====================================================
// EXERCÍCIO 4 - HERANÇA + SUPER
// =====================================================
//
// Crie uma classe chamada Personagem.
//
// Ela deverá possuir:
//
// - nome
// - nivel
//
// Crie um método apresentar() que exiba:
//
// "Arthur está no nível 15."
//
// Depois crie uma classe:
//
// Guerreiro extends Personagem
//
// Ela deverá adicionar:
//
// - arma
//
// Utilize super() no construtor.
//
// Sobrescreva apresentar() para mostrar:
//
// "Arthur é um Guerreiro nível 15 e utiliza Espada."
//
// Crie um Guerreiro e teste.

class Personagem {
    constructor (nome, nivel) {
        this.nome = nome;
        this.nivel = nivel;
    }

    apresentar () {
        console.log(`${this.nome} está no nível ${this.nivel}.`);
    }
}

class Guerreiro extends Personagem {
    constructor (nome, nivel, arma) {
        super(nome, nivel);       
        this.arma = arma;
    }

    apresentar () {
        console.log(`${this.nome} é um Guerreiro de nível ${this.nivel} e utiliza ${this.arma}.`);
    }
}

const guerreiro1 = new Guerreiro ("Arthur", 15, "Espada");
guerreiro1.apresentar();