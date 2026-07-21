// =====================================================
// EXERCÍCIO 6 - GUILDA DOS HERÓIS
// =====================================================
//
// Crie um vetor contendo
// cinco objetos.
//
// Cada herói deverá possuir:
//
// - nome
// - classe
// - nivel
//
// Utilize um FOR tradicional
// para exibir a ficha completa
// de todos os heróis.

let herois = [
    {
        nome: "Piter",
        classe: "Arqueiro",
        nivel: 10
    },
    {
        nome: "Robert",
        classe: "Mago",
        nivel: 11
    },
    {
        nome: "Lucca",
        classe: "Guerreiro",
        nivel: 12
    },
    {
        nome: "Jefrey",
        classe: "Clerigo",
        nivel: 13
    },
    {
        nome: "London",
        classe: "Paladino",
        nivel: 14
    }
];

for (let i = 0; i < herois.length; i++) {
    console.log("Nome: " + herois[i].nome);
    console.log("Classe: " + herois[i].classe);
    console.log("Nível: " + herois[i].nivel);
    console.log("======================");
}