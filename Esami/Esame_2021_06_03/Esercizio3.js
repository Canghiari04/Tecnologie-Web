const json = 
    [
        {
            "id" : "delfino",
            "nome": "Resort Delfino",
            "indirizzo" : "Lungomare Sud - Rimini",
            "descrizione" : "Un resort meraviglioso con vista delfinario..."
        },
        {
            "id" : "dune",
            "nome": "Resort Dune",
            "indirizzo" : "Lungomare Nord - Rimini",
            "descrizione" : "Le dune...che meraviglia..."
        }
    ]

document.addEventListener("DOMContentLoaded", function() {
    /* servizio non disponibile */
    getResources(document.getElementById("div-resorts"));

    /* dovrebbe essere posta all'interno del costrutto condizionale di getResources() */
    createPage(document.getElementById("div-resorts"), json)

    /* <--> */
    document.getElementById("radio-delfino").addEventListener("change", function() {
        changeDescription(document.getElementById("descrizione-resort"), document.getElementById("radio-delfino").value);
    })

    document.getElementById("radio-dune").addEventListener("change", function() {
        changeDescription(document.getElementById("descrizione-resort"), document.getElementById("radio-dune").value);
    })
})

function getResources(div) {
    var request = new XMLHttpRequest();
    request.open("GET", "", true);

    request.onload = () => {
        (request.status === 200) ? (console.log("Richiesta andata a buon fine")) : (console.error("Errore durante la richiesta"))
    }

    request.send()
}

function createPage(div, json) {
    for(let i = 0; i <= json.length - 1; i++) {
        var divResort = document.createElement("div");

        var img = document.createElement("img");

        var href = document.createAttribute("href")
        href.value = `http://diiorio.nws.cs.unibo.it/twe/api/resort/images/${json[i].id}.png`;

        img.setAttributeNode(href);

        var paragraphName = document.createElement("p")
        var spanName = document.createElement("span") 

        spanName.innerHTML = "Nome : ";
        paragraphName.appendChild(spanName);
        paragraphName.appendChild(document.createTextNode(json[i].nome));

        var paragraphIp = document.createElement("p")
        var spanIp = document.createElement("span") 

        spanIp.innerHTML = "Indirizzo : ";
        paragraphIp.appendChild(spanIp);
        paragraphIp.appendChild(document.createTextNode(json[i].indirizzo));

        var radio = document.createElement("input");

        var type = document.createAttribute("type");
        type.value = "radio";

        var id = document.createAttribute("id");
        id.value = `radio-${json[i].id}`;

        var value = document.createAttribute("value");
        value.value = json[i].descrizione;

        radio.setAttributeNode(type);
        radio.setAttributeNode(id);
        radio.setAttributeNode(value);

        divResort.appendChild(img);
        divResort.appendChild(paragraphName);
        divResort.appendChild(paragraphIp);
        divResort.appendChild(radio);

        div.appendChild(divResort);
    }
}

function changeDescription(textarea, value) {
    textarea.innerHTML = "";
    textarea.innerHTML = value;
}