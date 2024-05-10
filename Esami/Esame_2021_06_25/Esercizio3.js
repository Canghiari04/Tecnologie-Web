document.addEventListener("DOMContentLoaded", function() {
    var request = new XMLHttpRequest();
    request.open("GET", "http://diiorio.nws.cs.unibo.it/twe/api/orto/articoli.php", true);
    
    request.onload = () => {
        (request.status == '200') ? (getNews(request.response)) : (console.log("Errore durante la richiesta!"));
    }

    request.send();
});

function getNews(response) {
    var array = new Array();
    var tokens = JSON.parse(response);

    tokens.sort((a, b) => {
        var dataA = parseInt(a.data_pubblicazione);
        var dataB = parseInt(b.data_pubblicazione);

        if(parseInt(dataA - dataB) > 0) {
            return 1;
        } else if(parseInt(dataA - dataB) < 0) {
            return -1;
        } else {
            return 0;
        }
    });

    for(let index in tokens) {
        var item = tokens[index];
        
        if(typeof(item) == "object") {
            var a = document.createElement('a');

            var id = document.createAttribute("id");
            id.value = "div-article-" + (parseInt(index) + 1);
            var href = document.createAttribute("href");
            href.value = "fakePage.hmtl";

            a.setAttributeNode(id);
            a.setAttributeNode(href);

            var div = document.createElement("div");
            var p = document.createElement("p");

            var span = document.createElement("span");
            span.innerHTML = item.titolo;
            var idSpan = document.createAttribute("id");
            idSpan.value = "span-article-" + (parseInt(index) + 1);

            span.setAttributeNode(idSpan);

            p.appendChild(span);
            div.appendChild(p);
            a.appendChild(div);

            document.getElementsByClassName("container")[0].appendChild(a);
        }
    }
}