// =====================================================
// EXERCÍCIO 5 - DESAFIO FINAL
// =====================================================
//
// Crie uma classe chamada ContaBancaria.
//
// Ela deverá possuir:
//
// - titular
// - saldo
//
// Métodos:
//
// depositar(valor)
// sacar(valor)
// consultarSaldo()
//
// Regras:
//
// - Não permitir sacar mais do que existe.
// - Caso não haja saldo suficiente,
//   exibir:
//
//   "Saldo insuficiente."
//
// Depois crie uma classe:
//
// ContaPremium extends ContaBancaria
//
// Ela deverá possuir:
//
// - limite
//
// Ao sacar:
//
// Se o saldo acabar,
// ela poderá utilizar o limite.
//
// Utilize super() quando fizer sentido.
//
// Faça uma sequência de depósitos,
// saques e consultas de saldo para testar
// todos os cenários.

class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    consultarSaldo() {
        console.log(`Seu saldo atual é de R$${this.saldo},00`);
    }
}

class ContaPremium extends ContaBancaria {
    constructor(titular, saldo, limite) {
        super(titular, saldo);
        this.limite = limite;
    }

    sacar(valor) {

        // Se o saldo cobre o saque
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }

        // Se não cobre, tenta usar o limite
        else {

            const falta = valor - this.saldo;

            if (this.limite >= falta) {

                this.saldo = 0;
                this.limite -= falta;

                console.log(`Você utilizou R$${falta} do seu limite.`);
            }

            else {
                console.log("Você não possui saldo e limite suficientes para efetuar o saque.");
            }
        }
    }

    consultarSaldo() {
        console.log(`Saldo: R$${this.saldo},00`);
        console.log(`Limite disponível: R$${this.limite},00`);
    }
}

const contaPremium = new ContaPremium("Leonardo", 1500, 350);

contaPremium.consultarSaldo();
contaPremium.sacar(1600);
contaPremium.consultarSaldo();
contaPremium.sacar(200);
contaPremium.consultarSaldo();
contaPremium.depositar(700);
contaPremium.consultarSaldo();