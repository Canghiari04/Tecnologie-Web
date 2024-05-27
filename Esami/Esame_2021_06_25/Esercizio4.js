document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("button-start").addEventListener("click", function() {
        document.getElementById("button-start").disabled = true;

        var time = document.getElementById("input-time").value;

        var output = document.getElementById("output-time");
        output.style.visibility = "visible";

        var timer = setInterval(function() {
            output.innerHTML = time;

            if(time > 0) {
                time--;
            } else {
                output.innerHTML = "Fatto!"
                document.getElementById("button-start").disabled = false;
                clearInterval(timer);
            }
        }, 1000);
    })
});