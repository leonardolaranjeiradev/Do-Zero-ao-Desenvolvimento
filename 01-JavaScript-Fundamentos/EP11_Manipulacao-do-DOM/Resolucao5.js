// =====================================================
// BLOCO 5 - ALTERANDO ESTILOS
// =====================================================

// 41. Altere a cor de fundo do botão.
const botao = document.querySelector("button");
botao.style.backgroundColor = "red";

// 42. Altere a cor do texto do botão.
botao.style.color = "yellow";

// 43. Altere o tamanho da fonte do botão.
botao.style.fontSize = "30px";

// 44. Altere a cor do título.
const titulo = document.querySelector("h1");
titulo.style.color = "orange";

// 45. Aumente o tamanho da fonte do título.
titulo.style.fontSize = "50px";

// 46. Deixe o parágrafo em negrito.
const paragrafo = document.querySelector("p");
paragrafo.innerHTML = "<strong>Meu primeiro parágrafo</strong>";

// 47. Altere a cor de fundo da lista.
const ul = document.querySelector(".itens");
ul.style.backgroundColor = "red";

// 48. Altere a cor do primeiro <li>.
const itens = document.querySelectorAll("li");
itens[0].style.color = "yellow";

// 49. Faça o segundo <li> ficar vermelho.
itens[1].style.color = "red";

// 50. Faça o terceiro <li> ficar azul.
itens[2].style.color = "blue";