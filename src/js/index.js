// pegar a lista dos botões para verificar quando forem clicados
const botoes = window.document.querySelectorAll('.botao');

// pegar a lista de personagens pra poder mostrar ou esconder eles
const personagens = document.querySelectorAll('.personagem')

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    // verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele
    desselecionarBotao();

    // adicionar a classe "selecionado" no botão clicado
    botao.classList.add('selecionado');

    desselecionarPersonagem();

    personagens[indice].classList.add("selecionado");
  });
});

function desselecionarBotao() {
    const botaoSelecionado = window.document.querySelector('.botao.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

function desselecionarPersonagem() {
  const personagemSelecionado = document.querySelector(".personagem.selecionado");personagemSelecionado.classList.remove("selecionado");
}