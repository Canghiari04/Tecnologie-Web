document.addEventListener("DOMContentLoaded", function() {
	addNotizie("http://diiorio.nws.cs.unibo.it/twe/api/eu/news.php");
	addEventi("http://diiorio.nws.cs.unibo.it/twe/api/eu/topics.php");
});

function addNotizie(URI) {
	var request = new XMLHttpRequest();
	
	request.open("GET", URI, true);
	request.send();
	
	request.onload = () => {
		if(request.status === 200) {
			var tokens = JSON.parse(request.response);
			var news = tokens["news"];
			
			for(var index in news) {
				var span_comunicato = document.createElement("span");
				span_comunicato.innerHTML = `${news[index]["type"]} | ${news[index]["date"]}`;
				
				var style = document.createAttribute("style");
				style.value = "text-transform: uppercase";
				
				span_comunicato.setAttributeNode(style);
				
				var span_contenuto = document.createElement("span");
				span_contenuto.innerHTML = `${news[index]["content"]}`;
				
				var p = document.createElement("p");
				
				p.appendChild(span_comunicato);
				p.appendChild(span_contenuto);
				
				document.getElementById("div-notizie").appendChild(p);
			}
		} else {
			console.error("Errore durante la richiesta");
		}
	}
}

function addEventi(URI) {
	var request = new XMLHttpRequest();
	
	request.open("GET", URI, true);
	request.send();
	
	request.onload = () => {
		if(request.status === 200) {
			var events = JSON.parse(request.response);;
			
			for(var index in events) {
				var span_tipo = document.createElement("span");
				span_tipo.innerHTML = `${events[index]["label"]}`;
				
				var span_title = document.createElement("span");
				span_title.innerHTML = `${events[index]["title"]}`;
				
				var p = document.createElement("p");
				
				var id = document.createAttribute("id");
				id.value = span_tipo.innerHTML;
				
				var f = document.createAttribute("onclick");
				f.value = "changeBackgroundColor(id)";
				
				p.setAttributeNode(id);
				p.setAttributeNode(f);
				
				p.appendChild(span_tipo);
				p.appendChild(span_title);
				
				document.getElementById("div-eventi").appendChild(p);
			}
		} else {
			console.error("Errore durante la richiesta");
		}
	}
}

function changeBackgroundColor(id) {
	var p = document.getElementById(id);
	
	if(p.style.backgroundColor == "white") {
		p.style.backgroundColor = "lightgrey";
	} else {
		p.style.backgroundColor = "white";
	}
}
