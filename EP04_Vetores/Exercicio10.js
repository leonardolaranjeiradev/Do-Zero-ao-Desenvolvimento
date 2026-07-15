// =====================================================
// EXERCÍCIO 10 - GUILDA DOS HERÓIS
// =====================================================
//
// Você foi contratado para desenvolver o sistema de
// cadastro de uma guilda de aventureiros.
//
// Crie um vetor contendo 8 heróis.
//
// Depois:
//
// - substitua dois heróis por novos membros;
// - exiba o primeiro integrante da guilda;
// - exiba o último integrante;
// - informe quantos heróis existem cadastrados;
// - apresente a lista completa dos integrantes da guilda.

let guilda = ["Finn", "Nereia", "Koba", "Dom", "Piter", "Galetto", "Terissa", "Anuki"];

guilda[3] = "Gordon";
guilda[7] = "Akihito";

console.log("O primeiro integrante da guilda é o(a) " + guilda[0]);
console.log("O último integrante da guilda é o(a) " + guilda[7]);
console.log("Existem um total de " + guilda.length + " heróis cadastrados na guilda.");
console.log("E esses são todos os integrantes da guilda: " + guilda);