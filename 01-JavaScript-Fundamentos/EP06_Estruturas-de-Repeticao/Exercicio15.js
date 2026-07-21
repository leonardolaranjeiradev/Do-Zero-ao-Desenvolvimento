// =====================================================
// EXERCÍCIO 15 - DESAFIO MASTER - ARENA RPG
// =====================================================
//
// Crie um vetor contendo
// oito personagens.
//
// Cada personagem deverá possuir:
//
// - nome
// - classe
// - nivel
// - vida
//
// Utilize um FOR tradicional.
//
// Para cada personagem:
//
// Exiba sua ficha.
//
// Depois:
//
// Caso a vida seja maior
// que zero:
//
// Informe:
//
// "Está pronto para batalha."
//
// Caso contrário:
//
// Informe:
//
// "Foi derrotado."
//
// Ao final do FOR
// exiba:
//
// "Todos os personagens foram analisados."

let personagens = [
    {
        nome: "Badang",
        classe: "Lutador",
        nivel: 15,
        vida: 80
    },
      {
        nome: "Argus",
        classe: "Assassino",
        nivel: 6,
        vida: 20
    },
      {
        nome: "Lesley",
        classe: "Atiradora",
        nivel: 15,
        vida: 40
    },
      {
        nome: "Franco",
        classe: "Suporte",
        nivel: 14,
        vida: 100
    },
      {
        nome: "Grock",
        classe: "Tank",
        nivel: 15,
        vida: 120
    },
      {
        nome: "Angela",
        classe: "Suporte",
        nivel: 12,
        vida: 0
    },
      {
        nome: "Layla",
        classe: "Atiradora",
        nivel: 13,
        vida: 0
    },
      {
        nome: "Pharsa",
        classe: "Maga",
        nivel: 14,
        vida: 45
    }
]
console.log("===== PERSONAGENS =====")
for (let i = 0; i < personagens.length; i++) {
    console.log("Nome: " + personagens[i].nome);
    console.log("Classe: " + personagens[i].classe);
    console.log("Nível: " + personagens[i].nivel);
    if (personagens[i].vida > 0) {
        console.log("Está pronto para batalha.");
    } else {
        console.log("Foi derrotado.");
    }

    console.log("=======================");
}

console.log("Todos os personagens foram analisados.");