// =====================================================
// EXERCÍCIO 10 - APROVAÇÃO
// =====================================================
//
// Crie um objeto chamado aluno.
//
// Ele deverá possuir:
//
// - nome
// - nota
//
// Caso a nota seja maior ou igual a 7,
// informe que o aluno foi aprovado.
//
// Caso contrário,
// informe que foi reprovado.


const aluno = {
    nome: "João",
    nota: 3
};

if (aluno.nota >= 7) {
    console.log("Aluno aprovado");
} else {
    console.log("Aluno reprovado");
}