// =====================================================
// EXERCÍCIO 6 - POKÉMON
// =====================================================
//
// Crie um objeto chamado pokemon.
//
// Ele deverá possuir:
//
// - nome
// - tipo
// - hp
//
// Caso o HP seja menor que 30,
// informe que o Pokémon está em perigo.
//
// Caso contrário,
// informe que ele pode continuar batalhando.

const pokemon = {
    nome: "Garchomp",
    tipo: "Dragão",
    hp: 88
};

if(pokemon.hp < 30) {
    console.log("Pokémon está em perigo")
}else{
    console.log("Seu hp está longe de perigo, pode continuar batalhando")
};