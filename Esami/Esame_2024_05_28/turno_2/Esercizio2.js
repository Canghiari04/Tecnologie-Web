document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByTagName("button")[0].addEventListener("click", function() {
        (document.getElementById("importo").value == "") ? (alert("Inserisci prima un importo!")) : (calculate(document.getElementById("importo").value, document.getElementById("valuta-partenza").value, document.getElementById("valuta-destinazione").value))
    })
})

function calculate(importo, valutaPartenza, valutaDestinazione) {
    document.getElementById("risultato").style.visibility = "visible";
    document.getElementById("risultato").innerHTML = "";

    if(valutaPartenza == valutaDestinazione) {
        var textNode = document.createTextNode(`Risultato: ${importo}`);

        document.getElementById("risultato").appendChild(textNode);
    } else if(valutaDestinazione == "EUR" && document.getElementById("tasso-eur").value != "") {   
        var importoConvertito = importo * document.getElementById("tasso-eur").value;
        var textNode = document.createTextNode(`Risultato: ${importoConvertito}`);

        document.getElementById("risultato").appendChild(textNode);
    } else if(valutaDestinazione == "USD" && document.getElementById("tasso-usd").value != "") {
        var importoConvertito = importo * document.getElementById("tasso-usd").value;
        var textNode = document.createTextNode(`Risultato: ${importoConvertito}`);

        document.getElementById("risultato").appendChild(textNode);
    }
}