document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("button-salva").addEventListener("click", function() {
		var titolo = document.getElementById("input-titolo").value;
		var contenuto = document.getElementById("input-contenuto").value;
		
		if(titolo == "") {
			document.getElementById("input-titolo").innerHTML = "Scrivi il titolo!";
		} 
		else if(contenuto == "") {
			document.getElementById("input-c").innerHTML = "Scrivi il titolo!";
		} else {
			var span = document.createElement("span");
			
			var id = document.createAttribute("id");
			id.value = `${titolo}-${contenuto}`;
			
			span.setAttributeNode(id);
			
			var span_titolo = document.createElement("span");
			span_titolo.innerHTML = titolo;
			
			var span_contenuto = document.createElement("span");
			span_contenuto.innerHTML = contenuto;
			
			var button = document.createElement("button");
			button.innerHTML = "ELIMINA";
			
			var id_button = document.createAttribute("id");
			id_button.value = `${titolo}-${contenuto}`;
			
			var f = document.createAttribute("onclick");
			f.value = "deleteNote(id)";
			
			button.setAttributeNode(id_button);
			button.setAttributeNode(f);
			
			span.appendChild(span_titolo);
			span.appendChild(span_contenuto);
			span.appendChild(button);
			
			document.getElementById("div-notes").appendChild(span);
		}
	});	
	
	document.getElementById("button-reload").addEventListener("click", function() {
		var div = document.getElementById("div-notes");
		div.innerHTML = "";
	});
});

function deleteNote(id) {
	var div = document.getElementById("div-notes");
	var spans = document.getElementsByTagName("span");
	var span = spans.namedItem(id);
	
	div.removeChild(span);
}