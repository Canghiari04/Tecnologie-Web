document.addEventListener("DOMContentLoaded", function() {
    var request = new XMLHttpRequest();
    request.open("GET", "http://diiorio.nws.cs.unibo.it/twe/api/bagni/bagni.php", true);

    request.onload = () => {
        /* condizione necessaria per stabilire la correttezza della richiesta avanzata */
        (request.status === 200) ? (getOmbrelloni(JSON.parse(request.response)), createForm(JSON.parse(request.response))) : (console.error("Errore durante la richiesta"))
    }

    request.send();
});

/* inserimento all'interno della tabella dell'informazioni dello stabilimento balneare */
function getOmbrelloni(tokens) {
    for(let i = 0; i < tokens.length; i++) {
        var tr = document.createElement("tr");

        var tdNome = document.createElement("td");
        tdNome.innerHTML = tokens[i].nome;

        var tdDescrizione = document.createElement("td");
        tdDescrizione.innerHTML = tokens[i].tdDescrizione;

        var tdPrezzo = document.createElement("td");
        tdPrezzo.innerHTML = tokens[i].prezzo + " $";

        var tdImg = document.createElement("td");

        var img = document.createElement("img");
        var src = document.createAttribute("src");
                
        /* condizione attuata per accertarsi della disponibilità della postazione, riportanto l'icona del caso e stabilendo il colore della row */
        if(tokens[i].libero) {
            src.value = "http://diiorio.nws.cs.unibo.it/twe/resources/2406a/yes.png";

            var id = document.createAttribute("id");
            id.value = "tr-true"
        } else {
            src.value = "http://diiorio.nws.cs.unibo.it/twe/resources/2406a/no.png";

            var id = document.createAttribute("id");
            id.value = "tr-false"
        }

        img.setAttributeNode(src);
        tdImg.appendChild(img);

        tr.setAttributeNode(id);

        tr.appendChild(tdNome)
        tr.appendChild(tdDescrizione)
        tr.appendChild(tdPrezzo)
        tr.appendChild(tdImg)

        document.getElementById("table-ombrelloni").appendChild(tr);
    }
}

/* creazione del form, da cui saranno visualizzati i preventivi */
function createForm(tokens) {
    var labelPostazione = document.createElement("label");
    labelPostazione.innerHTML = "Postazione";

    var selectPostazione = document.createElement("select");

    var idPostazione = document.createAttribute("id");
    idPostazione.value = "select-postazione";

    selectPostazione.setAttributeNode(idPostazione);

    /* inserimento all'interno della select soprastante delle postazioni usufruibili */
    for(let i = 0; i < tokens.length; i++) {
        var optionPostazione = document.createElement("option");

        if(tokens[i].libero) {
            optionPostazione.innerHTML = tokens[i].nome;

            var valueOption = document.createAttribute("value");
            valueOption.value = tokens[i].prezzo;
            optionPostazione.setAttributeNode(valueOption);

            selectPostazione.appendChild(optionPostazione);
        }
    }

    var labelGiorni = document.createElement("label");
    labelGiorni.innerHTML = "Giorni";

    var selectGiorni = document.createElement("select");

    var idGiorni = document.createAttribute("id");
    idGiorni.value = "select-giorni";

    selectGiorni.setAttributeNode(idGiorni);
    
    /* inserimento all'interno della select dei giorni dispobili per la prenotazione */
    for(let i = 0; i <= 6; i++) {
        var optionGiorno = document.createElement("option");

        optionGiorno.innerHTML = (i + 1);

        var valueOption = document.createAttribute("value");
        valueOption.value = (i + 1);
        optionGiorno.setAttributeNode(valueOption);

        selectGiorni.appendChild(optionGiorno);
    }

    var labelCliente = document.createElement("label");
    labelCliente.innerHTML = "Cliente";

    var inputClient = document.createElement("input");
    inputClient.type = "text";

    document.getElementById("div-form").appendChild(labelPostazione);
    document.getElementById("div-form").appendChild(selectPostazione);
    document.getElementById("div-form").appendChild(labelGiorni);
    document.getElementById("div-form").appendChild(selectGiorni);
    document.getElementById("div-form").appendChild(labelCliente);
    document.getElementById("div-form").appendChild(inputClient);
}

/* funzione adottata per il calcolo del prezzo del preventivo in base ai parametri forniti */
function calculatePrice() {
    var postazione = parseInt(document.getElementById("select-postazione").value);
    var giorni = parseInt(document.getElementById("select-giorni").value);

    document.getElementById("div-prezzo").innerHTML = (postazione * giorni) + " $";
    document.getElementById("div-container-prezzo").style.visibility = "visible";
}