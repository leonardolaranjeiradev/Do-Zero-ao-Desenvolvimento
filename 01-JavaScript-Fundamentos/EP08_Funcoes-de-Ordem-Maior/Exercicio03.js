// =====================================================
// EXERCÍCIO 3 - DISCÍPULOS
// =====================================================
//
// Dado o vetor abaixo:
//
// Crie um NOVO vetor contendo apenas os discípulos
// que eram pescadores.
//

const discipulos = [
    { nome: "Pedro", pescador: true },
    { nome: "Mateus", pescador: false },
    { nome: "André", pescador: true },
    { nome: "João", pescador: true },
    { nome: "Tomé", pescador: false }
];

const pescadores = discipulos.filter(discipulo => {
    return discipulo.pescador === true;
});

console.log(pescadores);
