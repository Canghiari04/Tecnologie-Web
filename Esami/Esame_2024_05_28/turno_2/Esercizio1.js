function changeImage(valueImage) {
	var main_image = document.getElementsByTagName("img")[5];
	main_image.removeAttribute("src");
	
	var src = document.createAttribute("src");
	src.value = `img/${valueImage}.png`;
	
	main_image.setAttributeNode(src);
}