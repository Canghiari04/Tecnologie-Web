$(document).ready(function() {
    $('#button-first-product').click(function() {
        document.getElementById('paragraph-first-product').style = "visibility: visible;";
        addProduct('span-first-product');
    });

    $('#button-second-product').click(function() {
        document.getElementById('paragraph-second-product').style = "visibility: visible;";
        addProduct('span-second-product');
    });

    $('#button-third-product').click(function() {
        document.getElementById('paragraph-third-product').style = "visibility: visible;";
        addProduct('span-third-product');
    });

    function addProduct(id) {
        (parseInt(document.getElementById(id).textContent) < 10) ? document.getElementById(id).textContent = parseInt(document.getElementById(id).textContent) + 1 : alert('Raggiunto il limite per questi prodotto!');
    }
});