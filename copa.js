
function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var limite = parseInt(prompt("Digite o ano limite para o cálculo:"));
var anoCopa = 1970;

while(anoCopa <= limite){
    mostra("Houve copa em: " + anoCopa);
    anoCopa = anoCopa +4;
}

mostra("FIM");

