// =====================================================
// EXERCÍCIO 12 - CASA DE RAÇÃO
// =====================================================
//
// Crie um vetor contendo
// seis objetos.
//
// Cada objeto representa
// uma ração.
//
// Cada ração deverá possuir:
//
// - nome
// - peso
// - preco
//
// Utilize FOR para
// exibir todas as informações.

const racoes = [
    {
        nome: "Golden",
        peso: 20,
        preco: 169
    },
      {
        nome: "Origens",
        peso: 20,
        preco: 148
    },
     {
        nome: "Formula Natural",
        peso: 10,
        preco: 292
    },
      {
        nome: "Premier",
        peso: 10,
        preco: 212
    },
     {
        nome: "ND",
        peso: 10,
        preco: 490
    },
      {
        nome: "Gran Plus",
        peso: 15,
        preco: 179
    }
];

for (let i = 0; i < racoes.length; i++) {
    console.log(racoes[i]);
}