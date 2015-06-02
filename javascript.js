$(function() {
	var defaultValues = 
	[
	    {
	        "id": "testing",
	        "name": "Testing Center",
	        "description": "Testing Center Line Conditions",
	        "refreshInterval": 15,
	        "location": "https://ws.byu.edu/services/cameras/rest/v1/streams/testing"
	    },
	    {
	        "id": "id-center",
	        "name": "ID Center",
	        "description": "View of the ID Center in the WSC",
	        "refreshInterval": 15,
	        "location": "https://ws.byu.edu/services/cameras/rest/v1/streams/id-center"
	    },
	    {
	        "id": "timp-esc",
	        "name": "Mt. Timpanogos (from ESC)",
	        "description": "",
	        "refreshInterval": 5,
	        "location": "https://ws.byu.edu/services/cameras/rest/v1/streams/timp-esc"
	    },
	    {
	        "id": "traverse-swkt",
	        "name": "Traverse Ridge (from SWKT)",
	        "description": "",
	        "refreshInterval": 60,
	        "location": "https://ws.byu.edu/services/cameras/rest/v1/streams/traverse-swkt"
	    },
	    {
	        "id": "daily-universe",
	        "name": "Daily Universe Camera",
	        "description": "",
	        "refreshInterval": 60,
	        "location": "https://ws.byu.edu/services/cameras/rest/v1/streams/daily-universe"
	    },
	    {
	        "id": "brigham-square",
	        "name": "Brigham Square",
	        "description": "",
	        "refreshInterval": 2,
	        "location": "https://ws.byu.edu/services/cameras/rest/v1/streams/brigham-square"
	    },
	    {
	        "id": "bookstore1",
	        "name": "Bookstore Camera 1",
	        "description": "Bookstore Cam",
	        "refreshInterval": 2,
	        "location": "https://ws.byu.edu/services/cameras/rest/v1/streams/bookstore1"
	    },
	    {
	        "id": "bookstore2",
	        "name": "Bookstore Camera 2",
	        "description": "Bookstore Cam",
	        "refreshInterval": 2,
	        "location": "https://ws.byu.edu/services/cameras/rest/v1/streams/bookstore2"
	    },
	    {
	        "id": "bookstore-quad",
	        "name": "All four Bookstore feeds",
	        "description": "All four bookstore feeds.",
	        "refreshInterval": 2,
	        "location": "https://ws.byu.edu/services/cameras/rest/v1/streams/bookstore-quad"
	    },
	    {
	        "id": "broadcasting-nw",
	        "name": "Broadcasting Building (NW)",
	        "description": "",
	        "refreshInterval": 5,
	        "location": "https://ws.byu.edu/services/cameras/rest/v1/streams/broadcasting-nw"
	    },
	    {
	        "id": "broadcasting-sw",
	        "name": "Broadcasting Building (SW)",
	        "description": "",
	        "refreshInterval": 5,
	        "location": "https://ws.byu.edu/services/cameras/rest/v1/streams/broadcasting-sw"
	    },
	    {
	        "id": "student-fitness",
	        "name": "Student Fitness Center",
	        "description": "See how busy the fitness center is",
	        "refreshInterval": 5,
	        "location": "https://ws.byu.edu/services/cameras/rest/v1/streams/student-fitness"
	    }
	];

	var useService = true;//can be disabled if one doesn't want to use the service.

	if(useService) 
	{
		//TODO: catch failures in case service goes down.
		$.get('https://soaregistry.byu.edu/services/campusInformation/webcam/v1/streams/', function(response) {
			loadValues(response);
		});
	}
	else 
	{
		loadValues(defaultValues);
	}

	function loadValues(values) {
		//add the element to index.html
		//set interval to match interval named in html
		//loop through each key
		$.each(values, function(key, value) {
			$('body').append('<h1>'+value.name+'</h1>');
			$('body').append('<h2>'+value.description+'</h2>');
			$('body').append('<img id="'+value.id+'" src="'+value.location+'" style="width:440px;" >');

			//allow for refreshing of images automatically (seconds, depending on interval provided)
			setInterval(function() {
				updateImageWith(value.id, value.location);
			}, value.refreshInterval * 1000);
		});
	}

	function updateImageWith(imgID, src, useTimeStampString) {
		$('#' + imgID).attr('src', src + (useTimeStampString ? '?timestamp=' + Date() : ''));
	}
});
