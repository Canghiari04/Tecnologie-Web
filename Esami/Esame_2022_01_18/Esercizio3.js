document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("abruzzo").addEventListener("click", function() {
        getCheckboxes(document.getElementById("abruzzo").innerHTML);

        document.getElementById("div-checkboxes").innerHTML = "";
        document.getElementById("div-localities").innerHTML = "";
    })

    document.getElementById("basilicata").addEventListener("click", function() {
        getCheckboxes(document.getElementById("basilicata").innerHTML);

        document.getElementById("div-checkboxes").innerHTML = "";
        document.getElementById("div-localities").innerHTML = "";
    })

    document.getElementById("calabria").addEventListener("click", function() {
        getCheckboxes(document.getElementById("calabria").innerHTML);

        document.getElementById("div-checkboxes").innerHTML = "";
        document.getElementById("div-localities").innerHTML = "";
    })

    document.getElementById("campania").addEventListener("click", function() {
        getCheckboxes(document.getElementById("campania").innerHTML);

        document.getElementById("div-checkboxes").innerHTML = "";
        document.getElementById("div-localities").innerHTML = "";
    })

    document.getElementById("emilia-romagna").addEventListener("click", function() {
        getCheckboxes(document.getElementById("emilia-romagna").innerHTML);

        document.getElementById("div-checkboxes").innerHTML = "";
        document.getElementById("div-localities").innerHTML = "";
    })
})

function getCheckboxes(value) {
    var spanText = document.getElementById("span-region");
    spanText.innerHTML = "Confronta le Bandiere Blu in " + value + ":";

    var request = new XMLHttpRequest();
    request.open("GET", "http://diiorio.nws.cs.unibo.it/twe/api/holidays/index.php", true);

    request.onload = () => {
        (request.status === 200) ? (createCheckbox(JSON.parse(request.response), value)) : (console.error("Errore nella richiesta."))
    }

    request.send();
}

function createCheckbox(tokens, value) {
    for(index in tokens) {
        var item = tokens[index];

        if(typeof(item) == "object") {
            var divCheckboxes = document.getElementById("div-checkboxes");

            for(let i = 0; i <= item.length - 1; i++) {
                var label = document.createElement("label"); 
        
                var input = document.createElement("input");
        
                var type = document.createAttribute("type");
                type.value = "checkbox"; 
        
                var value = document.createAttribute("value");
                value.value = item[i].name; 
        
                var click = document.createAttribute("onclick");
                click.value = "getLocality(event)";
                
                input.setAttributeNode(type);
                input.setAttributeNode(value);
                input.setAttributeNode(click);
                
                var name = document.createTextNode(item[i].name);
        
                label.appendChild(input);
                label.appendChild(name); 
                divCheckboxes.appendChild(label);
            }  
        }
    }
}

/* <--> */
function getLocality(event) {
    var request = new XMLHttpRequest();
    request.open("GET", "http://diiorio.nws.cs.unibo.it/twe/api/holidays/index.php", true);

    request.onload = () => {
        (request.status === 200) ? (createLocality(JSON.parse(request.response), document.getElementById("div-localities"), event.target)) : (console.error("Errore nella richiesta."))
    }

    request.send();
}

function createLocality(tokens, divLocalities, locality) {
    /* <--> */
    if(divLocalities.childElementCount <= 1) {
        for(index in tokens) {
            var item = tokens[index];
            
            if(typeof(item) == "object") {
                for(let i = 0; i <= item.length - 1; i++) {
                    if(locality.value == item[i].name) {
                        var div = document.createElement("div");
                        
                        var h2 = document.createElement("h2");
                        h2.innerHTML = item[i].name;
                    
                        var p = document.createElement("p");
                        var text = document.createTextNode(item[i].summary)
                        
                        var img = document.createElement("img");
                        var src = document.createAttribute("src");

                        /* <--> */
                        src.value = `http://diiorio.nws.cs.unibo.it/twe/resources/1801/${item[i].photo}`;

                        var a = document.createElement("a");
                        var href = document.createAttribute("href");

                        /* <--> */
                        href.value = `/place/${item[i].id}/`;

                        a.setAttributeNode(href);
                        a.appendChild(text);
                        
                        img.setAttributeNode(src);
                        
                        p.appendChild(img);
                        p.appendChild(a);
                        
                        div.appendChild(h2);
                        div.appendChild(p);
                        
                        divLocalities.appendChild(div);
                    }
                }
            }   
        }
    }
}