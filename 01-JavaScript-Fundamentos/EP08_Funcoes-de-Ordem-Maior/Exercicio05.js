// =====================================================
// EXERCÍCIO 5 - PROFETAS
// =====================================================
//
// Dado o vetor abaixo:
//
// Crie um NOVO vetor contendo apenas os nomes
// dos profetas.
//

const profetas = [
    { nome: "Isaías", livros: 66 },
    { nome: "Jeremias", livros: 52 },
    { nome: "Ezequiel", livros: 48 },
    { nome: "Daniel", livros: 12 }
];

const nomesProfetas = profetas.map (profeta => {
    return profeta.nome;
});

console.log(nomesProfetas);