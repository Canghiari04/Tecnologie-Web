document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("button-salva").addEventListener("click", function() {
		var titolo = document.getElementById("input-titolo").value;
		var contenuto = document.getElementById("input-contenuto").value;
		
		var span = document.createElement("span");
		
		var id = document.createAttribute("id");
		id.value = titolo;
		
		span.setAttributeNode(id);
		
		var span_titolo = document.createElement("span");
		span_titolo.innerHTML = titolo;
		var span_contenuto = document.createElement("span");
		span_contenuto.innerHTML = contenuto;
		
		span.appendChild(span_titolo);
		span.appendChild(span_contenuto);
		
		var button = document.createElement("button");
		button.innerHTML = "Elimina";
		
		var id_button = document.createAttribute("id");
		id_button.value = titolo;
		var  f = document.createAttribute("onclick");
		f.value = "deleteNote(id)"
		
		button.setAttributeNode(id_button);
		button.setAttributeNode(f);
		
		span.appendChild(button);
		
		document.getElementById("div-notes").appendChild(span);
	});	
});

function deleteNote(id) {
	var spans = document.getElementsByTagName("span");
	var span = spans.namedItem(id);
	
	var div_notes = document.getElementById("div-notes");
	div_notes.removeChild(span);
}