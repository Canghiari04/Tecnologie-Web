document.addEventListener("DOMContentLoaded", function() {
    getNews(document.getElementsByTagName("div")[0]);
});

function getNews(divContainer) {
    var request = new XMLHttpRequest();

    /* modo per costruire richiesta async */
    request.open("GET", "http://diiorio.nws.cs.unibo.it/twe/api/carlino2/news.php", true);
    
    request.onload = () => {
        (request.status == '200') ? (printNews(request.response, divContainer)) : (console.log("Errore durante la richiesta."));
    }

    request.send();
}

function printNews(response, divContainer) {
    var tokens = JSON.parse(response);

    for(let index in tokens) {
        var item = tokens[index];

        (item.type == "cronaca") ? (printCronaca(item, divContainer)) : (printAnother(item, divContainer));
    }
}

function printCronaca(item, divContainer) {
    var div = document.createElement("div");

    var divImage = document.createElement("div");

    var imgBackground = document.createElement("img");
    var srcBackground = document.createAttribute("src");
    srcBackground.value = "http://diiorio.nws.cs.unibo.it/twe/resources/1409/" + item.img + "";
    imgBackground.setAttributeNode(srcBackground);

    var divType = document.createElement("div");

    var imgType = document.createElement("img");
    var srcType = document.createAttribute("src");
    srcType.value = "http://diiorio.nws.cs.unibo.it/twe/resources/1409/paywall-blue.svg";
    imgType.setAttributeNode(srcType);

    var paragraphType = document.createElement("p");
    paragraphType.innerHTML = "CRONACA";

    divType.appendChild(imgType);
    divType.appendChild(paragraphType);

    divImage.appendChild(imgBackground);
    divImage.appendChild(divType);

    var a = document.createElement('a');
    var href = document.createAttribute("href");
    href.value = "/news/" + item.id_news + "/";
    a.setAttributeNode(href);

    var h2 = document.createElement("h2");
    h2.innerHTML = item.title;

    var paragraph = document.createElement('p');
    paragraph.innerHTML = item.subtitle;

    a.appendChild(h2);
    a.appendChild(paragraph);

    var paragraphAuthor = document.createElement('p');
    paragraphAuthor.innerHTML = "di ";

    var span = document.createElement("span");
    span.innerHTML = item.by.toUpperCase();

    paragraphAuthor.appendChild(span);

    div.appendChild(divImage);
    div.appendChild(a);
    div.appendChild(paragraphAuthor);

    divContainer.appendChild(div);
}

function printAnother(item, divContainer) {
    var div = document.createElement("div");

    var divImage = document.createElement("div");

    var imgBackground = document.createElement("img");
    var srcBackground = document.createAttribute("src");
    srcBackground.value = "http://diiorio.nws.cs.unibo.it/twe/resources/1409/" + item.img + "";
    imgBackground.setAttributeNode(srcBackground);

    var divType = document.createElement("div");

    var paragraphType = document.createElement("p");
    paragraphType.innerHTML = "CRONACA";

    divType.appendChild(paragraphType);

    divImage.appendChild(imgBackground);
    divImage.appendChild(divType);

    var a = document.createElement('a');
    var href = document.createAttribute("href");
    href.value = "/news/" + item.id_news + "/";
    a.setAttributeNode(href);

    var h2 = document.createElement("h2");
    h2.innerHTML = item.title;

    var paragraph = document.createElement('p');
    paragraph.innerHTML = item.subtitle;

    a.appendChild(h2);
    a.appendChild(paragraph);

    var paragraphAuthor = document.createElement('p');
    paragraphAuthor.innerHTML = "di ";

    var span = document.createElement("span");
    span.innerHTML = item.by.toUpperCase();

    paragraphAuthor.appendChild(span);

    div.appendChild(divImage);
    div.appendChild(a);
    div.appendChild(paragraphAuthor);

    divContainer.appendChild(div);
}