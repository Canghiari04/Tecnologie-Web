document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("span-calabria").addEventListener("click", function() {
		var request = new XMLHttpRequest();
		
		request.open("GET", "http://diiorio.nws.cs.unibo.it/twe/api/holidays/index.php", true);
		request.send();

		request.onload = () => {
			if(request.status === 200) {
				var tokens = JSON.parse(request.response);
				buildCheckbox(tokens.region, tokens);
				buildLocalita(tokens);
			} else {
				console.error("Errore durante la richiesta");
			}
		}
	});
});

function buildCheckbox(regione, tokens) {
	document.getElementById("p-bandiera").innerHTML = `Confronta le Bandiere Blu in ${regione}:`;

	for(var index in tokens) {
		if(typeof(tokens[index]) == "object") {
			var array = tokens[index];
				
			for(let i = 0; i < array.length; i++) {
				var span = document.createElement("span");
				
				var checkbox = document.createElement("input");
				
				var type = document.createAttribute("type");
				type.value = "checkbox";
				
				var id = document.createAttribute("id");
				id.value = array[i].name;
				
				var method = document.createAttribute("onchange");
				method.value = "changeLocalita(id)";
				
				checkbox.setAttributeNode(type);
				checkbox.setAttributeNode(id);
				checkbox.setAttributeNode(method);
				
				var textNode = document.createTextNode(array[i].name);
				
				span.appendChild(checkbox);
				span.appendChild(textNode);
				
				document.getElementById("div-checkbox").appendChild(span);
			}
		}
		
	}	
}

function buildLocalita(tokens) {
	for(var index in tokens) {
		if(typeof(tokens[index]) == "object") {
			var array = tokens[index];
				
			for(let i = 0; i < array.length - 2; i++) {
				var div = document.createElement("div");
				
				var id = document.createAttribute("id");
				id.value = array[i].name;
				
				div.setAttributeNode(id);
				
				var h1 = document.createElement("h1");
				h1.innerHTML = array[i].name;
				
				var div_text = document.createElement("div");
				
				var a = document.createElement("a");
				var href = document.createAttribute("href");
				href.value = `/${array[i].id}/`;
				a.setAttributeNode(href);
				
				var p = document.createElement("p");
				
				var img = document.createElement("img");
				var src = document.createAttribute("src");
				src.value = `http://diiorio.nws.cs.unibo.it/twe/resources/1801/${array[i].photo}`
				img.setAttributeNode(src);
				
				var textNode = document.createTextNode(array[i].summary);
				
				p.appendChild(img);
				p.appendChild(textNode);
				
				a.appendChild(p);
				
				div_text.appendChild(a);
				
				div.appendChild(h1);
				div.appendChild(div_text);
				
				document.getElementById("div-localita").appendChild(div);
			}
		}
		
	}
}