// =====================================================
// EXERCÍCIO 11 - HERÓI LENDÁRIO
// =====================================================
//
// Crie um objeto chamado heroi.
//
// O objeto deverá possuir:
//
// - nome
// - ataque
//
// Caso o ataque seja maior ou igual a 80,
// informe:
//
// "Ataque Lendário"
//
// Caso contrário:
//
// "Ataque comum."

const heroi = {
    nome: "Leron",
    ataque: 113
}

if (heroi.ataque >= 80) {
    console.log("Ataque Lendário");
} else {
    console.log("Ataque comum")
}