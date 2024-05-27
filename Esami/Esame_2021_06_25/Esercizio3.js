document.addEventListener("DOMContentLoaded", function() {
    getResources();
})

function getResources() {
    var request = new XMLHttpRequest;
    request.open("GET", "http://diiorio.nws.cs.unibo.it/twe/api/orto/articoli.php", true);

    request.onload = () => {
        (request.status === 200) ? (addArticles(JSON.parse(request.response))) : (console.error("Errore durante la richiesta"))
    }

    request.send();
}

function addArticles(tokens) {
    var divGrid = document.getElementById("div-grid");

    /* sort dell'array secondo la data di pubblicazione */
    var items = sortArray(tokens);

    for(index in items) {
        var item = items[index];

        var div = document.createElement("div");

        var style = document.createAttribute("style");
        style.value = `background-image: url(http://diiorio.nws.cs.unibo.it/twe/resources/2406b/immagini/${item.immagine})`;

        var p = document.createElement("p");
        
        var a = document.createElement("a");
        a.innerHTML = item.titolo;
        
        var href = document.createAttribute("href");
        href.value = `/${item.id}`;
        
        a.setAttributeNode(href);
        p.appendChild(a);
        
        div.setAttributeNode(style);
        div.appendChild(p);

        divGrid.appendChild(div);
    }
}

/* <--> */
function sortArray(tokens) {
    tokens.sort((a, b) => {
        var a_data = a.data_pubblicazione;
        var b_data = b.data_pubblicazione;

        if(a_data > b_data) {
            return -1;
        } 
        if(a_data < b_data) {
            return 1;
        }

        return 0;
    });

    return tokens;
}