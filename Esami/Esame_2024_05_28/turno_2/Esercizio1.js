function changeImage(valueImage) {
    var divImage = document.getElementsByTagName("div")[2];

    divImage.innerHTML = " ";

    var newImg = document.createElement("img");
    var src = document.createAttribute("src");
    src.value = `img/${valueImage}.png`;

    newImg.setAttributeNode(src);
    divImage.appendChild(newImg);1
}