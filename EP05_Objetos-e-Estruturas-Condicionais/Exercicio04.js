// =====================================================
// EXERCÍCIO 4 - SISTEMA DE VIDA
// =====================================================
//
// Crie um objeto chamado inimigo.
//
// Ele deverá possuir:
//
// - nome
// - vida
//
// Caso a vida seja maior que zero,
// informe que o inimigo ainda está vivo.
//
// Caso contrário,
// informe que o inimigo foi derrotado.

const inimigo = {
    nome: "Terissa",
    vida: 152
};

if (inimigo.vida > 0) {
    console.log("Inimigo ainda está vivo")
} else {
    console.log("Inimigo foi derrotado!!")
};