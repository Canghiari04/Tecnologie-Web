$(document).ready(function() {
    getData();
});

function getData() {
    const request = new XMLHttpRequest();
    request.open("GET", "http://diiorio.nws.cs.unibo.it/twe/api/games/index.php", true);
    
    request.onload = () => {
        if(request.status === 200) {
            var data = JSON.parse(request.response);
            loadSections(data);
            loadNews(data);
        } else {
            console.error("Errore nel caricamento dei dati.")
        }
    }

    request.send();    
}

function loadSections(data) {
    for(index in data.sections) {
        var item = data.sections[index];
        
        var a = document.createElement('a');
        a.textContent = item.label;
        
        var link = document.createAttribute('href');
        link.value = "/" + item.section + index;
        a.setAttributeNode(link);
        
        document.getElementById("div-navbar").appendChild(a);
    }
}

function loadNews(data) {
    for(index in data.news) {
        var item = data.news[index];
        console.log(item);

            var divNew = document.createElement("div");
        document.getElementById("div-news").appendChild(divNew);

        var divImage = document.createElement("div");
        var image = document.createElement("img");
        var src = document.createAttribute("src");
        src.value = "http://diiorio.nws.cs.unibo.it/twe/resources/1701/" + item.copertina;
        image.setAttributeNode(src);
        divImage.appendChild(image);

        divNew.appendChild(divImage);
                
        var divArticle = document.createElement("div");
        var h2 = document.createElement("h2");
        h2.textContent = item.titolo;
        var p = document.createElement("p");
        p.textContent = item.articolo;
        divArticle.appendChild(h2);
        divArticle.appendChild(p);

        divNew.appendChild(divArticle);

        tdText = document.createElement("td");
        tdText.textContent = "CONDIVIDI";

        tdImage = document.createElement("td");
        var imageTd = document.createElement("img");
        var src = document.createAttribute("src");
        src.value = "http://diiorio.nws.cs.unibo.it/twe/resources/1701/" + item.copertina;
        imageTd.setAttributeNode(src);
        tdImage.appendChild(imageTd);   

        var tr = document.createElement("tr");
        tr.appendChild(tdText);
        tr.appendChild(tdImage);

        var tableShare = document.createElement("table");
        tableShare.appendChild(tr);

        divArticle.appendChild(tableShare);
    }
}