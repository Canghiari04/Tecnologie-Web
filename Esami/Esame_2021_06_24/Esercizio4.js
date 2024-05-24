document.addEventListener("DOMContentLoaded", function() {
    var arrayInput = new Array();
    arrayInput = ["italia", "germania", "Portogallo", "SPAGNA", "SVEZIA", "Grecia"];

    var arrayChar = new Array();

    var input = document.getElementById("input");
    input.innerHTML = "";

    var output = document.getElementById("output");
    output.innerHTML = "";

    for(let i = 0; i <= arrayInput.length - 1; i++) {
        var textWord = document.createTextNode(arrayInput[i] + " ");
        input.appendChild(textWord);

        arrayChar.push(arrayInput[i].substring(0, 1).toLowerCase());
    }

    arrayChar.sort();
    
    for(let i = 0; i <= arrayChar.length - 1; i++) {
        var text = document.createTextNode(arrayChar[i] + " ");
        output.appendChild(text);
    }

    input.style.visibility = "visible";
    output.style.visibility = "visible";

})