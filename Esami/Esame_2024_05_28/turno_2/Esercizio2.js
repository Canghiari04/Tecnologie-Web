document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("span-risultato").innerHTML = "";

	document.getElementById("button-converti").addEventListener("click", function() {
		var valore = document.getElementById("input-valore").value;
		
		if(valore == "") {
			document.getElementById("span-risultato").innerHTML = "Inserisci l'importo da convertire!"
		} else {
			var valuta_destinazione = document.getElementById("select-destinazione").value.toLowerCase();
			var tasso_conversione = document.getElementById(`tasso-cambio-${valuta_destinazione}`).value;
			
			if(tasso_conversione == "") {
				document.getElementById("span-risultato").innerHTML = `Inserisci il tasso di cambio per la valuta ${valuta_destinazione.toUpperCase()}!`;
			} else {			
				var conversione = valore * tasso_conversione;
				document.getElementById("span-risultato").innerHTML = conversione;
			}
		}
	});
});