// =====================================================
// BLOCO 2 - ELEMENTOS FILHOS
// =====================================================

// 11. Encontre a <ul> através da classe "itens".
const ul = document.querySelector(".itens");
console.log(ul);

// 12. Exiba o primeiro filho da lista.
console.log(ul.firstElementChild);

// 13. Exiba o último filho da lista.
console.log(ul.lastElementChild);

// 14. Exiba todos os filhos da lista.
console.log(ul.children);

// 15. Exiba quantos filhos a lista possui.
console.log(ul.childElementCount);

// 16. Exiba apenas o segundo filho da lista.
console.log(ul.children[1]);

// 17. Exiba apenas o terceiro filho da lista.
console.log(ul.children[2]);

// 18. Exiba o texto do primeiro filho.
console.log(ul.firstElementChild.textContent);

// 19. Exiba o texto do último filho.
console.log(ul.lastElementChild.textContent);

// 20. Exiba o texto de todos os filhos (um por um).
for (let filho of ul.children) {
    console.log(filho.textContent);
}
