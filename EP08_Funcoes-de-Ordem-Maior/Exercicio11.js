// =====================================================
// DESAFIO
// =====================================================
//
// Dado o vetor abaixo:
//
// 1 - Exiba todas as pessoas.
// 2 - Crie um NOVO vetor contendo apenas
//     as pessoas convertidas.
// 3 - Crie um NOVO vetor contendo apenas
//     os nomes.
// 4 - Descubra a soma de todas as idades.
//
// Regras:
//
// - Não utilize for.
// - Não utilize while.
// - Resolva cada item separadamente.
//

const pessoas = [
    { nome: "Pedro", idade: 35, convertido: true },
    { nome: "Paulo", idade: 50, convertido: true },
    { nome: "Judas", idade: 40, convertido: false },
    { nome: "João", idade: 30, convertido: true },
    { nome: "Tomé", idade: 32, convertido: true }
];

console.log("============================ 1º ============================");
pessoas.forEach(pessoa => {
    console.log(pessoa);
});

console.log("============================================================");

console.log("============================ 2º ============================");

const convertidos = pessoas.filter(pessoa => {
    return pessoa.convertido === true;
});

console.log(convertidos);

console.log("============================================================");

console.log("============================ 3º ============================");

const nomes = pessoas.map(pessoa =>{
    return pessoa.nome;
});

console.log(nomes);
console.log("============================================================");

console.log("============================ 4º ============================");

const somaIdades = pessoas.reduce((total, pessoa) => {
    return total + pessoa.idade;
}, 0);

console.log(somaIdades);
console.log("============================================================");