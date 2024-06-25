document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("button-aggiungi").addEventListener("click", function() {
		var text = document.getElementById("input-text").value;
		
		var span = document.createElement("span");
		
		var id = document.createAttribute("id");
		id.value = text;
		
		span.setAttributeNode(id);
		
		var span_text = document.createElement("span");
		span_text.innerHTML = text;
		
		var checkbox = document.createElement("input");
		
		var type = document.createAttribute("type");
		type.value = "checkbox";
		
		var id_checkbox = document.createAttribute("id");
		id_checkbox.value = text;
		
		var method = document.createAttribute("onchange");
		method.value = "checkCheckbox(id)";
		
		checkbox.setAttributeNode(type);
		checkbox.setAttributeNode(id_checkbox);
		checkbox.setAttributeNode(method);
		
		span.appendChild(checkbox);
		span.appendChild(span_text);
		
		document.getElementById("div-checkbox").appendChild(span);
	});
	
	document.getElementById("button-elimina").addEventListener("click", function() {
		var array = new Array();
		
		var checkboxes = document.getElementsByTagName("input");
		var spans = document.getElementsByTagName("span");
		
		for(let i = 0; i < checkboxes.length; i++) {
			var checkbox = checkboxes[i];
			
			if(checkbox.type == "checkbox" && checkbox.checked == true) {
				var span = spans.namedItem(checkbox.id);
				array.push(span);
			}
			
		}
		
		for(let index in array) {
			document.getElementById("div-checkbox").removeChild(array[index]);
		}
		
	});		
});

function checkCheckbox(id) {
	var spans = document.getElementsByTagName("span");
	var span = spans.namedItem(id);
	
	var style = document.createAttribute("style");
	style.value = "text-decoration: line-through;";	
	
	span.setAttributeNode(style);	
}