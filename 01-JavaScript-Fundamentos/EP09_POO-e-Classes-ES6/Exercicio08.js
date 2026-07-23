// =====================================================
// EXERCÍCIO 8 - SISTEMA DE FUNCIONÁRIOS
// =====================================================
//
// Crie uma classe chamada Funcionario.
//
// Ela deverá possuir:
//
// - nome
// - salario
//
// Implemente métodos para:
//
// - aumentar o salário.
// - exibir os dados do funcionário.
//
// -----------------------------------------------------
//
// Em seguida, crie uma classe:
//
// Gerente extends Funcionario
//
// Ela deverá possuir:
//
// - bonus
//
// Ao exibir os dados,
// o gerente deverá apresentar também
// o bônus e sua remuneração total.
//
// Faça testes alterando o salário
// e exibindo as informações.


class Funcionario {
    constructor (nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    aumentarSalario (valor) {
        this.salario += valor;
        console.log(`Salário do(a) ${this.nome} aumentado em R$${valor},00`);
    }

    exibirDados () {
        console.log("===== Dados do Funcionario =====");
        console.log(`Nome: ${this.nome}`);
        console.log(`Salário: R$${this.salario},00`);
    }
}

class Gerente extends Funcionario {
    constructor (nome, salario, bonus) {
        super(nome, salario);
        this.bonus = bonus;
    }

    exibirDados () {
        super.exibirDados ();
        console.log(`Bonus: R$${this.bonus},00`);
        console.log(`Remuneração Total: R$${this.bonus + this.salario},00`);
        console.log("================================");
        
    }
}

const gerente1 = new Gerente ("Leonardo", 10000, 3000);
const gerente2 = new Gerente ("Karolina", 25000, 5000);

gerente1.exibirDados();
gerente2.exibirDados();

gerente1.aumentarSalario(50000);
gerente2.aumentarSalario(65000);

gerente1.exibirDados();
gerente2.exibirDados();


