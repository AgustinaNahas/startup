$(document).ready(function(){
	$("#hidden").fadeIn("2000");
});

function getJoke(){
	var configJoke = {
		url: 'http://api.icndb.com/jokes/random',
		dataType: 'json',
		success: function( resp ) {
			$('#hidden').html( resp.value.joke );
		},
		error: function( req, status, err ) {
			document.getElementById("hidden").style.color = '#ff0000';
		}
	}
	// Initiate the request!
	$.ajax(configJoke);
}

// function getJoke(){
// 	var xhttp = new XMLHttpRequest();
// 	xhttp.onreadystatechange = function() {
// 		try {
// 			if (this.readyState==4 && this.status==200) {   
// 				var json = JSON.parse(this.responseText);
// 				document.getElementById("hidden").innerHTML = json.value.joke;
// 			}
// 		}
// 		catch(e) {
// 			alert("Error" + e);  
// 		}
// 	};
// 	xhttp.open("GET", "http://api.icndb.com/jokes/random", true);
// 	xhttp.send();
// }


