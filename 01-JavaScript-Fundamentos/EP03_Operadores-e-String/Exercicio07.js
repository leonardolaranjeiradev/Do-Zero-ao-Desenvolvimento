//Exercício 7 - Sistema Bancário

//Saldo inicial:
//2500

//Depois faça as operações:

//depósito de 780
//saque de 320
//depósito de 150
//saque de 80

//Utilize operadores de atribuição (+= e -=).

//No final mostre:

//Saldo inicial:
//Depósito:
//Saque:
//Saldo final:

let saldoInicial = 2500;
let deposito = 780 + 150;
let saque = 80 + 320;
let saldoFinal = saldoInicial;

saldoFinal += 780;
saldoFinal -= 320;
saldoFinal += 150;
saldoFinal -= 80;

console.log("Saldo inicial: R$" + saldoInicial);
console.log("Depósito: +R$" + deposito);
console.log("Saque: -R$" + saque);
console.log("Saldo Final: R$" + saldoFinal);
