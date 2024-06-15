function changeImage(id, value) {
    removeStyle(); // rimozione dello stile "selected" a tutte le immagini presenti
    
    var div = document.getElementsByTagName("div")[1]; // approccio per poter estrapolare il div che contiene la main image
    div.innerHTML = "";
    
    var img = document.createElement("img");
    var src = document.createAttribute("src");
    src.value = value;
    
    img.setAttributeNode(src);
    
    var style = document.createAttribute("class");
    style.value = "image-selected";
    
    document.getElementById(id).setAttributeNode(style);

    div.appendChild(img);
}

function removeStyle() {
    var images = document.getElementsByTagName("img");

    for(let i = 1; i < images.length; i++) {
        images[i].removeAttribute("class");
    }
}