

function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var vitorias = parseInt(prompt("Entre com o número de vitórias."));
var empates = parseInt(prompt("Entre com o número de empates."));

var pontuacao = (vitorias * 3) + empates;

mostra("Seu time possui até o momento: " + pontuacao + " pontos!");

if (pontuacao > 28) {
    mostra("Seu time esta melhor do que no ano passado.");
}

if (pontuacao < 28){
    mostra("Seu time esta pior do que no ano passado.");
}

if (pontuacao == 28){
    mos
    mostra("Seu time esta igual ao ano passado.");
}

mostra("FIM")