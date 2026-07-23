// =====================================================
// EXERCÍCIO 10 - DESAFIO FINAL
// =====================================================
//
// Crie uma classe chamada Veiculo.
//
// Ela deverá possuir:
//
// - modelo
// - combustivel
// - consumo (km por litro)
//
// Implemente métodos para:
//
// - abastecer.
// - dirigir.
// - exibir o estado atual.
//
// Regras:
//
// - Ao dirigir, o combustível deverá ser
//   consumido de acordo com o consumo do veículo.
// - Não permitir viagens quando
//   não houver combustível suficiente.
//
// -----------------------------------------------------
//
// Depois crie uma classe:
//
// CarroEletrico extends Veiculo
//
// Ela deverá possuir:
//
// - bateria (0 a 100)
//
// Sobrescreva o método dirigir().
//
// Regras:
//
// - O veículo deverá utilizar primeiro
//   a bateria.
// - Quando ela acabar,
//   deverá utilizar combustível.
// - Caso não exista bateria nem combustível,
//   a viagem não poderá ser realizada.
//
// Teste diferentes situações,
// incluindo bateria cheia,
// bateria vazia,
// combustível insuficiente
// e ambos esgotados.


class Veiculo {
    constructor(modelo, combustivel, consumo) {
        this.modelo = modelo;
        this.combustivel = combustivel;
        this.consumo = consumo;
    }

    abastecer(gasolina) {
        this.combustivel += gasolina;
        console.log(`O veículo foi abastecido.`);
    }

    dirigir(distancia) {
        let resultado = distancia / this.consumo;

        if (resultado > this.combustivel) {
            console.log(`Para essa viagem é necessário um total de ${resultado}L de combustível. Abasteça antes de viajar!`);
        } else {
            this.combustivel -= resultado;
            console.log(`Você chegou ao seu destino e está com ${this.combustivel.toFixed(2)}L de combustível.`);
        }
    }

    exibirEstadoAtual() {
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Combustível: $this.combustivel}L`);
        console.log(`Consumo: ${this.consumo} KM/L`);
    }
}

class CarroHibrido extends Veiculo {
    constructor(modelo, combustivel, consumo, bateria) {
        super(modelo, combustivel, consumo);
        this.bateria = bateria;
    }

    dirigir(distancia) {

        let consumoCombustivel = distancia / this.consumo;
        let bateriaNecessaria = distancia;

        // A bateria faz toda a viagem
        if (bateriaNecessaria <= this.bateria) {

            this.bateria -= bateriaNecessaria;

            console.log(`Você chegou ao seu destino utilizando apenas a bateria.`);
            console.log(`Bateria restante: ${this.bateria}%`);

        } else {

            // Usa toda a bateria primeiro
            let distanciaRestante = distancia - this.bateria;

            this.bateria = 0;

            consumoCombustivel = distanciaRestante / this.consumo;

            if (consumoCombustivel <= this.combustivel) {

                this.combustivel -= consumoCombustivel;

                console.log(`A bateria acabou durante a viagem.`);
                console.log(`O restante foi percorrido utilizando combustível.`);
                console.log(`Combustível restante: ${this.combustivel}L`);

            } else {

                console.log("Não há bateria nem combustível suficiente para realizar a viagem.");

            }
        }
    }

    exibirEstadoAtual() {
        super.exibirEstadoAtual();
        console.log(`Bateria: ${this.bateria}%`);
        console.log("=============================");
    }
}

const carro1 = new CarroHibrido("Toyota", 200, 16, 100);
const carro2 = new CarroHibrido("Fiat", 150, 12, 30);
const carro3 = new CarroHibrido("Nissan", 100, 20, 87);

carro1.exibirEstadoAtual();
carro2.exibirEstadoAtual();
carro3.exibirEstadoAtual();

carro1.dirigir(5);
carro2.dirigir(50);
carro3.dirigir(100);

carro1.exibirEstadoAtual();
carro2.exibirEstadoAtual();
carro3.exibirEstadoAtual();
