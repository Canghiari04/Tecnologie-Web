function changeImage(numero_immagine) {
	var div = document.getElementsByTagName("div")[3];
	div.innerHTML = "";
	
	var img = document.createElement("img");
	
	var src = document.createAttribute("src");
	src.value = `img/${numero_immagine}.png`;
	
	img.setAttributeNode(src);
	
	div.appendChild(img);
}
