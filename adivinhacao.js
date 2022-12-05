
function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

function sorteia (n){
    return Math.round(Math.random() * n);
}

//var numeroPensado = Math.round(Math.random() * 10); usado antes da funcao

var numeroPensado = sorteia(10);
console.log(numeroPensado); // mostra dentro do inspecionar o numero

var tentativas = 1;

while(tentativas <= 3){

    var chute = parseInt(prompt("Digite o seu chute:"));

    if(chute == numeroPensado){
        mostra("Voce acertou o chute!");
       break;

    } else{
            mostra("Infelizmente você errou!");
    }
    tentativas++;
}

mostra("FIM");
