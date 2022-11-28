
function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var numeroPensado = Math.round(Math.random() * 10); 

var chute = parseInt(prompt("Digite o seu chute:"));

if(chute == numeroPensado){
    mostra("Voce acertou o chute! Parabéns!");
} else{
    mostra("Infelizmente você errou! o número pensado foi: " + numeroPensado);
}



