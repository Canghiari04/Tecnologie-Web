document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("a-africa").addEventListener("click", function() {
        changeCSS(document.getElementById("a-africa"));
        getResources(document.getElementById("a-africa").name);
    })

    document.getElementById("a-europa").addEventListener("click", function() {
        changeCSS(document.getElementById("a-europa"));
        getResources(document.getElementById("a-europa").name);
    })

    document.getElementById("a-oceania").addEventListener("click", function() {
        changeCSS(document.getElementById("a-oceania"));
        getResources(document.getElementById("a-oceania").name);
    })

    document.getElementById("a-asia").addEventListener("click", function() {
        changeCSS(document.getElementById("a-asia"));
        getResources(document.getElementById("a-asia").name);
    })
})

function changeCSS(country) {
    var _class = document.createAttribute("class");
    _class.value = "selected"; 

    country.setAttributeNode(_class);
}

function getResources(country) {
    document.getElementById("header-country").innerHTML = `Le fantastiche città da visitare in ${country}:`;

    var request = new XMLHttpRequest();
    request.open("GET", "", true);

    request.onload = () => {
        (request.status === 200) ? (addList(country, JSON.parse(request.response), document.getElementById("ol-cities"))) : (console.error("Errore durante la richiesta"))
    }

    request.send();
}

function addList(country, items, list) {
    for(let i = 0; i <= items.length - 1; i++) {
        if(items[i].id === country) {
            /* add di tutte le città all'interno della lista, a cui si applica la proprietà onclick, per visualizzare correttamente il contenuto del city header */
        }
    }
}

function changeCity() {
    /* si dovrebbe agire sul city header, rispetto al radio button selezionato */
}