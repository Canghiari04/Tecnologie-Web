document.addEventListener('DOMContentLoaded', function() {
    var lightGreen = document.getElementsByClassName('circle')[0];
    lightGreen.style.backgroundColor = 'green';
});

function getColor() {
    var lights = document.querySelectorAll('.circle');

    for(let i = 0; i <= (lights.length - 1); i++) {
        if(lights[i].id === "circle1" && lights[i].style.backgroundColor == "green") {
            lights[i].style.backgroundColor = "white";
            changeColor('circle2');
            break;
        } else if(lights[i].id === "circle2" && lights[i].style.backgroundColor == "orange") {
            lights[i].style.backgroundColor = "white";
            changeColor('circle3');
            break;
        } else if(lights[i].id === "circle3" && lights[i].style.backgroundColor == "red") {
            lights[i].style.backgroundColor = "white";
            changeColor('circle1');
            break;
        }
    }
}

function changeColor(id) {
    if(id == 'circle1') {
        document.getElementById(id).style.backgroundColor = "green";
    } else if(id == 'circle2') {
        document.getElementById(id).style.backgroundColor = "orange";
    } else if(id == 'circle3') {
        document.getElementById(id).style.backgroundColor = "red";
    }
}
