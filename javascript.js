setInterval(updateKimballTower, 60 * 1000);
// setInterval(updateConstruction, 400);//no known construction webcams at this time
setInterval(updateBroadcasting, 500);
setInterval(updateTestingCenter, 7 * 1000);
setInterval(updateCardCenter, 1*1000);
setInterval(updateBrimhall, 60*1000);
setInterval(updateStudentFitness, 60*1000);

//For future use: useLocal = typeof(Storage)!=='undefined';

//Probably now defunct along with getUpdatedSource()
//if(localStorage.timp_src == null || localStorage.timp_src == '')
	// previously used http://marvin.byu.edu/Weather/tmp/w16361-134532371.jpeg
	//localStorage.timp_src = 'http://marvin.byu.edu/Weather/webcam800.jpg';

// getUpdatedSource(); //update source of marvin src
//setInterval(getUpdatedSource, 10 * 1 * 1000);
setInterval(updateMtTimp, 1000);

function getUpdatedSource()
{
	//deprecated/defunct, return early if called
	return;
	$.ajax({
		type: 'GET',
		url: 'http://students.cs.byu.edu/~bean5/webcam_helpers/marvin_timp.php',
		success:function(data){
			localStorage.timp_src = data;
			updateMtTimp();
		}
	}).done(function() {
		console.log('source updated');
	});
}

function updateImageWith(imgID, src, useTimeStampString) {
	$('#' + imgID).attr('src', src + (useTimeStampString ? '?timestamp=' + Date() : ''));
}

/*
	Main image update functions.
	TODO: since most of these are so similar, consider just using anonymous functions
*/
function updateKimballTower()
{
	updateImageWith('kimballTower', 'http://psych.byu.edu/files/Picture1.jpg', true);
}

function updateMtTimp()
{
	if(localStorage.timp_src == '')
		$('#timpArea').hide();
	else
		$('#timpArea').show();

	updateImageWith('mtTimp', 'http://marvin.byu.edu/Weather/webcam800.jpg', true);
}

function updateBroadcasting()
{
	/*previously used:
		http://byubwc.byu.edu/building/live/readImage.asp
		http://byubwc.byu.edu/building/live/readImage2.asp
	*/
	updateImageWith('broadcasting', 'https://ws.byu.edu/services/cameras/rest/v1/streams/broadcasting-nw', true);
}

function updateConstruction()
{
	return;//No known construction cameras at this time.
	updateImageWith('construction1', 'http://lswebcam1.byu.edu/cam/cam_1.jpg', true);
	updateImageWith('construction2', 'http://lswebcam1.byu.edu/cam/bnsn/bnsn1.jpg', true);
}

function updateTestingCenter()
{
	/*
		previously used:
		http://testing.byu.edu/images/conditions/axiscam.jpg
		https://testing.byu.edu/sites/all/scripts/linecamfeed.php
	*/
	updateImageWith('testing_center', 'https://ws.byu.edu/services/cameras/rest/v1/streams/testing', true);
}

function updateStudentFitness() {
	updateImageWith('fitness', 'https://ws.byu.edu/services/cameras/rest/v1/streams/student-fitness', true)
}

function updateCardCenter()
{
	//Previously used http://10.25.116.231/axis-cgi/jpg/image.cgi?resolution=640x480, which only works from on campus...
	updateImageWith('card_center', 'https://ws.byu.edu/services/cameras/rest/v1/streams/id-center', true);
}

function updateBrimhall()
{
	// Previously used: http://newsline.byu.edu/webcam/brmb-e/brmb-e.jpg
	updateImageWith('brim', 'https://ws.byu.edu/services/cameras/rest/v1/streams/daily-universe', true);
}
