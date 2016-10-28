$(document).ready(function(){
	$("#hidden").fadeIn("2000");
});

var ajax = function (options) {
	return new Promise(function (resolve, reject) {
  	var request = new XMLHttpRequest();  
    var async = true; // siempre debe ser asíncrono el llamado
    request.onload = function (response) {
     	if(response.target.status !== 200) {
      	reject({
        	code: response.target.status,
          message: response.target.statusText
        });
      } else {
        resolve(response.target.response);
      }
    }
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


function get_response(config_obj) {
	config_obj.search_field = document.getElementById("search_field").value;
	ajax(config_obj).then(function (response) {
		if(response !== '') {
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
		$('#display_text').html(JSON.parse(response).value.joke);
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
		var json_repositories = JSON.parse(response).items;
		json_repositories.forEach( function( item ) {
	    	add_to_list(item.full_name);
	    });
	},
	error: function (response) {
		document.getElementById("hidden").style.color = '#ff0000';
		document.getElementById("hidden").innerHTML = response.message;
	}
}

function add_to_list (full_name) {
	var new_repo = document.createElement("li");
	var repo_name = document.createTextNode(full_name);
	new_repo.appendChild(repo_name);
	document.getElementById("repository_list").appendChild(new_repo);
}

function make_table(){

	$('#display_text').html("");
	document.getElementById("repository_list").innerHTML = '';

	document.getElementById("table").remove();
	var array = JSON.parse(document.getElementById("matrix").value);

    var table = document.createElement('table');
    table.setAttribute("id", "table")
    for (var i = 0; i < array.length; i++) {
        var row = document.createElement('tr');
        for (var j = 0; j < array[i].length; j++) {
            var cell = document.createElement('td');
            cell.textContent = array[i][j];
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    document.body.appendChild(table);
}