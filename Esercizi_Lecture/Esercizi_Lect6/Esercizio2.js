document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("button-submit").addEventListener("click", function() {
		var time = document.getElementById("input-time").value;
		
		document.getElementById("span-timer").style.visibility = "visible";
		
		if(time == "") {
			document.getElementById("span-timer").innerHTML = "INSERISCI PRIMA I SECONDI!"
		} else {
			document.getElementById("button-submit").disabled = true;
			document.getElementById("span-timer").innerHTML = time;
		
			var timer = setInterval(function() {
				time = time - 1;
				(time > 0) ? (document.getElementById("span-timer").innerHTML = time) : (document.getElementById("span-timer").innerHTML = "Fatto!")
			}, 1000);
			
			document.getElementById("button-submit").disabled = false;
			document.getElementById("span-timer").innerHTML = "";
		}
	});
});