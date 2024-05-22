document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("input-date").addEventListener("click", function() {
        var y = new Date(document.getElementById("input-date").value);

        (y.getDay() == 6 || y.getDay() == 0) ? (addWeekend(document.getElementById("weekend"), document.getElementById("weekend").innerHTML)) : (addLavorativo(document.getElementById("lavorativo"), document.getElementById("lavorativo").innerHTML))
    })
})

function addWeekend(label, value) {
    label.innerHTML = parseInt(value) + 1;
}

function addLavorativo(label, value) {
    label.innerHTML = parseInt(value) + 1;
}