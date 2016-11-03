function Movie(title, year, duration) {
	return {
		title: title,
		year: year,
		duration: duration,
		cast: [],
		add_cast: function (new_cast) {
			if (Array.isArray(new_cast)) {
				this.cast = this.cast.concat(new_cast);
			} else {
				this.cast.push(new_cast);
			}
		}

	};
}