const resultado = document.querySelector('.calculator__botao');
const cor = document.querySelector('.padrao');
const calculatorArea = document.querySelectorAll('.esconder');



function ocultar() {
    calculatorArea.classList.toggle("ocultar");
}

var alturaInformada = document.getElementById("altura-informada").value;
var pesoInformado = document.getElementById("peso-informado").value;


function calcularIMC(altura, peso) {
    return peso / ((altura /100) * (altura/100));
}

resultado.addEventListener('click', () => {
        calcularIMC(alturaInformada, pesoInformado);
        ocultar()
        console.log (calcularIMC);
        console.log (alturaInformada);
        console.log (pesoInformado);
    })

var imc = 40;
var tema = "padrao";

function mudaCor () {
    cor.classList.toggle(tema);
}

function resposta() {
    if (imc === 18.5) {
        tema = "vermelho";
    } else
    if (imc === 18 && imc === 24) {
        tema = "verde";
        console.log(tema)
    } else
    if (imc === 25) {
        tema = "amarelo";
    } else
    if (imc === 30 && imc === 34) {
        tema = "amarelo";
    } else
    if (imc === 35 && imc === 39) {
        tema = "vermelho";
    } else
    if (imc === 40) {
        tema = "vermelho";
    } else
    mudaCor();
    console.log(tema);
//    ocultar();
}

resposta();


// var alturaInformada = prompt("Qual sua altura? (em cm)");
// var pesoInformado = prompt("Qual seu peso?");

// var imc = Math.round(calcularIMC(alturaInformada, pesoInformado));

// console.log(imc);
