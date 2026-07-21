// =====================================================
// EXERCÍCIO 10 - VELOZES E FURIOSOS
// =====================================================
//
// Utilize um WHILE para
// simular a velocidade
// de um carro.
//
// Comece em:
//
// 0 km/h
//
// Vá aumentando de
// 20 em 20.
//
// Pare quando chegar
// em 200 km/h.
//
// Exiba cada velocidade.

let velocidade = 0;

while (velocidade <= 200){
    console.log(velocidade + " km/h");
    velocidade += 20;
}