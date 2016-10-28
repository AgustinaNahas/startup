var my_movie;

function add_movie(title, year, duration){
	return {
		title,
		year,
		duration,
		play: function(){
			console.log("Playing " + title);
		},
		pause: function(){
			console.log("Pausing " + title);
		},
		resume: function(){
			console.log("Resuming " + title);
		}
	}
}