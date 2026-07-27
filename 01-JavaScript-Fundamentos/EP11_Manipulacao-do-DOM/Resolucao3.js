// =====================================================
// BLOCO 3 - ALTERANDO CONTEÚDO
// =====================================================

// 21. Troque o texto do <h1> para:
//     "Aprendendo DOM"
const h1 = document.querySelector("h1");
h1.textContent = "Aprendendo DOM";

// 22. Troque o texto do parágrafo para:
//     "Estou praticando JavaScript."

const paragrafo = document.querySelector("p");
paragrafo.textContent = "Estou praticando JavaScript.";

// 23. Troque o texto do primeiro <li> para:
//     "HTML"

const itens = document.querySelectorAll("li");
itens[0].textContent = "HTML";

// 24. Troque o texto do segundo <li> para:
//     "CSS"

itens[1].textContent = "CSS";

// 25. Troque o texto do terceiro <li> para:
//     "JavaScript"
itens[2].textContent = "JavaScript";

// 26. Utilize innerHTML para deixar o terceiro item em negrito.
itens[2].innerHTML = "<strong>JavaScript</strong>";

// 27. Utilize innerHTML para deixar o título (<h1>) em itálico.
h1.innerHTML = "<i>Aprendendo DOM</i>";

// 28. Coloque uma tag <strong> dentro do parágrafo.
paragrafo.innerHTML = "<strong>Meu primeiro parágrafo</strong>";

// 29. Troque o texto do botão para:
//     "Salvar"

const botao = document.querySelector("button");
botao.textContent = "Salvar";

// 30. Faça o formulário exibir um novo título utilizando innerHTML.
const formulario = document.querySelector("#meu-formulario");
formulario.innerHTML = "<h2>Cadastro de Usuário</h2>" + formulario.innerHTML;