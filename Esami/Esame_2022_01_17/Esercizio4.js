/* focus di questo esercizio è relativo al corretto parsing del textContent dei paragrafi in intero */
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("first-button").addEventListener("click", function() {
        setNumber(document.getElementById("first-input").value, document.getElementById("first-p"));
    });

    document.getElementById("second-button").addEventListener("click", function() {
        setNumber(document.getElementById("second-input").value, document.getElementById("second-p"));
    });
});

function setNumber(value, paragraph) {
    console.log(value, paragraph);
    (parseInt(value) % 2 == 0) ? paragraph.style.color = "red" : paragraph.style.color = "black"
    paragraph.style.visibility = "visible";
    paragraph.textContent = value;
}

function addFirstNumber() {
    var numberIncreased = parseInt(document.getElementById("first-p").textContent) + 1;
    (numberIncreased % 2 == 0) ? document.getElementById("first-p").style.color = "red" : document.getElementById("first-p").style.color = "black"
    document.getElementById("first-p").textContent = numberIncreased;
}

function addSecondNumber() {
    var numberIncreased = parseInt(document.getElementById("second-p").textContent) + 1;
    (numberIncreased % 2 == 0) ? document.getElementById("second-p").style.color = "red" : document.getElementById("second-p").style.color = "black"
    document.getElementById("second-p").textContent = numberIncreased;
}