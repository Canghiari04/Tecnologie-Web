document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menu-terra").disabled = true;
    document.getElementById("menu-mare").disabled = true;
    document.getElementById("menu-stagione").disabled = true;

    document.getElementById("numero-persone").addEventListener("click", function() {
        document.getElementById("menu-mare").disabled = false;
        document.getElementById("menu-terra").disabled = false;
        document.getElementById("menu-stagione").disabled = false;

        removeOptions()
        addOptions(document.getElementById("numero-persone").value);
    });

    document.getElementById("menu-mare").addEventListener("click", function() {
        var value = document.getElementById("menu-mare").value;

        /* numero di options relative alla select circoscritta */
        var length = document.getElementById("menu-mare").options.length - 1;

        /* remove delle options dalla select */
        removeOptions();

        /* aggiorna il contenuto del menu */
        updateMenu("mare", document.getElementById("menu"));

        /* condizione che si accerta che siano presenti ancora Scelte per i menu */
        ((length - value) == 0) ? disabledSelect() : addOptions(length - value);
    });

    document.getElementById("menu-terra").addEventListener("click", function() {
        var value = document.getElementById("menu-terra").value;
        var length = document.getElementById("menu-terra").options.length - 1;

        removeOptions();
        updateMenu("terra", document.getElementById("menu"));
        ((length - value) == 0) ? disabledSelect() : addOptions(length - value);
    });

    document.getElementById("menu-stagione").addEventListener("click", function() {
        var value = document.getElementById("menu-stagione").value;
        var length = document.getElementById("menu-stagione").options.length - 1;

        removeOptions();
        ((length - value) == 0) ? disabledSelect() : addOptions(length - value);
    });
});

/* la rimozione di options dalla select richiede che sia eliminate in maniera decrescente, ossia da value 3 --> 2 --> 1 --> 0 */
function removeOptions() {
    var length = document.getElementById("menu-stagione").options.length - 1;

    for(let i = length; i >= 0; i--) {
        document.getElementById("menu-mare").remove(i);
        document.getElementById("menu-terra").remove(i);
        document.getElementById("menu-stagione").remove(i);
    }
}

function updateMenu(type, divMenu) {
    var request = new XMLHttpRequest();
    request.open("GET", "http://diiorio.nws.cs.unibo.it/twe/api/menu/menu.php", true);

    request.onload = () => {
        if(request.status == '200') {
            var tokens = JSON.parse(request.response);

            for(let index in tokens) {
                getMenu(type, item = tokens[index], divMenu);
            }

        } else if(request.status == '400') {
            console.log("Errore durante la richiesta.");
        }
    }

    request.send();
}

function getMenu(type, item, divMenu) {
    if(item.id.includes(type)) {
        var fieldset = document.createElement("fieldset");

        var legend = document.createElement("legend");
        legend.innerHTML = item.nome;

        var paragraphAntipasto = document.createElement('p');
        paragraphAntipasto.innerHTML = item.antipasto.nome + " --> " + item.antipasto.descrizione;
                    
        var paragraphPrimo = document.createElement('p');
        paragraphPrimo.innerHTML = item.primo.nome + " --> " + item.antipasto.descrizione;

        var paragraphSecondo = document.createElement('p');
        paragraphSecondo.innerHTML = item.secondo.nome + " --> " + item.antipasto.descrizione;

        fieldset.appendChild(legend);
        fieldset.appendChild(paragraphAntipasto);
        fieldset.appendChild(paragraphPrimo);
        fieldset.appendChild(paragraphSecondo);
        divMenu.appendChild(fieldset);
    }
}

function disabledSelect() {
    document.getElementById("menu-mare").disabled = true;
    document.getElementById("menu-terra").disabled = true;
    document.getElementById("menu-stagione").disabled = true;
}

function addOptions(numPeople) {
    var selectMenuMare = document.getElementById("menu-mare");
    var selectMenuTerra = document.getElementById("menu-terra");
    var selectMenuStagione = document.getElementById("menu-stagione");

    for(let i = numPeople; i >= 0; i--) {
        var option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;

        selectMenuMare.appendChild(option);
    }

    for(let i = numPeople; i >= 0; i--) {
        var option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;

        selectMenuTerra.appendChild(option);
    }

    for(let i = numPeople; i >= 0; i--) {
        var option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;

        selectMenuStagione.appendChild(option);
    }
}