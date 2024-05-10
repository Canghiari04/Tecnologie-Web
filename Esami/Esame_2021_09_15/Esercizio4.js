document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByTagName("button")[0].addEventListener("click", function() {
        var div = document.getElementById("output");

        var text = document.getElementsByTagName("textarea")[0].value;
        var array = text.split(' ');

        for(let i = 0; i < array.length; i++) {
            var p = document.createElement("p");
            p.innerHTML = array[i];

            var id = document.createAttribute("id");
            
            (i % 2 == 0) ? (id.value = "p-grey") : (id.value = "p-border");

            p.setAttributeNode(id);
            div.appendChild(p);
        }
    });
});