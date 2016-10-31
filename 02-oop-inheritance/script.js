var movie1 = Movie('What a wonderful life', 1946, '2h 10min');
var movie2 = Movie('The Shining', 1980, '2h 26min');
var movie3 = Movie('Amadeus', 1984, '2h 40min');
var movie4 = Movie('Back to the Future', 1985, '1h 56min');
var movie5 = Movie('The Fountain', 2006, '1h 36min');

function Movie(title, year, duration){
	return {
		title,
		year,
		duration
	}
}

 
function doSomething(e) {
    alert("Event is called: " + e.type);
}

var an_event = new CustomEvent("event");

 
function EventEmmiter(){
	var myEvent, func;
	return {
		myEvent, func, 
		on: function(one_event, fnc){
			myEvent = one_event;
			func = fnc;
			document.addEventListener(myEvent.type, func, false);
		},
		emit: function(){
			document.dispatchEvent(myEvent)
		},
		off: function(){
			document.removeEventListener(myEvent.type, func, false)
		}
	}
}

