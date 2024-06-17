document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("add-task").addEventListener("click", function() {
		document.getElementById("delete-task-checked").checked = false;
	
		var task = document.getElementById("input-task").value;		
		
		var label = document.createElement("label");
		var idLabel = document.createAttribute("id");
		idLabel.value = task;
		
		label.setAttributeNode(idLabel);
		
		var input = document.createElement("input");	
		var type = document.createAttribute("type");
		type.value = "checkbox";
		var id = document.createAttribute("id");
		id.value = task;
		var f = document.createAttribute("onchange");
		f.value = "changeStyle(id)";
		
		input.setAttributeNode(type);
		input.setAttributeNode(id);
		input.setAttributeNode(f);
		
		var span = document.createElement("span");
		span.innerHTML = task;
		
		label.appendChild(input);
		label.appendChild(span);
		
		document.getElementById("div-tasks").appendChild(label);
	});
	
	document.getElementById("delete-task-checked").addEventListener("change", function() {
		var taskToDelete = new Array();
		var inputs = document.getElementsByTagName("input");
		
		/* <--> */
		for(let i = 1; i < inputs.length; i++) { 
			if(inputs[i].type == "checkbox" && inputs[i].checked == true) {
				taskToDelete.push(inputs[i]);
			}
		}
		
		for(let i in taskToDelete) {
			var id = taskToDelete[i].id;
			var labels = document.getElementsByTagName("label");
		
			/* <--> */
			document.getElementById("div-tasks").removeChild(labels.namedItem(id));
		}				
	})
});

function changeStyle(id) {
	var labels = document.getElementsByTagName("label");
	var label = labels.namedItem(id);
	
	var style = document.createAttribute("style");
	style.value = "text-decoration: line-through";
	
	label.setAttributeNode(style);
}
