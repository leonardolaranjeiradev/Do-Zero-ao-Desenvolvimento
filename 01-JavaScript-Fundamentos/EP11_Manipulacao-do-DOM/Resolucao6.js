// =====================================================
// MINI DESAFIOS
// =====================================================

// 51. Troque o texto do título e altere sua cor.
const h1 = document.querySelector("h1");
h1.textContent = "Novo Titutlo";
h1.style.color = "yellow";

// 52. Altere todos os textos da lista.
const lista = document.querySelectorAll("li");
lista[0].textContent = "Inicio";
lista[1].textContent = "Base";
lista[2].textContent = "Intermediario";
lista[3].textContent = "Avançado";

// 53. Remova o último item e depois altere o texto
//     do primeiro item.

//lista[3].remove();
lista[0].textContent = "Começo";

// 54. Altere o botão e depois remova o parágrafo.
const botao = document.querySelector("button");
botao.textContent = "clique aqui";

const paragrafo = document.querySelector("p");
//paragrafo.remove();

// 55. Faça uma pequena "personalização" na página:
//     - Troque o título.
h1.textContent = "Titulo trocado";
//     - Troque o texto do parágrafo.
paragrafo.textContent = "Texto do paragrafo trocado";
//     - Mude a cor do botão.
botao.style.color = "orange";
//     - Mude a cor da lista.
const ul = document.querySelector(".itens");
ul.style.backgroundColor = "purple";
//     - Deixe o último item em negrito.
lista[3].innerHTML = "<strong>Avançado</strong>";