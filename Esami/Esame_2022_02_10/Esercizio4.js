document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("input-date").addEventListener("click", function() {
        var content = document.getElementById("input-date");
        var data = new Date(content.value); 

        if(data.getDay() != 6 && data.getDay() != 0)
            addWorkingDay()
        else
            addHolidayDay()
    });

    function addHolidayDay() {
        var numb = parseInt(document.getElementById("td-holiday-day").textContent) + 1;
        document.getElementById("td-holiday-day").innerHTML = numb;
    }

    function addWorkingDay() {
        var numb = parseInt(document.getElementById("td-working-day").textContent) + 1;
        document.getElementById("td-working-day").innerHTML = numb;
    } 
});