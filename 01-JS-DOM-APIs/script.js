$(document).ready(function(){
	$("#hidden").fadeIn("2000");
});

var ajax = function (options) {
	return new Promise(function (resolve, reject) {
  	var request = new XMLHttpRequest();  
    var async = true; // siempre debe ser asíncrono el llamado
    request.onload = resolve;
    request.onerror = reject;
    
    if(options.method === 'GET' && options.data) {
			    options.url += '?' + options.data;
    }
    
    request.open(options.method, options.url, async);
    
    if(options.contentType) {
    	request.setRequestHeader('Content-type', options.contentType);
    }
    
    if(options.method !== 'GET' && options.data) {
    	request.send(options.data);
    } else {
    	request.send();
    }
  });
}

function getResponse(config_obj) {
	config_obj.search_field = document.getElementById("search_field").value;
	ajax(config_obj).then(function (response) {
		if(response.target.response !== '') {
			config_obj.success(response);
		}
	}, function (response) {
		config_obj.error(response);
	});
}

var config_joke = {
	url: 'http://api.icndb.com/jokes/random',
	dataType: 'json',
	method: 'GET', 
	success: function (response) {
		$('#display_text').html(JSON.parse(response.target.response).value.joke);
	},
	error: function (resp) {
		document.getElementById("display_text").style.color = '#ff0000';
	}
}

var config_repo = {
	url: 'https://api.github.com/search/repositories',
	dataType: 'json',
	method: 'GET', 
	search_field: "",
	data: "q=" + this.search_field,
	success: function (response) {
		$('#display_text').html("");
		document.getElementById("repository_list").innerHTML = '';
		var json_repositories = JSON.parse(response.target.response).items;
		json_repositories.forEach( function( item ) {
	    	add_to_list(item.full_name);
	    });
	},
	error: function (resp) {
		document.getElementById("hidden").style.color = '#ff0000';
	}
}

function add_to_list (full_name) {
	var new_repo = document.createElement("li");
	var repo_name = document.createTextNode(full_name);
	new_repo.appendChild(repo_name);
	document.getElementById("repository_list").appendChild(new_repo);
}