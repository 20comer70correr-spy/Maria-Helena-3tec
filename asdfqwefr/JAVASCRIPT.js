// Seleciona todos os botões com a classe 'botao'
const buttons = document.querySelectorAll('.botao');

// Adiciona evento de clique a cada botão
buttons.forEach(button => {
    button.onclick = function(event) {
        console.log('Clicou no botão, "OK!"');
    };
});

// Função para adicionar valor ao campo de entrada 'tela'
function AdicionarValor(valor) {
    document.getElementById("tela").value += valor;
}

// Função para calcular a expressão no campo de entrada 'tela'
function calcular() {
    const tela = document.getElementById("tela");
    try {
        // Avalia a expressão no campo e exibe o resultado
        tela.value = eval(tela.value);
    } catch (error) {
        tela.value = "Erro";
    }
}