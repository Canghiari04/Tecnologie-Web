document.addEventListener("DOMContentLoaded", function() {
    getNews();
    getTopics();
})

function getNews() {
    var request = new XMLHttpRequest();
    request.open("GET", "http://diiorio.nws.cs.unibo.it/twe/api/eu/news.php", true);
    request.onload = () => {
        (request.status === 200) ? (addNews(request.response)) : (console.error("Errore durante la richiesta"));
    }

    request.send();
}

function getTopics() {
    var request = new XMLHttpRequest();
    request.open("GET", "http://diiorio.nws.cs.unibo.it/twe/api/eu/topics.php", true);
    request.onload = () => {
        (request.status === 200) ? (addTopics(request.response)) : (console.error("Errore durante la richiesta"));
    }

    request.send();
}

function addNews(response) {
    var tokens = JSON.parse(response);

    for(index in tokens) {
        var items = tokens[index];

        if(typeof(items) == "object") {
            for(let i = 0; i <= (items.length - 1); i++) {
                var divNews = document.getElementById("div-news");

                var div = document.createElement("div");

                var span = document.createElement("span");
                span.innerHTML = items[i].type.toUpperCase() + items[i].date;

                var a = document.createElement("a");

                var href = document.createAttribute("href");
                href.value = `/news/${items[i].id}`;

                a.setAttributeNode(href);

                var p = document.createElement("p");
                p.innerHTML = items[i].content;

                a.appendChild(p);

                div.appendChild(span);
                div.appendChild(a);

                divNews.appendChild(div);
            }
        }
    }
}

function addTopics(response) {
    var tokens = JSON.parse(response);

    for(index in tokens) {
        var item = tokens[index];

        var divTopics = document.getElementById("div-topics");

        var a = document.createElement("a");

        var div = document.createElement("div");

        var click = document.createAttribute("onclick");
        click.value = "changeColor()";

        div.setAttributeNode(click);

        var h2 = document.createElement("h2");
        h2.innerHTML = item.label;

        var p = document.createElement("p");
        p.innerHTML = item.title;

        div.appendChild(h2);
        div.appendChild(p);
            
        a.appendChild(div);

        divTopics.appendChild(a);
    }
}

function changeColor() {
    /* <--> */
    var element = event.target;

    (element.style.backgroundColor != "lightblue") ? (element.style.backgroundColor = "lightblue") : (element.style.backgroundColor = "white")
}