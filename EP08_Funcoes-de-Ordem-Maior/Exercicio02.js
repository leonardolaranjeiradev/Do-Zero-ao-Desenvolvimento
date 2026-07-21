// =====================================================
// EXERCÍCIO 2 - PATRIARCAS
// =====================================================
//
// Dado o vetor abaixo:
//
// Crie um NOVO vetor contendo apenas as idades
// dos patriarcas.
//

const patriarcas = [
    { nome: "Abraão", idade: 175 },
    { nome: "Isaque", idade: 180 },
    { nome: "Jacó", idade: 147 },
    { nome: "José", idade: 110 }
];

const idades = patriarcas.map (patriarca => {
    return patriarca.idade;
});

console.log(idades);