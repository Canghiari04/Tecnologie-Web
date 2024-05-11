document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("my-button").addEventListener("click", function() {
        var input = document.getElementById("my-input").value;
        var arrayCharacters = new Array();

        const array = input.split(", ");

        for(let i = 0; i < array.length; i++) {
            var firstCharacter = array[i].substr(0, 1).toLowerCase();
            
            if(!arrayCharacters.includes(firstCharacter)) 
                arrayCharacters.push(firstCharacter);
        }

        arrayCharacters.sort((a, b) => a - b);

        console.log(arrayCharacters);
    });
});