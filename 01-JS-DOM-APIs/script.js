$(document).ready(function(){
    $("#unSection").fadeIn("slow");
});

function getJoke(){
	fetch('http://api.icndb.com/jokes/random', {mode: 'cors'})  
	.then(function(response) {  
	alert(response.text());  
	})  
	.then(function(text) {  
	console.log('Request successful', text);  
	})  
	.catch(function(error) {  
	log('Request failed', error)  
	});		
}