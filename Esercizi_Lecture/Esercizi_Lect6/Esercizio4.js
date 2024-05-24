document.addEventListener("DOMContentLoaded", function() {
    /* <--> */
    var magicNumbers = getMagicNumbers()

    document.getElementById("button-multiply").addEventListener("click", function () {
        doOperation("*", magicNumbers, document.getElementById("first-input").value, document.getElementById("second-input").value);
    })

    document.getElementById("button-division").addEventListener("click", function () {
        doOperation("/", magicNumbers, document.getElementById("first-input").value, document.getElementById("second-input").value);
    })
})

function getMagicNumbers() {
    var arrayMagicNumbers = new Array();

    var request = new XMLHttpRequest();
    request.open("GET", "http://diiorio.nws.cs.unibo.it/twe/14.07.2022b/api/index.php", true);

    request.onload = () => {
        if(request.status === 200) {
            var tokens = JSON.parse(request.response);

            var ul = document.getElementById("list-magic-numbers");
            

            for(index in tokens) {
                var item = tokens[index];

                /* <--> */
                if(typeof(item) == "object") {
                    for(let i = 0; i <= item.length - 1; i++) {
                        arrayMagicNumbers.push(item[i]);

                        var li = document.createElement("li");
                        li.innerHTML = item[i];

                        ul.appendChild(li);
                    }
                }
            }
        } else {
            console.error("Errore durante la richiesta.")
        }
    }

    request.send();

    /* <--> */
    return arrayMagicNumbers;
}

function doOperation(type, magicNumbers, firstNumber, secondNumber) {
    var result;
    var ulHistory = document.getElementById("list-history");

    (type == "*") ? (result = firstNumber * secondNumber) : (result = firstNumber / secondNumber);

    var liHistory = document.createElement("li");
    liHistory.innerHTML = `${firstNumber} ${type} ${secondNumber} = ${result}`;

    ulHistory.appendChild(liHistory);

    /* <--> */
    if(magicNumbers.includes(result)) {
        var ul = document.getElementById("list-magic");

        var li = document.createElement("li")
        li.innerHTML = result;

        ul.appendChild(li);
    }
}