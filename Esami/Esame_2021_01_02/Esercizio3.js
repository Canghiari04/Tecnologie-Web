document.addEventListener("DOMContentLoaded", function() {
    /* caricato il contenuto dell'interpretazione esplicita del documento, sono disabilitate le select per la scelta dei menu */
    disableSelect();

    document.getElementById("select-people").addEventListener("click", function() {
        /* clear dei fieldset dei menu */
        document.getElementById("div-menu-mare").innerHTML = "";   
        document.getElementById("div-menu-terra").innerHTML = "";   
        document.getElementById("fieldset-menu-mare").style.visibility = "hidden";
        document.getElementById("fieldset-menu-terra").style.visibility = "hidden";
        
        activeSelect();
        changeNumberMenus(document.getElementById("select-people").value);
    }) 

    document.getElementById("menu-mare").addEventListener("click", function() {
        /* numero di scelte selezionate */
        var value = document.getElementById("menu-mare").value;

        /* numero di scelte di partenza */
        var length = document.getElementById("menu-mare").options.length;

        /* verificando la differenza tra le due variabili, è possibile accertarsi, in tempo reale, il numero effettivo di scelte rimanenti */
        var difference = length - value;

        getMenus("mare");

        (difference > 0) ? (changeNumberMenus(length - value)) : disableSelect(); 
    })

    document.getElementById("menu-terra").addEventListener("click", function() {
        var value = document.getElementById("menu-terra").value;
        var length = document.getElementById("menu-terra").options.length;

        var difference = length - value;

        getMenus("terra");

        (difference > 0) ? (changeNumberMenus(length - value)) : disableSelect(); 
    })

    document.getElementById("menu-stagione").addEventListener("click", function() {
        var value = document.getElementById("menu-stagione").value;
        var length = document.getElementById("menu-stagione").options.length;

        var difference = length - value;

        getMenus("stagione");

        (difference > 0) ? (changeNumberMenus(length - value)) : disableSelect(); 
    })
}) 

function disableSelect() { 
    document.getElementById("menu-mare").disabled = true;
    document.getElementById("menu-terra").disabled = true;
    document.getElementById("menu-stagione").disabled = true;
}

function changeNumberMenus(numberPeople) { 
    var selectMenuMare = document.getElementById("menu-mare");
    var selectMenuTerra = document.getElementById("menu-terra");
    var selectMenuStagione = document.getElementById("menu-stagione");

    clear(selectMenuMare, selectMenuTerra, selectMenuStagione);

    for(let i = 0; i <= numberPeople - 1; i++) {
        var option = document.createElement("option");
        option.innerHTML = parseInt(i + 1);

        var value = document.createAttribute("value");
        value.value = parseInt(i + 1);

        option.setAttributeNode(value);

        selectMenuMare.appendChild(option);
    }

    for(let i = 0; i <= numberPeople - 1; i++) {
        var option = document.createElement("option");
        option.innerHTML = parseInt(i + 1);

        var value = document.createAttribute("value");
        value.value = parseInt(i + 1);

        option.setAttributeNode(value);

        selectMenuTerra.appendChild(option);
    }

    for(let i = 0; i <= numberPeople - 1; i++) {
        var option = document.createElement("option");
        option.innerHTML = parseInt(i + 1);

        var value = document.createAttribute("value");
        value.value = parseInt(i + 1);

        option.setAttributeNode(value);

        selectMenuStagione.appendChild(option);
    }
}

function clear(selectMenuMare, selectMenuTerra, selectMenuStagione) {
    selectMenuMare.innerHTML = "";
    selectMenuTerra.innerHTML = "";
    selectMenuStagione.innerHTML = "";
}

function activeSelect() {
    document.getElementById("menu-mare").disabled = false;
    document.getElementById("menu-terra").disabled = false;
    document.getElementById("menu-stagione").disabled = false;
}

/* visualizzazione grafica del menu selezionato */
function getMenus(type) {
    var request = new XMLHttpRequest();
    request.open("GET", "http://diiorio.nws.cs.unibo.it/twe/api/menu/menu.php", true);
    
    request.onload = () => {
        if(request.status === 200) {
            var items = JSON.parse(request.response);

            for(let i = 0; i <= items.length - 1; i++) {
                var fieldset = document.getElementById(`fieldset-menu-${type}`);
                var legend = document.getElementById(`legend-menu-${type}`);                
                var div = document.getElementById(`div-menu-${type}`);   
                div.innerHTML = "";

                if(items[i].id.includes(type.toLowerCase())) {
                    legend.innerText = items[i].nome;

                    var paragraphAntipasto = document.createElement("p");
                    paragraphAntipasto.innerHTML = `Antipasto: ${items[i].antipasto.nome}`;

                    var paragraphPrimo = document.createElement("p");
                    paragraphPrimo.innerHTML = `Primo: ${items[i].primo.nome}`;

                    var paragraphSecondo = document.createElement("p");
                    paragraphSecondo.innerHTML = `Secondo: ${items[i].secondo.nome}`;

                    div.appendChild(paragraphAntipasto);
                    div.appendChild(paragraphPrimo);
                    div.appendChild(paragraphSecondo);

                    fieldset.style.visibility = "visible";
                }
            }
        } else {
            console.error("Errore durante la richiesta");
        } 
    }
    
    request.send();
}