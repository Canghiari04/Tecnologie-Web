document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("button-submit").addEventListener("click", function() {
        var span = document.getElementById("span-timer");
        var time = document.getElementById("input-time").value;

        span.style.visibility = "visible";
        document.getElementById("button-submit").disabled = true;

        /* <--> */
        var timer = setInterval(function() {
            span.innerHTML = time;

            if(time > 0) {
                time--;
            } else {
                span.innerHTML = "Fatto!"
                clearInterval(timer);

                document.getElementById("button-submit").disabled = false;
            }
        } , 1000);
    })
})