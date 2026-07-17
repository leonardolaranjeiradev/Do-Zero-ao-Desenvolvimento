// =====================================================
// EXERCÍCIO 7 - VETOR DE OBJETOS
// =====================================================
//
// Crie um vetor contendo três objetos.
//
// Cada objeto deverá representar um cachorro.
//
// Cada cachorro deve possuir:
//
// - nome
// - raca
// - idade
//
// Depois exiba:
//
// - o nome do primeiro cachorro;
// - a raça do segundo;
// - a idade do terceiro.

const pets = [
    pet1 = {
        nome: "Iron",
        raca: "Dálmata",
        idade: 7
    },
    pet2 = {
        nome: "Nala",
        raca: "SRD",
        idade: 6
    },
    pet3 = {
        nome: "Bento",
        raca: "Spitz Alemão",
        idade: 4
    }
];

console.log("O nome do primeiro cachorro é: " + pets[0].nome);
console.log("A raça do segundo cachorro é: " + pets[1].raca);
console.log("A idade do terceiro cachorro é: " + pets[2].idade);