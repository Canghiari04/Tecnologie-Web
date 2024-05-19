document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("a-africa").addEventListener("click", function() {
        getCities(document.getElementById("list-cities"), document.getElementById("a-africa").innerHTML)
    })

    document.getElementById("a-europe").addEventListener("click", function() {
        getCities(document.getElementById("list-cities"), document.getElementById("a-europe").innerHTML)
    })

    document.getElementById("a-australia").addEventListener("click", function() {
        getCities(document.getElementById("list-cities"), document.getElementById("a-australia").innerHTML)
    })

    document.getElementById("a-asia").addEventListener("click", function() {
        getCities(document.getElementById("list-cities"), document.getElementById("a-asia").innerHTML)
    })
})

function getCities(listCities, typeContinent) {
    /*
     * ATTENZIONE --> Il servizio .php a cui connettersi è disabilitato
     * Dato che il servizio è disabilitato, definisco qui di seguito come avrei proceduto.
     * 
     * Acquisita la lista delle città "listCities" avrei immesso gli input al suo interno
     * mediante un ciclo for. La tipologia di città inserite è strettamente dipendente dalla
     * tipologia di continente; in base al risultato della funzione "contains(typeContinent)"
     * la lista sarebbe stata costruita dinamicamente.   
     */
}