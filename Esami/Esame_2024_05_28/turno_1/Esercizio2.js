document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("button-aggiungi").addEventListener("click", function() {
		var elemento = document.getElementById("input-elemento").value;	
		
		var testo = document.createTextNode(elemento);
		
		var input = document.createElement("input");
		
		var type = document.createAttribute("type");
		type.value = "checkbox";
		var id = document.createAttribute("id");
		id.value = elemento;
		var f = document.createAttribute("onchange");
		f.value = "changeTextDecoration(id)";
		
		input.setAttributeNode(type);
		input.setAttributeNode(id);
		input.setAttributeNode(f);
		
		var span = document.createElement("span");
		
		var id_span = document.createAttribute("id");
		id_span.value = elemento;
		
		span.setAttributeNode(id_span);
		
		span.appendChild(input);
		span.appendChild(testo);
		
		document.getElementById("p-checkbox").appendChild(span);
	});

	document.getElementById("button-elimina").addEventListener("click", function() {
		var checkbox_checked = new Array();
		
		var spans = document.getElementsByTagName("span");
		var checkBoxes = document.getElementsByTagName("input")
		
		for(let i = 0; i < spans.length; i++) {
			var checkbox = checkBoxes.namedItem(spans[i].id);
			
			if(checkbox.checked) {
				var span = spans.namedItem(spans[i].id);
				checkbox_checked.push(span);
			}
		}
		
		for(var index in checkbox_checked) {		
			document.getElementById("p-checkbox").removeChild(checkbox_checked[index]);
		}
	});
});

function changeTextDecoration(id) {
	var spans = document.getElementsByTagName("span");
	
	var span = spans.namedItem(id);
	
	var style = document.createAttribute("style")
	style.value = "text-decoration: line-through;";
	
	span.setAttributeNode(style);
}
