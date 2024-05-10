document.addEventListener('DOMContentLoaded', function() {
    var requestNews = new XMLHttpRequest();
    requestNews.open("GET", "http://diiorio.nws.cs.unibo.it/twe/api/eu/news.php", true);

    var requestTopics = new XMLHttpRequest();
    requestTopics.open("GET", "http://diiorio.nws.cs.unibo.it/twe/api/eu/topics.php", true);
    
    requestNews.onload = () => {
        (requestNews.status == '200') ? getNews(requestNews, document.getElementById("div-news")) : console.log("Errore durante la richiesta!") 
    }

    requestNews.send();
    
    requestTopics.onload = () => {
        (requestTopics.status == '200') ? getTopics(requestTopics, document.getElementById("div-topics")) : console.log("Errore durante la richiesta!") 
    }

    requestTopics.send();   
});

function getNews(requestNews, idNews) {
    var tokensNews = JSON.parse(requestNews.response);

    for(let index in tokensNews) {
        var item = tokensNews[index];

        if(typeof(item) == "object") {
            for(let index in item) {
                var divNew = document.createElement("div");
                
                var pTitle = document.createElement("p");
                pTitle.textContent = item[index].type + " | " + item[index].date;
                
                var pContent = document.createElement("p"); 
                pContent.textContent = item[index].content;
                
                var aNew = document.createElement("a");
                var attribute = document.createAttribute("href");
                attribute.value = "/news/" + item[index].id + "/";
                aNew.setAttributeNode(attribute);
                aNew.appendChild(pContent);

                divNew.appendChild(pTitle);
                divNew.appendChild(aNew);
                
                idNews.appendChild(divNew);
            }
        }
    }
}

function getTopics(requestTopics, idTopics) {
    var tokensTopics = JSON.parse(requestTopics.response);

    for(let index in tokensTopics) {
        var item = tokensTopics[index];

        var div = document.createElement("div");
        var idDiv = document.createAttribute("onclick");
        idDiv.value = "changeColor()";
        div.setAttributeNode(idDiv);

        var h2 = document.createElement("h2");
        h2.innerHTML = item.label;
    
        var p = document.createElement("p");
        p.innerHTML = item.title;
    
        var aLink = document.createElement('a');
        var attribute = document.createAttribute("href");
        attribute.value = "/topics/" + item.link + '/';
        aLink.setAttributeNode(attribute);
        aLink.appendChild(h2);
    
        div.appendChild(aLink);
        div.appendChild(p);
    
        idTopics.appendChild(div);
    }
}

function changeColor() {
    /* <--> */
    var element = event.target;

    if(element.style.backgroundColor == "white")
        element.style.backgroundColor = "lightBlue";
    else 
        element.style.backgroundColor = "white";
}