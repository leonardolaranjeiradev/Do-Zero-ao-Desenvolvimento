// =====================================================
// EXERCÍCIO 9 - EVANGELHOS
// =====================================================
//
// Dado o vetor abaixo:
//
// Crie um NOVO vetor contendo apenas
// a quantidade de capítulos.
//

const evangelhos = [
    { nome: "Mateus", capitulos: 28 },
    { nome: "Marcos", capitulos: 16 },
    { nome: "Lucas", capitulos: 24 },
    { nome: "João", capitulos: 21 }
];

const quantidadeCapitulos = evangelhos.map(evangelho =>{
    return evangelho.capitulos;
});

console.log(quantidadeCapitulos);
