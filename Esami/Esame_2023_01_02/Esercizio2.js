document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("button-click").addEventListener("click", function() {
        getFirstCharacters(document.getElementById("input").value, document.getElementById("output"));
    })
})

function getFirstCharacters(tokens, output) {
    var arrayCharacters = new Array();

    var items = tokens.split(", ");

    for(let i = 0; i <= items.length - 1; i++) {
        if(!arrayCharacters.includes(items[i].substr(0, 1).toLowerCase())) {
            arrayCharacters.push(items[i].substr(0, 1).toLowerCase())
        }
    }

    arrayCharacters.sort();

    for(let i = 0; i < arrayCharacters.length; i++) {
        var textNode = document.createTextNode(`${arrayCharacters[i]} `);
        output.appendChild(textNode);
    }
}