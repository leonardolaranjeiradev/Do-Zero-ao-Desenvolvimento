// =====================================================
// EXERCÍCIO 13 - DESAFIO
// =====================================================
// Crie um vetor contendo cinco objetos.//
// Cada objeto deverá representar um Pokémon.//
// Cada Pokémon deverá possuir:
//
// - nome
// - tipo
// - nivel
// - hp
//
// Depois:
//
// - exiba o nome do primeiro;
// - exiba o tipo do terceiro;
// - exiba o HP do último;
//
// Em seguida://
// Verifique apenas o primeiro Pokémon.//
// Caso seu HP seja menor que 20,
// informe://
// "Precisa ser levado ao Centro Pokémon."
// Caso contrário://
// "Está pronto para a próxima batalha."

const pokemons = [
    {
        nome: "Blaziken",
        tipo: "Fogo/Lutador",
        nivel: 42,
        hp: 50
    },
    {
        nome: "Pikachu",
        tipo: "Eletrico",
        nivel: 41,
        hp: 42
    }, 
    {
        nome: "Gengar",
        tipo: "Fantasma",
        nivel: 47,
        hp: 50
    },
    {
        nome: "Rayquaza",
        tipo: "Eletrico/Voador",
        nivel: 70,
        hp: 65
    },
     {
        nome: "Hitmonlee",
        tipo: "Lutador",
        nivel: 42,
        hp: 40
    }

]
//
// Em seguida://
// Verifique apenas o primeiro Pokémon.//
// Caso seu HP seja menor que 20,
// informe://
// "Precisa ser levado ao Centro Pokémon."
// Caso contrário://
// "Está pronto para a próxima batalha."

console.log("O NOME do primeiro Pokémon é: " + pokemons[0].nome);
console.log("O TIPO do terceiro Pokémon é: " + pokemons[2].tipo);
console.log("O HP do primeiro Pokémon é: " + pokemons[4].hp);

if (pokemons[0].hp < 20) {
    console.log("Precisa ser levado ao Cento Pokémon");    
} else {
    console.log("Está pronto para a próxima batalha.");
}
