document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myButton").addEventListener("click", function() {
        var array = new Array();
        array = ["italia", "germania", "Portogallo", "SPAGNA", "SVEZIA", "Grecia"];

        getInitialCharacter(array, document.getElementById("myParagraph"));
    });

    function getInitialCharacter(array, idParagraph) {
        var arrayCharacters = new Array();

        for(let i = 0; i < array.length; i++) {
            var character = array[i].substring(0, 1).toLowerCase();

            (!arrayCharacters.includes(character)) ? arrayCharacters[i] = character : console.log("Lettera presente");
        }

        var text = "";
        arrayCharacters.sort((a, b) => b - a);

        for(let i = 0; i < arrayCharacters.length; i++) {
            var character = arrayCharacters[i];
            text =  text + character + "," ;
        }

        idParagraph.innerHTML = text;
        idParagraph.style.visibility = "visible";
        console.log(idParagraph);
    }
});