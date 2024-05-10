document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByTagName("button")[0].addEventListener("click", function() {
        document.getElementsByTagName("button")[0].disabled = true;
        document.getElementById("p-timer").style.visibility = "visible";

        showTime(parseInt(document.getElementsByTagName("input")[0].value));
    });        
});

function showTime(second) {
    var timer = setInterval(function() {
        document.getElementById("p-timer").innerHTML = second;

        if(second > 0) {
            second--;
        } else {
            document.getElementById("p-timer").innerHTML = "Fatto!";
            document.getElementsByTagName("button")[0].disabled = false;

            /* fondamentale, altrimenti dopo la prima computazione alterna "Fatto!" con il nuovo input di secondi dato */
            clearInterval(timer);
        }
    }, 1000);
}