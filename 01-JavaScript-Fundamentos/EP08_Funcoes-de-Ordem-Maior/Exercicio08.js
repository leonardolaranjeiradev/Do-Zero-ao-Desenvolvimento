// =====================================================
// EXERCÍCIO 8 - MILAGRES
// =====================================================
//
// Dado o vetor abaixo:
//
// Descubra o total de pessoas impactadas
// pelos milagres.
//

const milagres = [
    { nome: "Transformou água em vinho", pessoas: 150 },
    { nome: "Multiplicação dos pães", pessoas: 5000 },
    { nome: "Cura do cego", pessoas: 1 },
    { nome: "Ressurreição de Lázaro", pessoas: 1 }
];

const totalPessoas = milagres.reduce((total, milagre) => {
    return total + milagre.pessoas;
}, 0);

console.log(totalPessoas);