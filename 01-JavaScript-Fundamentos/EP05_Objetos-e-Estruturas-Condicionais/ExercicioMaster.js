// =====================================================
// EXERCÍCIO  MASTER - CLASSE DO HERÓI (SWITCH)
// =====================================================
//
// Crie um objeto chamado personagem.
//
// O objeto deverá possuir:
//
// - nome
// - classe
//
// A propriedade "classe" poderá possuir um dos
// seguintes valores:
//
// - Guerreiro
// - Mago
// - Arqueiro
// - Druida
//
// Utilizando apenas switch, exiba:
//
// Guerreiro:
// "Especialista em combate corpo a corpo."
//
// Mago:
// "Domina poderosas magias."
//
// Arqueiro:
// "Especialista em ataques à distância."
//
// Druida:
// "Controla os poderes da natureza."
//
// Caso a classe seja diferente das opções acima,
// informe:
//
// "Classe desconhecida."

const personagem = {
    nome: "Koba",
    classe: "Guerreiro"
}

switch (personagem.classe) {
    case "Guerreiro":
        console.log("Guerreiro: Especialista em combate corpo a corpo.");
        break;
    case "Mago":
        console.log("Mago: Domina poderosas magias.");
        break;
    case "Arqueiro":
        console.log("Arqueiro: Especialista em ataques à distância.");
        break;
    case "Druida":
        console.log("Druida: Controla os poderes da natureza.");
        break;
    default:
        console.log("Classe desconhecida.");
   
};