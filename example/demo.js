var XMLHttpRequest = require("./build/rn-XMLHttpRequest");

var xhr = new XMLHttpRequest.XMLHttpRequest();

xhr.onreadystatechange = function() {
	console.log("State: " + this.readyState);
	
	if (this.readyState === 4) {
		console.log("Complete.\nBody length: " + this.responseText.length);
		console.log("Body:\n" + this.responseText);
	}
};

xhr.open("POST", "https://jsonplaceholder.typicode.com/todos/1", {a: 1});
xhr.send();
xhr.addEventListener('error', console.log)