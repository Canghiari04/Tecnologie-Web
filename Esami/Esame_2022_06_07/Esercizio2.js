document.addEventListener("DOMContentLoaded", function() {
    var buttonStart = document.getElementById("button-start");
    buttonStart.addEventListener('click', function() {
        var second = document.getElementById("input-seconds").value;
        
        showTime(second, buttonStart, document.getElementById("paragraph-time"));
    });

    function showTime(second, buttonStart, idParagraphTime) {
        idParagraphTime.innerHTML = second;
        idParagraphTime.style.visibility = "visible";
        buttonStart.disabled = true;

        var timer = setInterval(function() {
            idParagraphTime.innerHTML = second;

            if(second != 0) {
                second--;
            } else {
                idParagraphTime.innerHTML = "Fatto!";
                buttonStart.disabled = false;
                clearInterval(timer); 
            }
        }, 1000); 
    }
});