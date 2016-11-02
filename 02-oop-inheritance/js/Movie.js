function Movie(title, year, duration){
	var sup = Object.create(new EventEmmiter());

	function on(eventName, callback) {
		sup.on(eventName, function() {
			callback(eventName + " has been emitted");
		})
	}

	function emit(eventName) {
		sup.emit(eventName);
	}

	function off(eventName) {
		sup.off(eventName);
	}

	return {
		title: title,
		year: year,
		duration: duration,
		on: on,
		emit: emit, 
		off: off,
		cast: [],
		add_cast: function(new_cast){
			if(Array.isArray(new_cast)){
				this.cast = this.cast.concat(new_cast);
			} else {
				this.cast.push(new_cast);
			}
		}

	};
}

var movie1 = Movie('What a wonderful life', 1946, '2h 10min');
var movie2 = Movie('The Shining', 1980, '2h 26min');
var movie3 = Movie('Amadeus', 1984, '2h 40min');
var movie4 = Movie('Back to the Future', 1985, '1h 56min');
var movie5 = Movie('The Fountain', 2006, '1h 36min');

