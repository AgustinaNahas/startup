var myApp = angular.module('myApp', []);
 
myApp.service('Storage_Serv', function(){
	this.get = function(string) {
		var json_obj = localStorage.getItem(string);
		return JSON.parse(json_obj);
	}
	this.set = function(list, string){
		var json_obj = JSON.stringify(list);
		localStorage.setItem(string, json_obj);
	}
});
 
myApp.controller('MainCtrl', function($scope, Storage_Serv) {

	//Storage_Serv.post(movie, 'movies');

	$scope.movie_list = Storage_Serv.get('movies');

	$scope.hide_details = true;
	$scope.selected_movie;

	$scope.show_details = function(movie) {
		$scope.hide_details = $scope.change_visibility(movie);
	};

	$scope.get_selected_movie = function() {
		return $scope.selected_movie;
	};

	$scope.change_visibility = function(movie) {
		
		if($scope.selected_movie == movie && !$scope.hide_details) 
			$scope.hide_details = true;
		else 
		{
			$scope.selected_movie = movie;
			$scope.hide_details = false;
		}
		
		return $scope.hide_details;
	};

	$scope.add_movie = function(){

		var new_movie = new Movie($scope.i_title, $scope.i_year, $scope.i_duration);
		
		var movie_list = Storage_Serv.get('movies');
		
		movie_list.push(new_movie);
		
		Storage_Serv.set(movie_list, 'movies');
		
		$scope.movie_list = Storage_Serv.get('movies');

		document.getElementById("add_button").className = "btn btn-success";
		document.getElementById("add_button").innerHTML = "Agregar";
	};

	$scope.delete_movie = function(){
		
		var movie_list = Storage_Serv.get('movies');
		var index = movie_list.findIndex(mov => mov.title == $scope.i_title);
		if (index != undefined) movie_list.splice(index, 1);
		Storage_Serv.set(movie_list, 'movies');
		
		$scope.movie_list = Storage_Serv.get('movies');
	}

	$scope.edit_movie = function(){
		$scope.i_title = $scope.selected_movie.title;
		$scope.i_year= $scope.selected_movie.year;
		$scope.i_duration = $scope.selected_movie.duration;
		
		var movie_list = Storage_Serv.get('movies');
		var index = movie_list.findIndex(mov => mov.title == $scope.i_title);
		if (index != undefined) movie_list.splice(index, 1);
		Storage_Serv.set(movie_list, 'movies');
		
		$scope.movie_list = Storage_Serv.get('movies');

		document.getElementById("add_button").className = "btn btn-primary";
		document.getElementById("add_button").innerHTML = "Guardar";
	}
});

// var movie = [
// 	new Movie('What a wonderful life', 1946, '2h 10min'), 
// 	new Movie('The Shining', 1980, '2h 26min'), 
// 	new Movie('Amadeus', 1984, '2h 40min'), 
// 	new Movie('Back to the Future', 1985, '1h 56min'), 
// 	new Movie('The Fountain', 2006, '1h 36min')
// ];

