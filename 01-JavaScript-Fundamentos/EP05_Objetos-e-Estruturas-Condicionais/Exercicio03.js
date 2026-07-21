// =====================================================
// EXERCÍCIO 3 - SISTEMA DE NÍVEL
// =====================================================
//
// Crie um objeto chamado jogador.
//
// O jogador deverá possuir:
//
// - nome
// - nivel
//
// Caso o nível seja maior ou igual a 10,
// exiba:
//
// "Jogador avançado"
//
// Caso contrário:
//
// "Jogador iniciante"

const jogador = {
    nome: "Sr.Laranjeira",
    nivel: 33
};

if (jogador.nivel >= 10) {
    console.log("Jogador avançado")
}else {
    console.log("Jogador iniciante")
}