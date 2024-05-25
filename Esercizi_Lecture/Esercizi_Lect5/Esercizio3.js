document.addEventListener("DOMContentLoaded", function() {
    getEvents()
})

function getEvents() {
    var request = new XMLHttpRequest();
    request.open("GET", "http://diiorio.nws.cs.unibo.it/twe/07.06.2022a/api/index.php", true);

    /* <--> */
    request.onload = () => {
        (request.status === 200) ? (addEvents(document.getElementById("div-events"), JSON.parse(request.response))) : (console.error("Errore durante la richiesta"))
    }

    request.send();
}

/* <--> */
function addEvents(divEvents, items) {
    for(let i = 0; i <= items.length - 1; i++) {
        if(items[i].evidenza == true) {
            var divEvent = document.createElement("div");

            var divName = document.createElement("div");
            var spanName = document.createElement("span");
            var aName = document.createElement("a");
            var hrefName = document.createAttribute("href");
            hrefName.value = "";

            aName.setAttributeNode(hrefName);
                
            var bName = document.createElement("b");
            bName.innerHTML = items[i].title;
                
            aName.appendChild(bName);
            spanName.appendChild(aName);
                
            var spanTime = document.createElement("span");
            spanTime.innerHTML = `${items[i].n_biglietti} biglietti disponibili`;

            divName.appendChild(spanName);
            divName.appendChild(spanTime);

            var divDate = document.createElement("div");
            var spanDate = document.createElement("span");
            spanDate.innerHTML = items[i].time;

            var spanStartHour = document.createElement("span");
            spanStartHour.innerHTML = items[i].ora_min;

            var span = document.createElement("span");
            span.innerHTML = "-";

            var spanEndHour = document.createElement("span");
            spanEndHour.innerHTML = items[i].ora_max;

            divDate.appendChild(spanDate);
            divDate.appendChild(spanStartHour);
            divDate.appendChild(span);
            divDate.appendChild(spanEndHour);

            var divLocality = document.createElement("div");
            var spanLocality = document.createElement("div");
            spanLocality.innerHTML = items[i].place;

            divLocality.appendChild(spanLocality);

            var divTickets = document.createElement("div");
            var aTickets = document.createElement("a");
            aTickets.innerHTML = "Acquista Biglietti";

            var hrefTickets = document.createAttribute("href");
            hrefTickets.value = `/id/${items[i].id}`;

            aTickets.setAttributeNode(hrefTickets);

            divTickets.appendChild(aTickets);

            divEvent.appendChild(divName);
            divEvent.appendChild(divDate);
            divEvent.appendChild(divLocality);
            divEvent.appendChild(divTickets);

            divEvents.appendChild(divEvent);
        }
    }    
}