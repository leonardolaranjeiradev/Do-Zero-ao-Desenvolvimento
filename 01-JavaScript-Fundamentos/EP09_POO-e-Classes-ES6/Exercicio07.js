// =====================================================
// EXERCÍCIO 7 - SISTEMA DE RPG
// =====================================================
//
// Crie uma classe chamada Personagem.
//
// Ela deverá possuir:
//
// - nome
// - vida
// - mana
//
// Implemente métodos que permitam:
//
// - receber dano.
// - recuperar vida.
// - exibir o estado atual.
//
// -----------------------------------------------------
//
// Depois crie uma classe:
//
// Mago extends Personagem
//
// Ela deverá possuir:
//
// - magia
//
// Sobrescreva o método atacar().
//
// Regras:
//
// - Para atacar utilizando magia,
//   será necessário consumir mana.
// - Caso não exista mana suficiente,
//   o ataque não deverá acontecer.
//
// Faça diversos testes até esgotar
// toda a mana do personagem.

class Personagem {
    constructor (nome, vida, mana) {
        this.nome = nome;
        this.vida = vida;
        this.mana = mana;
    }
    receberDano (valor) {
        this.vida -= valor;
    }
    recuperarVida (valor) {
        this.vida += valor;
    }
    status () {
        console.log("========= Status do Personagem =========");
        console.log(`Nome: ${this.nome}`);
        console.log(`HP: ${this.vida}`);
        console.log(`MP: ${this.mana}`);
    }
}

class Mago extends Personagem {
    constructor (nome, vida, mana, magia) {
        super(nome, vida, mana);
        this.magia = magia;
    }

    status () {
        super.status();
        console.log(`Ataque: ${this.magia}`);
        console.log("========================================");        
    }
    atacar (ataque) {
        let gastoDeMana = ataque / 2;
        if (gastoDeMana <= this.mana) {
            this.mana -= gastoDeMana;
            console.log(`${this.nome} atacou com ${this.magia}`);
        } else {
            console.log("Sem mana para atacar");
        }
    }
}

const mago1 = new Mago ("Orion", 40, 60, "Raio de Gelo");
mago1.status();
mago1.atacar(60);
mago1.status();
