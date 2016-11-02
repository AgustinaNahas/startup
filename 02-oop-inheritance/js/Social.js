function Social(title, year, duration){
	var m = Object.create(new Movie(title, year, duration));
	m.like = function(friend) {
		console.log(friend + " likes " + this.title);
	};
	m.share = function(friend) {
		console.log(friend + " shared " + this.title);
	}
	return m;
}