
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
var pesoInformado = prompt(nome + " , Informe o seu peso:")
var alturaInformada = prompt(nome + " , Informe a sua altura:")

var imc =  calculaImc(pesoInformado, alturaInformada);

mostra(nome + " O seu IMC calculado é: " + imc);

// /*
if(imc < 18.5){
    mostra("Você está abaixo do recomendado! Cuide-se!");
}

if(imc >35){
    mostra("Você está acima do recomendado! Cuide-se!");
}

if(imc >= 18.5 && imc <35){
    mostra("Seu IMC está de acordo com o recomendado! Parabéns!");
}
// */
