// =====================================================
// EXERCÍCIO 3 - CANIL
// =====================================================
//
// Uma clínica veterinária cadastrou 5 raças de
// cachorro em seu sistema.
//
// Após o cadastro, foi informado que uma das raças foi
// registrada incorretamente.
//
// Altere apenas a raça incorreta por outra de sua escolha
// e, em seguida, exiba todas as raças armazenadas no vetor.

let racasDeCachorro = ["Dalmata", "Spitz Alemão", "West Terrier", "Jack Russel", "Schnauzer"];
console.log("Raças cadastradas: " + racasDeCachorro);
console.log("============================");

console.log("Raça de cachorro " + racasDeCachorro[3] + " foi cadastrada incorretamente, alterar para Doberman");
console.log("============================");
racasDeCachorro[3] = "Doberman";

console.log("Cadastros alterados para: " + racasDeCachorro);
console.log("============================");

