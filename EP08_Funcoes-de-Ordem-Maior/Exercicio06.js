// =====================================================
// EXERCÍCIO 6 - PERSONAGENS BÍBLICOS
// =====================================================
//
// Dado o vetor abaixo:
//
// Crie um NOVO vetor contendo apenas os personagens
// que viveram mais de 150 anos.
//

const personagens = [
    { nome: "Moisés", idade: 120 },
    { nome: "Josué", idade: 110 },
    { nome: "Samuel", idade: 98 },
    { nome: "Noé", idade: 950 },
    { nome: "Abraão", idade: 175 }
];

const viveramMais = personagens.filter(personagem => {
    return personagem.idade > 150;
});

console.log(viveramMais);