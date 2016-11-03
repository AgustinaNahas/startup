var myApp = angular.module('myApp', []);

myApp.factory('Storage', function () {
	return {
		get: function(string) {
			var json_obj = localStorage.getItem(string);
			return JSON.parse(json_obj);
		},
		post: function(list, string) {
			var json_obj = JSON.stringify(list);
			localStorage.setItem(string, json_obj);
		}
	};
});
 
myApp.service('Storage_Serv', function(Storage){
	this.get = function(string) {
		return Storage.get(string);
	}
	this.post = function(list, string){
		Storage.post(list, string);
	}
});
 
 myApp.controller('MainCtrl', function($scope, Storage_Serv) {

 	// Storage_Serv.post(movie, 'movies');

    $scope.movie_list = Storage_Serv.get('movies');

 });

// var movie = [
// 	new Movie('What a wonderful life', 1946, '2h 10min'), 
// 	new Movie('The Shining', 1980, '2h 26min'), 
// 	new Movie('Amadeus', 1984, '2h 40min'), 
// 	new Movie('Back to the Future', 1985, '1h 56min'), 
// 	new Movie('The Fountain', 2006, '1h 36min')
// ];