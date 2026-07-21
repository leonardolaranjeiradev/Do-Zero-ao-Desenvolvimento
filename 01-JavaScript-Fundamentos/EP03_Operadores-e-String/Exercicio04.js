//Exercício 4 - Loja de Informática

//Um cliente comprou:

//Monitor = R$ 980
//Mouse = R$ 85
//Teclado = R$ 140

//Calcule:

//subtotal
//desconto de 10%
//total

//Mostre tudo organizado.

let monitor = 980;
let mouse = 85;
let teclado = 140;

let subtotal = monitor + mouse + teclado;
let desconto = subtotal * 0.10;
let total = subtotal - desconto;

console.log("Subtotal: R$" + subtotal);
console.log("Desconto de 10%: R$" + desconto);
console.log("Total: R$" + total);