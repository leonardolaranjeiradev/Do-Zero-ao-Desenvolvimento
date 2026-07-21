// =====================================================
// EXERCÍCIO 1 - REIS DE ISRAEL
// =====================================================
//
// Dado o vetor abaixo:
//
// Exiba no console uma frase para cada rei no formato:
//
// "Davi reinou por 40 anos."
//

const reis = [
    { nome: "Saul", anosDeReinado: 40 },
    { nome: "Davi", anosDeReinado: 40 },
    { nome: "Salomão", anosDeReinado: 40 },
    { nome: "Ezequias", anosDeReinado: 29 },
    { nome: "Josias", anosDeReinado: 31 }
];

reis.forEach(rei =>  {
    console.log(rei.nome + " reinou por " + rei.anosDeReinado + " anos.");
});