// =====================================================
// EXERCÍCIO 14 - DESAFIO RPG
// =====================================================
//
// Crie um objeto chamado personagem.//
// Ele deverá possuir://
// - nome
// - classe
// - nivel
// - vida
// - mana
// - ataque
// - defesa
// - ouro
//
// Depois simule:
//
// - encontrou 300 moedas;
// - comprou uma espada por 180;
// - recuperou 25 de vida;
// - evoluiu um nível.
//
// Após todas as alterações,
// verifique:
//
// Caso o nível seja maior ou igual a 10,
// informe:
//
// "Personagem experiente."
//
// Caso contrário:
//
// "Personagem inicando sua jornada."


let personagem = {
    nome: "Tiron",
    classe: "Guerreiro",
    nivel: 58,
    vida: 115,
    mana: 40,
    ataque: 257,
    defesa: 210,
    ouro: 122
}

personagem.ouro += 300;
personagem.ouro -= 180;
personagem.vida += 25;
personagem.nivel ++;

if(personagem.nivel >= 10) {
    console.log("Personagem experiente.");
} else {
    console.log("Personagem inicando sua jornada.");
}

