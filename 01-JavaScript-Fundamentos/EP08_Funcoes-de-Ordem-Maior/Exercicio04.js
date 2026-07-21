// =====================================================
// EXERCÍCIO 4 - OFERTAS
// =====================================================
//
// Dado o vetor abaixo:
//
// Descubra qual é o valor total das ofertas.
//

const ofertas = [120, 50, 80, 150, 40, 60];

const valorTotal = ofertas.reduce((total, oferta) => {
    return total + oferta;
}, 0);

console.log(valorTotal);