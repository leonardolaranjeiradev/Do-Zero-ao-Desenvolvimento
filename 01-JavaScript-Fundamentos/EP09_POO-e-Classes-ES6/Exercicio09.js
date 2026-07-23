// =====================================================
// EXERCÍCIO 9 - PET VIRTUAL
// =====================================================
//
// Crie uma classe chamada Animal.
//
// Ela deverá possuir:
//
// - nome
// - fome
//
// Implemente métodos que permitam:
//
// - alimentar.
// - brincar.
// - exibir o estado atual.
//
// Regras:
//
// - Alimentar reduz a fome.
// - Brincar aumenta a fome.
// - O nível de fome nunca poderá ser
//   menor que 0 nem maior que 100.
//
// -----------------------------------------------------
//
// Depois crie uma classe:
//
// Cachorro extends Animal
//
// Ela deverá possuir:
//
// - raca
//
// Sobrescreva o método responsável
// por exibir o estado do animal.
//
// Faça diversos testes simulando
// alimentação e brincadeiras.

class Animal {
    constructor (nome, fome) {
        this.nome = nome;
        this.fome = fome;
    }

    alimentar (alimento) {
       let calcularFome = this.fome - alimento;
       if (calcularFome <= 0) {
            this.fome = 0;
            console.log(`O ${this.nome} está sem fome. Vá brincar!`);            
       } else {
            this.fome -= alimento;
            console.log(`O ${this.nome} foi alimentado e está com ${this.fome}% de fome.`);
       }
                
    }
    brincar (gastoDeEnergia) {
        let calcularGasto = this.fome + gastoDeEnergia;
        if (calcularGasto >= 100) {
            this.fome = 100;
            console.log(`O ${this.nome} está faminto, vá alimenta-lo!!!`);            
        } else {
            this.fome += gastoDeEnergia;
            console.log(`O ${this.nome} acabou de brincar e gastou ${gastoDeEnergia} de energia. Sua fome atual é de ${this.fome}%.`);
        }        
    }   
    exibirEstadoAtual () {        
        console.log(`Nome: ${this.nome}`);
        console.log(`Fome: ${this.fome}%`);
    }
}

class Cachorro extends Animal {
    constructor (nome, fome, raca) {
        super(nome, fome);
        this.raca = raca;
    }

    exibirEstadoAtual () {
        super.exibirEstadoAtual();
        console.log(`Raça: ${this.raca}`);
    }
}

const cachorro1 = new Cachorro("Iron", 100, "Dalmáta");

cachorro1.exibirEstadoAtual();
cachorro1.alimentar(10);
cachorro1.brincar(50);
cachorro1.alimentar(80);
cachorro1.brincar(50);