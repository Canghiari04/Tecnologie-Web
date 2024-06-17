document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("textarea-to-count").disabled = false;
    document.getElementById("textarea-to-count").value = "";

    document.getElementById("textarea-to-count").addEventListener("input", function() {
        var text = document.getElementById("textarea-to-count").value;
        
        var words = text.split(' ');
        var lengthWords = words.length;
        
        if((300 - text.length) <= 0) {
            document.getElementById("textarea-to-count").disabled = true;
        } else {
            document.getElementById("span-characters").innerHTML = text.length;
            document.getElementById("span-words").innerHTML = lengthWords;
            document.getElementById("span-last-words").innerHTML = 300 - text.length;
        }
    });

    document.getElementById("button-reset").addEventListener("click", function() {
        document.getElementById("textarea-to-count").disabled = false;
        document.getElementById("textarea-to-count").value = "";
        document.getElementById("span-characters").innerHTML = 0;
        document.getElementById("span-words").innerHTML = 0;
        document.getElementById("span-last-words").innerHTML = 300;
    });
});