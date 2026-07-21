// =====================================================
// EXERCÍCIO 14 - FUNCIONÁRIOS
// =====================================================
//
// Crie um vetor contendo
// cinco objetos.
//
// Cada funcionário deverá possuir:
//
// - nome
// - cargo
// - salario
//
// Utilize um FOR tradicional
// para exibir a ficha de
// todos os funcionários.

let funcionarios = [
    {
        nome: "Pedro",
        cargo: "Recepcionista",
        salario: 2000
    },
    {
        nome: "João",
        cargo: "RH",
        salario: 5000
    },
    {
        nome: "Thiago",
        cargo: "Qualidade",
        salario: 4100
    },
    {
        nome: "Matheus",
        cargo: "Contabilidade",
        salario: 10000
    },
    {
        nome: "Felipe",
        cargo: "Vendedor",
        salario: 3000
    }
];
console.log("======== FUNCIONÁRIOS ========");
for (let i = 0; i < funcionarios.length; i++) {
    console.log("Nome: " + funcionarios[i].nome);
    console.log("Cargo: " + funcionarios[i].cargo);
    console.log("Salário: " + funcionarios[i].salario);
    console.log("==============================");
}