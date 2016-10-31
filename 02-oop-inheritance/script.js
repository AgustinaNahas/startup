var movie1 = add_movie('What a wonderful life', 1946, '2h 10min');
var movie2 = add_movie('The Shining', 1980, '2h 26min');
var movie3 = add_movie('Amadeus', 1984, '2h 40min');
var movie4 = add_movie('Back to the Future', 1985, '1h 56min');
var movie5 = add_movie('The Fountain', 2006, '1h 36min');


function add_movie(title, year, duration){
	return {
		title,
		year,
		duration,
		play: function(){alert('play')},
		pause: function(){alert('pause')},
		resume: function(){alert('resume')}
	}
}

play = function(){ alert('play') };
pause = function(){ alert('pause') };
resume = function(){ alert('resume') };

 
function doSomething(e) {
    alert("Event is called: " + e.type);
}
 
function new_event_listener(title, year, duration){
	var myEvent = new CustomEvent("myEvent");
	return {
		myEvent, 
		on: function(){document.addEventListener("myEvent", doSomething, false)},
		emit: function(){document.dispatchEvent(myEvent)},
		off: function(){document.removeEventListener("myEvent", doSomething, false)}
	}
}

