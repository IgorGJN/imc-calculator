const botao = document.querySelector('.calculator__botao');
const cor = document.querySelector('.padrao');
const calculatorArea = document.querySelector('.esconder');
const recarregar = document.querySelector('.calculator__recarregar');
const escrever = document.querySelector('.resultado-imc');

var  imc;
var mensagem;
var tema = "padrao";


// Correto
function ocultar() {
    calculatorArea.classList.toggle("ocultar");
    recarregar.classList.toggle("ocultar");
}

function exibirResposta() {
    escrever.innerHTML = `
    <h1 class="resposta-imc">Seu IMC é ${imc}</h1>
    <h2>${mensagem}</h2>
    
    `
}

function pegarDados() {
    var alturaInformada = document.getElementById("altura-informada");
    var pesoInformado = document.getElementById("peso-informado");
    var altura = alturaInformada.value;
    var peso = pesoInformado.value;
    imc = calcularIMC(altura, peso);
}

function calcularIMC(altura, peso) {
    return peso / ((altura /100) * (altura/100));
}


botao.addEventListener('click', () => {
        pegarDados();
        ocultar();
        classificao();
        exibirResposta();
        mudaCor();
    })


function mudaCor () {
    cor.classList.toggle(tema);
}

function classificao() {
    imc = parseInt(imc);
    imc = Math.round(imc);
    if (imc < 18.5) {
        mensagem = "Seu IMC está menor que 18,5. <br>Você está na classificação magreza.<br>Atenção!";
        tema = "vermelho";
    } else
    if (imc > 18.5 && imc < 24.9) {
        mensagem = "Seu IMC está entre 18,5 e 24,9. <br>Você está na classificação normal.<br>Parabéns!";
        tema = "verde";
    } else
    if (imc > 25 && imc < 29.9) {
        mensagem = "Seu IMC está entre 25 e 29,9. <br>Você está na classificação sobrepeso.<br>Cuidado!";
        tema = "amarelo";
    } else
    if (imc > 30 && imc < 34.9) {
        mensagem = "Seu IMC está entre 30 e 34,9. <br>Você está na classificação obesidade grau I.<br>Atenção!";
        tema = "vermelho";
    } else
    if (imc > 35 && imc < 39.9) {
        mensagem = "Seu IMC está entre 35 e 39,9. <br>Você está na classificação obesidade grau II.<br>Atenção!";
        tema = "vermelho";
    } else
    if (imc > 40) {
        mensagem = "Seu IMC está maior que 40. <br>Você está na classificação obesidade grau III.<br>Atenção!";
        tema = "vermelho";
    }
    imc = Math.round(imc);
}




