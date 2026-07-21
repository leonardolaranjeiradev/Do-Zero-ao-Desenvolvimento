//Exercício 1 - Cadastro de Funcionário
//Crie variáveis para armazenar:

//Nome
//Idade
//Cargo
//Salário

//Depois mostre exatamente neste formato:

//===== FUNCIONÁRIO =====

//Nome: João
//Idade: 28 anos
//Cargo: Desenvolvedor
//Salário: R$ 4200

//Utilize Template Strings.

let nome = "Leonardo";
let idade = 30;
let cargo = "Dev Junior";
let salario = 9000;

console.log("========== FUNCIONARIO ==========");
console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade} anos`);
console.log(`Cargo: ${cargo}`);
console.log(`Salário: R$ ${salario}`);