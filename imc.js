
function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

function calculaImc(peso, altura){
    return peso / (altura * altura);
}

var nome = prompt("Informe seu nome:")
var alturaInformada = prompt(nome + " , Informe a sua altura:")
var pesoInformado = prompt(nome + " , Informe o seu peso:")

var imc =  calculaImc(alturaInformada, pesoInformado);

document.write(nome + " O seu IMC calculado é: " + imc);
