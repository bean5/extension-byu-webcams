$(function() {
	var defaultValues =
	[
		{
			"id": "testing",
			"name": "Testing Center",
			"description": "Testing Center Line Conditions",
			"refreshInterval": 15,
			"active": true,
			"locations": ["https://testing.byu.edu/sites/all/scripts/linecamfeed.php", "https://ws.byu.edu/services/cameras/rest/v1/streams/testing", "http://testing.byu.edu/images/conditions/axiscam.jpg"]
		},
		{
			"id": "id-center",
			"name": "ID Center",
			"description": "View of the ID Center in the WSC (image only works on campus)",
			"refreshInterval": 15,
			"active": true,
			"locations": ["http://10.25.116.231/axis-cgi/jpg/image.cgi?resolution=640x480", "https://ws.byu.edu/services/cameras/rest/v1/streams/id-center"]
		},
		{
			"id": "timp-esc",
			"name": "Mt. Timpanogos (from ESC)",
			"description": "",
			"refreshInterval": 15,
			"active": true,
			"locations": ["http://marvin.byu.edu/Weather/webcam800.jpg", "https://ws.byu.edu/services/cameras/rest/v1/streams/timp-esc", "http://marvin.byu.edu/Weather/getTimpImage.html", "http://marvin.byu.edu/"],
			"see also": "http://marvin.byu.edu/Weather/Weather_links.html"
		},
		{
			"id": "traverse-swkt",
			"name": "Traverse Ridge (from SWKT)",
			"description": "",
			"refreshInterval": 60,
			"active": false,
			"locations": ["https://ws.byu.edu/services/cameras/rest/v1/streams/traverse-swkt"]
		},
		{
			"id": "daily-universe",
			"name": "Daily Universe Camera",
			"description": "",
			"refreshInterval": 60,
			"active": true,
			"locations": ["http://newsline.byu.edu/webcam/brmb-e/brmb-e.jpg", "http://newsnet.byu.edu/brmb-e.asp", "https://ws.byu.edu/services/cameras/rest/v1/streams/daily-universe", "https://i1.wp.com/newsline.byu.edu/webcam/brmb-e/brmb-e.jpg"],
			"also": "https://projectit101.wordpress.com/13-2/"
		},
		{
			"id": "brigham-square",
			"name": "Brigham Square",
			"description": "",
			"refreshInterval": 5,
			"active": false,
			"locations": ["https://ws.byu.edu/services/cameras/rest/v1/streams/brigham-square"]
		},
		{
			"id": "bookstore1",
			"name": "Bookstore Camera 1",
			"description": "Bookstore Cam",
			"refreshInterval": 5,
			"active": false,
			"locations": ["https://ws.byu.edu/services/cameras/rest/v1/streams/bookstore1"]
		},
		{
			"id": "bookstore2",
			"name": "Bookstore Camera 2",
			"description": "Bookstore Cam",
			"refreshInterval": 5,
			"active": false,
			"locations": ["https://ws.byu.edu/services/cameras/rest/v1/streams/bookstore2"]
		},
		{
			"id": "bookstore-quad",
			"name": "All four Bookstore feeds",
			"description": "All four bookstore feeds.",
			"refreshInterval": 5,
			"active": false,
			"locations": ["https://ws.byu.edu/services/cameras/rest/v1/streams/bookstore-quad"]
		},
		{
			"id": "broadcasting-nw",
			"name": "Broadcasting Building",
			"description": "Northwest",
			"refreshInterval": 5,
			"active": true,
			"locations": ["http://byubwc.byu.edu/building/live/readImage2.asp", "http://byubwc.byu.edu/building/live/default2.asp",  "http://www.byub.org/building/live/readImage2.asp?dummy=1449977788523",  "https://ws.byu.edu/services/cameras/rest/v1/streams/broadcasting-nw"]
		},
		{
			"id": "broadcasting-sw",
			"name": "",
			"description": "Broadcasting Building Southwest",
			"refreshInterval": 5,
			"active": false,
			"locations": ["http://byubwc.byu.edu/building/live/readImage.asp", "http://byubwc.byu.edu/building/live/readImage1.asp", "https://ws.byu.edu/services/cameras/rest/v1/streams/broadcasting-sw"]
		},
		{
			"id": "student-fitness",
			"name": "Student Fitness Center",
			"description": "See how busy the fitness center is",
			"refreshInterval": 10,
			"active": true,
			"locations": ["http://rbfacilities.byu.edu/images/webcam.php?cam=SFH-webcam", "https://ws.byu.edu/services/cameras/rest/v1/streams/student-fitness", "http://rbfacilities.byu.edu/content/SFH-Webcam"]
		},
		{
			"id": "kimball-tower",
			"name": "Kimball Tower",
			"description": "",
			"refreshInterval": 5,
			"active": false,
			"locations": ["http://psych.byu.edu/files/Picture1.jpg", "https://psychology.byu.edu/view/lab.htm"]
		},
		{
			"id": "construction1",
			"name": "Construction",
			"description": "Construction 1",
			"refreshInterval": 5,
			"active": false,
			"locations": ["http://lswebcam1.byu.edu/cam/cam_1.jpg"]
		},
		{
			"id": "construction2",
			"name": "",
			"description": "Construction 2",
			"refreshInterval": 5,
			"active": false,
			"locations": ["http://lswebcam1.byu.edu/cam/bnsn/bnsn1.jpg"]
		},
		{
			"id": "lsb",
			"name": "WIDB Demolition",
			"description": "Life Sciences Building View",
			"refreshInterval": 25,
			"active": true,
			"locations": ["http://webcam.byu.edu/mjpg/LSB"]
		},
		{
			"id": "swkt",
			"name": "",
			"description": "SWKT View",
			"refreshInterval": 5,
			"active": true,
			"locations": ["http://lswebcam.byu.edu/mjpg/SWKT"]
		},
		{
			"id": "lds-temple-brigham",
			"name": "Brigham City LDS Temple",
			"description": "",
			"refreshInterval": 5,
			"active": false,
			"locations": ["http://timecam.tv/mediablock/timestreams/bigd/brigham-temple/hour/2012_04_11_19/brigham-temple_2012_04_11_19_57_00_00.jpg", "http://timecam.tv/view_image.aspx?C=A5A0AGEOAB49"]
		},
		{
			"id": "Others",
			"name": "Test these on campus before making them live.",
			"description": "",
			"refreshInterval": 5,
			"active": false,
			"locations": ["http://webcams.byu.edu/view/index.shtml", "http://webcams.byu.edu/view/view.shtml?imagePath=/mjpg/4/video.mjpg&size=1", "http://timecam.tv/view_image.aspx?C=A5A0AGEOAB49", "http://www.lookr.com/christmas-markets"]
		},
		{
			"id": "scoreboard-byu-north",
			"name": "LaVell Edwards Stadium Scoreboards",
			"description": "North",
			"refreshInterval": 5,
			"active": false,
			"locations": ["http://128.187.10.203/"],
			"per": "http://byucougars.com/blog/athletics/entry/links-lavell-edwards-stadium-scoreboard-webcams"
		},
		{
			"id": "scoreboard-byu-south",
			"name": "",
			"description": "South",
			"refreshInterval": 5,
			"active": false,
			"locations": ["http://128.187.10.202/"],
			"per": "http://byucougars.com/blog/athletics/entry/links-lavell-edwards-stadium-scoreboard-webcams"
		},
		{
			"id": "castle-dale-north",
			"name": "Castle Dale",
			"description": "North",
			"refreshInterval": 5,
			"active": false,
			"locations": ["http://www.wrh.noaa.gov/images/slc/camera/latest/castledale.n.latest.jpg"],
			"per": "https://mathed.byu.edu/~williams/CD%20Webcams.htm"
		},
		{
			"id": "castle-dale-southwest",
			"name": "Southwest",
			"description": "",
			"refreshInterval": 5,
			"active": false,
			"locations": ["http://www.wrh.noaa.gov/images/slc/camera/latest/castledale.sw.latest.jpg"]
		},
		// {
		// 	"id": "",
		// 	"name": "",
		// 	"description": "",
		// 	"refreshInterval": 5,
		// 	"active": false,
		// 	"locations": [""]
		// }
	];

	var useService = false;//can be disabled if one doesn't want to use the service.

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
			if(!value.active) return; //only proceed for enabled endpoints

			$('body').append('<h1>'+value.name+'</h1>');
			$('body').append('<h2>'+value.description+'</h2>');
			$('body').append('<img id="'+value.id+'" src="'+value.locations[0]+'" style="width:440px;" >');

			//allow for refreshing of images automatically (seconds, depending on interval provided)
			setInterval(function() {
				updateImageWith(value.id, value.locations[0]);
			}, value.refreshInterval * 1000);
		});
	}

	function updateImageWith(imgID, src, useTimeStampString) {
		$('#' + imgID).attr('src', src + (useTimeStampString ? '?timestamp=' + Date() : ''));
	}
});
