// =====================================================
// EXERCÍCIO 10 - CARTAS DE PAULO
// =====================================================
//
// Dado o vetor abaixo:
//
// Descubra o total de capítulos
// escritos nessas cartas.
//

const cartas = [
    { nome: "Romanos", capitulos: 16 },
    { nome: "1 Coríntios", capitulos: 16 },
    { nome: "Efésios", capitulos: 6 },
    { nome: "Filipenses", capitulos: 4 },
    { nome: "Colossenses", capitulos: 4 }
];

const totalCapitulos = cartas.reduce((total, carta) => {
    return total + carta.capitulos;
}, 0);

console.log(totalCapitulos);