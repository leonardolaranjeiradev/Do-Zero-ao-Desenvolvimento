//Exercício 5 - Academia

//Uma pessoa possui:
//Peso = 92 kg
//Altura = 1.83 m

//Calcule o IMC.

//Fórmula:
//peso / altura²

//Mostre:

//Peso:
//Altura:
//IMC:

let peso = 92;
let altura = 1.83;
let imc = peso / (altura ** 2);

console.log("Peso: " + peso + "kg");
console.log("Altura: " + altura + "m");
console.log("IMC: " + imc.toFixed(2));