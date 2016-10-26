function getJoke(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			document.getElementById("hidden").innerHTML = json.value.joke;
			}
	};
	xhttp.open("GET", "http://api.icndb.com/jokes/random", true);
	xhttp.send();
}

