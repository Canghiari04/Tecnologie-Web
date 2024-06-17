document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("button-add").addEventListener("click", function() {        
        var input = document.createElement("input");

        var idInput = document.createAttribute("id");
        idInput.value = document.getElementById("input-text").value;
        
        var type = document.createAttribute("type");
        type.value = "checkbox";

        var fun = document.createAttribute("onclick");
        fun.value = "checkTask(id)";
        
        input.setAttributeNode(idInput);
        input.setAttributeNode(type);
        input.setAttributeNode(fun);

        var label = document.createElement("label");

        var idLabel = document.createAttribute("id");
        idLabel.value = document.getElementById("input-text").value;

        label.setAttributeNode(idLabel);

        label.appendChild(input);
        label.appendChild(document.createTextNode(document.getElementById("input-text").value));

        document.getElementById("div-checkbox").appendChild(label);
    })

    document.getElementById("button-delete").addEventListener("click", function() {        
        var checked = new Array();
        var inputs = document.getElementsByTagName("input");

        for(let i = 0; i < inputs.length; i++) {
            if(inputs[i].type == "checkbox" && inputs[i].checked == true) {
                checked.push(inputs[i].id)
            }
        }

        var labels = document.getElementsByTagName("label");

        for(let i = 0; i < checked.length; i++) {
            var label = labels.namedItem(checked[i]);
            document.getElementById("div-checkbox").removeChild(label);
        }
    })
});

function checkTask(id) {
    var labels = document.getElementsByTagName("label");
    var label = labels.namedItem(id);

    var style = document.createAttribute("class");
    style.value = "checked-list";

    label.setAttributeNode(style);
}