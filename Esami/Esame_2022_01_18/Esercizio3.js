document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("my-span-Abbruzzo").addEventListener("click", function() {
        requestLocalities(document.getElementById("my-span-Abbruzzo").innerHTML);

        /* eliminazione di tutto il contenuto presente all'interno del div-localities */
        document.getElementById("div-localities").innerHTML = "";
    });

    document.getElementById("my-span-Basilicata").addEventListener("click", function() {
        requestLocalities(document.getElementById("my-span-Basilicata").innerHTML);
        document.getElementById("div-localities").innerHTML = "";
    });

    document.getElementById("my-span-Calabria").addEventListener("click", function() {
        requestLocalities(document.getElementById("my-span-Calabria").innerHTML);
        document.getElementById("div-localities").innerHTML = "";
    });

    document.getElementById("my-span-Campania").addEventListener("click", function() {
        requestLocalities(document.getElementById("my-span-Campania").innerHTML);
        document.getElementById("div-localities").innerHTML = "";
    });

    document.getElementById("my-span-EmiliaRomagna").addEventListener("click", function() {
        requestLocalities(document.getElementById("my-span-EmiliaRomagna").innerHTML);
        document.getElementById("div-localities").innerHTML = "";
    });
});

function requestLocalities(name) {
    var request = new XMLHttpRequest();
    request.open("GET", "http://diiorio.nws.cs.unibo.it/twe/api/holidays/index.php", true);

    request.onload = () => {
        /* se lo stato della richieste è andato a buon fine avviene il get di tutte le località della regione */
        (request.status === 200) ? (getLocalities(name, JSON.parse(request.response))) : ("Errore durante la richiesta")
    }
    
    request.send();
}

function getLocalities(name, tokens) {
    var spanCheckBox = document.createElement("span");
    spanCheckBox.textContent = "Confronta le Bandiere Blu in " + name + ':';

    document.getElementById("div-localities").appendChild(spanCheckBox);
            
    /* condizione necessaria per stabilire se la checkbox cliccata coincida con la risposta restituita */
    if(name == tokens.region) {   
        for(let index in tokens) {
            var item = tokens[index];

            if(typeof(item) === "object") {
                var divCheckBox = document.createElement("div");
                        
                for(let i = 0; i < item.length; i++) {
                    var input = document.createElement("input");
                    input.type = "checkbox";

                    var id = document.createAttribute("id");
                    id.value = item[i].name;

                    /* definizione della funzione onclick delle checkbox, per la visualizzazione del contenuto all'interno del div */
                    var click = document.createAttribute("onclick");
                    click.value = "getLocality('" + item[i].name + "')";

                    var value = document.createAttribute("value");
                    value.value = item[i].name;

                    input.setAttributeNode(id);
                    input.setAttributeNode(click);
                    input.setAttributeNode(value);
                            
                    var label = document.createElement("label");
                    label.appendChild(input);
                            
                    /* <0> */
                    label.appendChild(document.createTextNode(item[i].name));

                    divCheckBox.appendChild(label);
                }
                    
                document.getElementById("div-localities").appendChild(divCheckBox);

                /* definizione dei div che contengono le specifiche di ogni località selezionata */
                var divFlex = document.createElement("div");

                var idFlex = document.createAttribute("id");
                idFlex.value = "flex";
                divFlex.setAttributeNode(idFlex);

                var divGrid = document.createElement("div");
                    
                var idGrid = document.createAttribute("id");
                idGrid.value = "grid";
                divGrid.setAttributeNode(idGrid);

                divFlex.appendChild(divGrid);

                document.getElementById("div-localities").appendChild(divFlex);
            }
        }
    }
}

function getLocality(name) {
    var request = new XMLHttpRequest();
    request.open("GET", "http://diiorio.nws.cs.unibo.it/twe/api/holidays/index.php", true);

    request.onload = () => {
        /* condizione necessaria per accertarsi che la richiesta sia andata a buon fine */
        if(request.status !== 200) {
            console.error("Errore nella richiesta");
        } else {
            var tokens = JSON.parse(request.response);

            /* controllo riferito alla proprietà check oppure uncheck della checkbox */
            if(document.getElementById(name).checked) {
                var divFlex = document.getElementById("flex");
                var divGrid = document.getElementById("grid");

                for(index in tokens){
                    var item = tokens[index];
                    
                    for(let i = 0; i < item.length; i++){
                        if(name == item[i].name){
                            addLocality(item[i], divGrid);
                        }
                    }
                }
                
                divFlex.appendChild(divGrid);
                document.getElementById("div-localities").appendChild(divFlex);
            } else {
                document.getElementById("div-" + name).remove();
            }
        }
    }
    
    request.send();
}

/* metodo per l'inserimento di una località all'interno del grid div */
function addLocality(item, divGrid) {
    var divLocality = document.createElement("div");
    
    var classDiv = document.createAttribute("class");
    classDiv.value = "div-locality";
    divLocality.setAttributeNode(classDiv);

    var id = document.createAttribute("id");
    id.value = "div-" + item.name;
    divLocality.setAttributeNode(id);
    
    var h2 = document.createElement("h2");
    h2.innerHTML = item.name;
    
    divLocality.appendChild(h2);

    var p = document.createElement("p");
    
    var img = document.createElement("img")
    var src = document.createAttribute("src");
    src.value = "http://diiorio.nws.cs.unibo.it/twe/resources/1801/" + item.photo;
    img.setAttributeNode(src);
    
    p.appendChild(img);
    
    var a = document.createElement("a");
    a.innerHTML = item.summary;
    var href = document.createAttribute("href");
    href.value = "/localities/" + item.id + "/";
    a.setAttributeNode(href);
    
    p.appendChild(a);
    
    divLocality.appendChild(p);
    divGrid.appendChild(divLocality);
}