function EventEmmiter(){
	var eventHandlers = [event_play, event_pause, event_resume];
	return {
		on: function(name, callback){
			eventHandlers.push({name, callback});
		},
		emit: function(name_event){
			var event = eventHandlers.find(ev => ev.name == name_event);
			if (event != undefined) event.callback();
		},
		off: function(name_event){
			var index = eventHandlers.findIndex(ev => ev.name == name_event);
			if (index != undefined) eventHandlers.splice(index, 1);
		}
	};
}

var event_play = 
	{ 
		name: 'play', 
		callback: function() { 
			console.log('play') 
		}
	};

var event_pause = 
	{ 
		name: 'pause', 
		callback: function() { 
			console.log('pause') 
		}
	};

var event_resume = 		
	{ 
		name: 'resume', 
		callback: function() { 
			console.log('resume') 
		}
	};

var movie1 = Movie('What a wonderful life', 1946, '2h 10min');
var movie2 = Movie('The Shining', 1980, '2h 26min');
var movie3 = Movie('Amadeus', 1984, '2h 40min');
var movie4 = Movie('Back to the Future', 1985, '1h 56min');
var movie5 = Movie('The Fountain', 2006, '1h 36min');

function Movie(title, year, duration){
	var m = Object.create(new EventEmmiter());
	m.title = title;
	m.year = year;
	m.duration = duration;
	return m;
}

function Actor(name, age){
	return {
		name, age
	}
}

 