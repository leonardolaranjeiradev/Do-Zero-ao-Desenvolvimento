// =====================================================
// EXERCÍCIO 12 - LOGIN
// =====================================================
//
// Crie um objeto chamado usuario.
//
// O objeto deverá possuir:
//
// - nome
// - administrador (true ou false)
//
// Caso seja administrador,
// informe:
//
// "Acesso liberado ao painel administrativo."
//
// Caso contrário,
// informe:
//
// "Acesso comum."

const usuario = {
    nome: "Leonardo",
    administrador: true
}

if (usuario.administrador == true) {
    console.log("Acesso liberado ao painel administrativo.");
} else {
    console.log("Acesso comum");
}
