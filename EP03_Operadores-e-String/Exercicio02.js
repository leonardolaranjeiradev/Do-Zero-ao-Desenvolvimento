//Exercício 2 - Calculadora de Salário
//Um funcionário ganha R$ 3.500.
//Ele recebeu:

//aumento de 15%
//desconto de R$ 280

//Calcule:

//salário após aumento
//salário final

//Mostre:

//Salário inicial:
//Aumento:
//Salário após aumento:
//Desconto:
//Salário final:

let salarioInicial = 3500;
let aumento = salarioInicial * 0.15;
let salarioComAumento = salarioInicial + aumento;
let desconto = 280;
let salarioFinal = salarioComAumento - desconto;

console.log(`Salário inicial: R$ ${salarioInicial}`);
console.log(`Aumento: R$ ${aumento}`);
console.log(`Salário após aumento: R$ ${salarioComAumento}`);
console.log(`Desconto: R$ ${desconto}`);
console.log(`Salário final: R$ ${salarioFinal}`);   

