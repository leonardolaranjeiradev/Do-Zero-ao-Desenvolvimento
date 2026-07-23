// =====================================================
// EXERCÍCIO 3 - HERANÇA
// =====================================================
//
// Crie uma classe chamada Animal.
//
// Ela deverá possuir:
//
// - nome
//
//
// Método:
//
// emitirSom()
//
// O método da classe Animal apenas exibe:
//
// "O animal fez um som."
//
// Depois crie:
//
// Cachorro extends Animal
//
// Sobrescreva emitirSom() para mostrar:
//
// "Au Au!"
//
// Depois crie:
//
// Gato extends Animal
//
// Sobrescreva emitirSom() para mostrar:
//
// "Miau!"
//
// Crie um cachorro e um gato e chame emitirSom()
// para cada um.

class Animal {
    constructor (nome) {
        this.nome = nome;        
    }
    emitirSom() {
        console.log("O animal fez um som.");
    }
}

class Cachorro extends Animal {
    constructor (nome) {
        super(nome);
    }    
    emitirSom() {
        console.log("Au au!");
    }
}

class Gato extends Animal {
    constructor (nome) {
        super(nome);            
    }
    emitirSom() {
        console.log("Miau!");
    }
}

const cachorro1 = new Cachorro ("Nala");
const gato1 = new Gato ("Lili");

cachorro1.emitirSom();
gato1.emitirSom();