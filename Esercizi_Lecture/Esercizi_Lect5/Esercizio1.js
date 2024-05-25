document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("button-product-1").addEventListener("click", function() {
        addProduct("span-product-1", "button-product-1", document.getElementById("span-count-1"))
    })

    document.getElementById("button-product-2").addEventListener("click", function() {
        addProduct("span-product-2", "button-product-2", document.getElementById("span-count-2"))
    
    })

    document.getElementById("button-product-3").addEventListener("click", function() {
        addProduct("span-product-3", "button-product-3", document.getElementById("span-count-3"))
        
    })
})

function addProduct(span, button, count) {
    if (document.getElementById(span).style.visibility == "hidden") {
        document.getElementById(span).style.visibility = "visible";

        count.innerHTML = 1;
    } else {
        if(parseInt(count.innerHTML) < 10) {
            count.innerHTML = parseInt(count.innerHTML) + 1;
        } else {
            document.getElementById(button).disabled = true;
        }
    }
}   