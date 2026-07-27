// =====================================================
// BLOCO 1 - SELETORES
// =====================================================

// 1. Selecione o formulário pelo ID e exiba no console.
const formulario = document.getElementById("meu-formulario")
console.log(formulario);

// 2. Selecione o botão "Enviar" pela classe e exiba no console.

const botao = document.querySelector(".botao");
console.log(botao);

// 3. Selecione todos os <li> utilizando getElementsByTagName.
console.log(document.getElementsByTagName("li"));

// 4. Selecione todos os elementos que possuem a classe "item".
console.log(document.querySelectorAll(".item"));

// 5. Selecione o primeiro elemento que possui a classe "item".
const primeiro = document.querySelector(".item");
console.log(primeiro);

// 6. Selecione a <ul> utilizando a classe "itens".
const ul = document.querySelector(".itens");
console.log(ul);

// 7. Selecione o primeiro <li> utilizando querySelector.
const primeiroLi = document.querySelector("li");
console.log(primeiroLi);

// 8. Selecione o título (<h1>) da página.
console.log(document.querySelector("h1"));


// 9. Selecione o parágrafo.
console.log(document.querySelector("p"));

// 10. Selecione todos os botões da página.
const todosBotoes = document.getElementsByTagName("button");
console.log(todosBotoes);