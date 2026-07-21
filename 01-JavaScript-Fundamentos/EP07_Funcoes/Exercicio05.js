// =====================================================
// EXERCÍCIO 5 - DESAFIO - GUILDA DOS HERÓIS
// =====================================================
//
// Crie um vetor contendo
// quatro objetos.
//
// Cada herói deverá possuir:
//
// - nome
// - classe
// - nivel
//
// Crie uma função chamada mostrarHeroi.
//
// A função deverá receber
// um herói como parâmetro.
//
// Ela deverá exibir:
//
// Nome:
// Classe:
// Nível:
//
// Depois utilize um FOR
// para percorrer o vetor
// chamando a função para
// cada herói.

const herois = [
    {
        nome: "Juban",
        classe: "Tank",
        nivel: 10    
    },
     {
        nome: "Buster",
        classe: "Lutador",
        nivel: 11    
    },
     {
        nome: "Luly",
        classe: "Maga",
        nivel: 12    
    },
     {
        nome: "Muller",
        classe: "Atirador",
        nivel: 13    
    }
];

function mostrarHeroi (herois) {
    console.log("Nome: " + herois.nome);
    console.log("Classe: " + herois.classe);
    console.log("Nivel: " + herois.nivel);
    console.log("==========================");
}

for (let i = 0; i < herois.length; i++) {
    mostrarHeroi(herois[i]);
    
}