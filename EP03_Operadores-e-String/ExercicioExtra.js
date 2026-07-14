//Desafio (vale por 3 exercícios)

//Crie uma "Ficha de Personagem" de um jogo RPG.
//O personagem deve possuir:

//Nome
//Classe
//Nível
//Vida
//Mana
//Ataque
//Defesa
//Ouro

//Agora faça os seguintes eventos:
//Encontrou 350 moedas
//Comprou um(a) espada/arco/cajado de 180 moedas
//Recebeu uma armadura (+15 defesa)
//Subiu de nível (+1)
//Ganhou +25 de ataque
//Recuperou 40 de vida
//Gastou 15 de mana

//Depois exiba exatamente neste formato:

//========== PERSONAGEM ==========

//Nome:
//Classe:
//Nível:
//Vida:
//Mana:
//Ataque:
//Defesa:
//Ouro:


let nome = "Finn";
let classe = "Arqueiro";
let nivel = 8;
let vida = 50;
let mana = 15;
let ataque = 22;
let defesa = 13;
let ouro = 72;

console.log("========== PERSONAGEM ==========");
console.log("Nome: " + nome);
console.log("Classe: " + classe);
console.log("Nível: " + nivel);
console.log("Vida: " + vida);
console.log("Mana: " + mana);
console.log("Ataque: " + ataque);
console.log("Defesa: " + defesa);
console.log("Ouro: " + ouro);
console.log("================================");

console.log("Encontrou 350 moedas");
ouro += 350;
console.log("Comprou um arco de 180 moedas");
ouro -= 180;
console.log("Recebeu uma armadura (+15 defesa)")
defesa += 15;
console.log("Subiu de nível (+1)");
nivel ++;
console.log("Ganhou +25 de ataque");
ataque += 25;
console.log("Recuperou 40 de vida");
vida += 40;
console.log("Gastou 15 de mana");
mana -= 15;

console.log("========== PERSONAGEM ==========");
console.log("Nome: " + nome);
console.log("Classe: " + classe);
console.log("Nível: " + nivel);
console.log("Vida: " + vida);
console.log("Mana: " + mana);
console.log("Ataque: " + ataque);
console.log("Defesa: " + defesa);
console.log("Ouro: " + ouro);
console.log("================================");




