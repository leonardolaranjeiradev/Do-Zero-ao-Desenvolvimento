// =====================================================
// EXERCÍCIO 2 - ALTERANDO ATRIBUTOS
// =====================================================
//
// Crie uma classe chamada Jogador.
//
// Ela deverá possuir:
//
// - nome
// - vida (começa com 100)
//
// Crie os métodos:
//
// receberDano(valor)
//      diminui a vida.
//
// curar(valor)
//      aumenta a vida.
//
// mostrarVida()
//      exibe:
//
// "Leonardo possui 85 de vida."
//
// Crie um jogador e faça:
//
// receberDano(30)
// curar(15)
// mostrarVida()

class Jogador {
    constructor (nome) {
        this.nome = nome;
        this.vida = 100;
    }
    receberDano (dano) {
        this.vida -= dano;
    }
    curarVida (curar) {
        this.vida += curar;
    }
    mostrarVida () {
        console.log(`${this.nome} possui ${this.vida} de vida.`);
    }
}

const jogador1 = new Jogador ("Leonardo");
jogador1.receberDano(30);
jogador1.curarVida(15);
jogador1.mostrarVida();