document.addEventListener("DOMContentLoaded", function() {
	const caratteri = 300;

	document.getElementById("textarea-input").addEventListener("input", function() {
		var text = document.getElementById("textarea-input").value;
		
		document.getElementById("span-numero-caratteri").innerHTML = " " + text.length;	
		
		var tokens = text.split(' ');
		(document.getElementById("span-numero-caratteri").innerHTML > 0) ? 
			(document.getElementById("span-numero-parole").innerHTML = " " + tokens.length) : (document.getElementById("span-numero-parole").innerHTML = " " + 0)
		
		var differenza = caratteri - text.length;
		if(differenza > 0) {
			document.getElementById("span-caratteri-rimanenti").innerHTML = " " + differenza;
		} else {
			document.getElementById("textarea-input").disabled = true;
			document.getElementById("span-caratteri-rimanenti").innerHTML = " " + differenza;
			
			alert("Limite massimo di caratteri raggiunto.");
		}
	});
});
