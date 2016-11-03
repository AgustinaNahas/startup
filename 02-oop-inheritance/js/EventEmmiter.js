function EventEmmiter(){
	var eventHandlers = [];
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