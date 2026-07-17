// =====================================================
// EXERCÍCIO 8 - GUILDA
// =====================================================
//
// Crie um vetor contendo quatro objetos.
//
// Cada objeto representa um herói.
//
// Cada herói deve possuir:
//
// - nome
// - classe
// - nivel
//
// Depois apresente uma ficha de cada herói
// utilizando apenas os dados armazenados.

const herois = [
    {
        nome: "Dilan",
        classe: "Mago",
        nivel: 13
    },
     {
        nome: "Leni",
        classe: "Druida",
        nivel: 17
    },
     {
        nome: "Roilda",
        classe: "Clerigo",
        nivel: 12
    },
     {
        nome: "Roni",
        classe: "Paladino",
        nivel: 21
    }
];

console.log("============ HERÓIS ============");
console.log("Nome: " + herois[0].nome);
console.log("Classe: " + herois[0].classe);
console.log("Nível: " + herois[0].nivel);
console.log();
console.log("Nome: " + herois[1].nome);
console.log("Classe: " + herois[1].classe);
console.log("Nível: " + herois[1].nivel);
console.log();
console.log("Nome: " + herois[2].nome);
console.log("Classe: " + herois[2].classe);
console.log("Nível: " + herois[2].nivel);
console.log();
console.log("Nome: " + herois[3].nome);
console.log("Classe: " + herois[3].classe);
console.log("Nível: " + herois[3].nivel);
console.log("================================");
