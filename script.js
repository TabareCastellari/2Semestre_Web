/* Selecionar os elementos que estão no HTML */
const contador = document.querySelector('#contador');
const botao1 = document.querySelector('#botao1');

contadorCarrinho = 0;

botao1.addEventListener('click', function() {
    contadorCarrinho++;

    contador.textContent = contadorCarrinho;
})