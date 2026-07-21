// =====================================================
// DESAFIO - SISTEMA DE RPG
// =====================================================
//
// Crie um único vetor para armazenar todas as informações
// de um personagem.
//
// O vetor deve conter:
//
// - Nome
// - Classe
// - Nível
// - Vida
// - Mana
// - Ataque
// - Defesa
// - Ouro
// - Arma equipada
// - Armadura equipada
//
// Após criar o personagem, simule os seguintes acontecimentos:
//
// - O personagem encontrou uma arma melhor e a equipou.
// - Comprou uma nova armadura.
// - Recebeu uma recompensa em ouro.
// - Gastou parte desse ouro em uma loja.
// - Recuperou parte da vida após descansar.
// - Evoluiu um nível.
//
// Ao final, apresente uma ficha completa contendo todas
// as informações atualizadas do personagem.

let personagem = ["Leonardo", "Druída", 7, 25, 40, 37, 26, 215, "Cajado de Madeira", "Armadura Leve"];

console.log("O " + personagem[0] + " encontrou um Cajado melhor e a equipou");
personagem[8] = "Cajado da Natureza";
console.log("Comprou uma nova armadura que custou 113 moedas");
personagem[9] = "Armadura de Couro";
personagem[7] = 102;
console.log("Recebeu uma recompensa de 550 em moedas ouro");
personagem[7] += 550;
console.log("Gastou parte desse ouro em uma loja");
personagem[7] -= 325;
console.log("Recuperou parte da vida após descansar");
personagem[3] += 10;
console.log("Evoluiu um nível");
personagem[2] ++;

console.log("======================= FICHA DO PERSONAGEM =======================");
console.log("Nome: " + personagem[0]);
console.log("Classe: " + personagem[1]);
console.log("Nível: " + personagem[2]);
console.log("Vida: " + personagem[3]);
console.log("Mana: " + personagem[4]);
console.log("Ataque: " + personagem[5]);
console.log("Defesa: " + personagem[6]);
console.log("Ouro: " + personagem[7]);
console.log("Arma Equipada: " + personagem[8]);
console.log("Armadura Equipada: " + personagem[9]);
console.log("===================================================================");

