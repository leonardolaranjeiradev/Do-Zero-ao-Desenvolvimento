//Exercício 10 - Mini Holerite
//Um funcionário recebe:
//Salário bruto:
//4800
//Descontos:
//INSS = 11%
//Vale Transporte = 6%
//Plano de Saúde = R$ 180
//Calcule:

//valor do INSS
//valor do VT
//total de descontos
//salário líquido

//Mostre um relatório bonito:

//========== HOLERITE ==========

//Salário Bruto:
//INSS:
//Vale Transporte:
//Plano de Saúde:
//Total de Descontos:
//Salário Líquido:

let salarioBruto = 4800;
let inss = salarioBruto * 0.11;
let valeTransporte = salarioBruto * 0.06;
let planoDeSaude = 180;

let totalDescontos = inss + valeTransporte + planoDeSaude;
let salarioLiquido = salarioBruto - totalDescontos;

console.log("========== HOLERITE ==========");
console.log("Salário Bruto: R$" + salarioBruto.toFixed(2));
console.log("INSS: R$" + inss.toFixed(2));
console.log("Vale Transporte: R$" + valeTransporte.toFixed(2));
console.log("Plano de Saúde: R$" + planoDeSaude.toFixed(2));
console.log("Total de Descontos: -R$" + totalDescontos.toFixed(2));
console.log("Salário Líquido: R$" + salarioLiquido.toFixed(2));
console.log("==============================");