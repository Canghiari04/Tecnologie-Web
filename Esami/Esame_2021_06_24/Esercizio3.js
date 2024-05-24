var bagni = 
    [
        {
            "id":"p1",
            "nome":"Standard",
            "descrizione":"Ombrellone con due lettini",
            "prezzo":20,
            "libero":true
        },
        {
            "id":"p2",
            "nome":"Love dogs",
            "descrizione":"Standard, due lettini e spazio ...",
            "prezzo":40,
            "libero":true
        },
        {
            "id":"p3",
            "nome":"Primissima",
            "descrizione":"Prima fila, formato capanna...",
            "prezzo":50,
            "libero":false
        }
    ]

document.addEventListener("DOMContentLoaded", function() {
    var tokens = defineRequest();

    createRows(document.getElementById("rows"), bagni);    
    createOption(document.getElementById("name"), bagni);

    document.getElementById("button-submit").addEventListener("click", function() {
        calculatePrice(document.getElementById("name").value, document.getElementById("days").value);
    })
})

function defineRequest() {
    var request = new XMLHttpRequest();
    request.open("GET", "", true);

    var tokens;

    request.onload = () => {
        if(request.status === 200) {
            tokens = JSON.parse(request.response);
        } else {
            console.error("Errore durante la richiesta");
        }
    }

    return tokens;
}

function createRows(tbody, json) {
    for(let i = 0; i <= json.length - 1; i++) {
        var tr = document.createElement("tr");

        var tdNome = document.createElement("td");
        tdNome.innerHTML = json[i].nome;

        var tdDescrizione = document.createElement("td");
        tdDescrizione.innerHTML = json[i].descrizione;

        var tdPrezzo = document.createElement("td");
        tdPrezzo.innerHTML = json[i].prezzo;

        var tdDisponibilità = document.createElement("td");

        var img = document.createElement("img");

        var src = document.createAttribute("src");
        (json[i].libero) ? (src.value = `http://diiorio.nws.cs.unibo.it/twe/resources/2406a/yes.png`) : (src.value = `http://diiorio.nws.cs.unibo.it/twe/resources/2406a/no.png`)
        img.setAttributeNode(src);

        tdDisponibilità.appendChild(img);

        tr.appendChild(tdNome);
        tr.appendChild(tdDescrizione);
        tr.appendChild(tdPrezzo);
        tr.appendChild(tdDisponibilità);

        tbody.appendChild(tr);
    }
}

function createOption(select, json) {
    for(let i = 0; i <= json.length - 1; i++) {
        var option = document.createElement("option");
        option.innerHTML = json[i].nome;

        var value = document.createAttribute("value");
        value.value = json[i].prezzo;

        option.setAttributeNode(value);

        select.appendChild(option)
    }
}

function calculatePrice(price, days) {
    var total = price * days;
    
    var span = document.getElementById("total");
    span.innerHTML = total + " $";
    span.style.visibility = "visible";
}