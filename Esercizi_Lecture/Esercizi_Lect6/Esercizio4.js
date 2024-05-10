document.addEventListener("DOMContentLoaded", function() {
    getMagicNumbers();

    document.getElementById("button-multiplication").addEventListener("click", function() {
        operation(document.getElementById("list-operation"), document.getElementById("firstNumber").value, document.getElementById("secondNumber").value, '*');
    });

    document.getElementById("button-division").addEventListener("click", function() {
        operation(document.getElementById("list-operation"), document.getElementById("firstNumber").value, document.getElementById("secondNumber").value, '/');
    });
});

function getMagicNumbers() {
    var request = new XMLHttpRequest();
    request.open("GET", "http://diiorio.nws.cs.unibo.it/twe/14.07.2022b/api/index.php", true);

    request.onload = () => {
        (request.status === 200) ? (printMagicNumbers(request.response, document.getElementById("list-magic-numbers"))) : (console.log("Errore durante la richiesta"))
    }

    request.send();
}

function printMagicNumbers(response, idList) {
    var tokens = JSON.parse(response);
    
    for(let index in tokens) {
        var item = tokens[index];

        if(typeof(item) === 'object') {
            for(let i = 0; i < item.length; i++) {
                var li = document.createElement("li");
                li.innerHTML = item[i];

                idList.appendChild(li);
            }
        }
    }
}

function operation(idList, numb1, numb2, operation) {
    const result = (operation === '*') ? numb1 * numb2 : numb1 / numb2;

    var li = document.createElement("li");
    li.innerHTML = result;
    
    idList.appendChild(li);

    checkMagicNumbers(result, document.getElementById("list-magic-numbers-found"));
}

function checkMagicNumbers(result, idList) {
    var arrayMagicNumbers = Array.from(document.getElementById("list-magic-numbers").children).map(li => li.textContent);

    if(arrayMagicNumbers.includes(String(result))) {
        var li = document.createElement("li");
        li.innerHTML = result;

        var arrayMagicNumbersFound = Array.from(document.getElementById("list-magic-numbers-found").children).map(li => li.textContent);
        if(!arrayMagicNumbersFound.includes(String(result))) {
            idList.appendChild(li);
        }
    }
}