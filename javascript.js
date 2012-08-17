setInterval(updateKimballTower, 60 * 1000);
setInterval(updateMtTimp, 400);
setInterval(updateConstruction, 400);
setInterval(updateBroadcasting, 500);
setInterval(updateTestingCenter, 7 * 1000);
setInterval(updateCardCenter, 10);

var d = new Date();

function updateKimballTower()
{
	document.getElementById("kimballTower").src = "";
	document.getElementById("kimballTower").src = "http://psych.byu.edu/files/Picture1.jpg?uniq=" + d.getTime();
}

function updateMtTimp()
{
	document.getElementById("mtTimp").src = "";
	document.getElementById("mtTimp").src = "http://marvin.byu.edu/Weather/tmp/w10954-1345170957.jpeg";
}

function updateBroadcasting()
{
	document.getElementById("broadcasting").src = "";
	document.getElementById("broadcasting").src = "http://byubwc.byu.edu/building/live/readImage2.asp";
}

function updateConstruction()
{
	document.getElementById("construction1").src = "";
	document.getElementById("construction1").src = "http://lswebcam1.byu.edu/cam/cam_1.jpg";
	document.getElementById("construction2").src = "";
	document.getElementById("construction2").src = "http://lswebcam1.byu.edu/cam/bnsn/bnsn1.jpg";
}

function updateTestingCenter()
{
	document.getElementById("testing_center").src = "";
	document.getElementById("testing_center").src = "http://testing.byu.edu/images/conditions/axiscam.jpg";
}

function updateCardCenter()
{
	document.getElementById("card_center").src = "";
	document.getElementById("card_center").src = "http://10.25.116.231/axis-cgi/jpg/image.cgi?resolution=640x480";
}