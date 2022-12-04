
function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

//3
var totalFamiliares = parseInt(prompt("Digite o número de familiares:"));

var numero = 1;
var totalIdades = 0;

while(numero <= totalFamiliares){
    var idade = parseInt(prompt("Digite a sua idade"));
    var totalIdades = totalIdades +idade;
    numero++;
}

var mediaIdades = totalIdades / totalFamiliares;

mostra("A média das idades dos familiares é: " + mediaIdades);
mostra("FIM")
