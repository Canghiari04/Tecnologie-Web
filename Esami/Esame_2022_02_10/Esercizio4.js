document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("input-date").addEventListener("input", function() {
		var date = new Date(document.getElementById("input-date").value);

		if(date.getDay() == 0 || date.getDay() == 6) {
			var value = parseInt(document.getElementById("weekend").innerHTML);
			value = value + 1;
			
			document.getElementById("weekend").innerHTML = value;
		} else {
			var value = parseInt(document.getElementById("lavorativo").innerHTML);
			value = value + 1;
			
			document.getElementById("lavorativo").innerHTML = value;
		}	
	}); 
});
