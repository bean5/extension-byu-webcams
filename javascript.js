setInterval(updateKimballTower, 60 * 1000);
setInterval(updateConstruction, 400);
setInterval(updateBroadcasting, 500);
setInterval(updateTestingCenter, 7 * 1000);
setInterval(updateCardCenter, 1*1000);
setInterval(updateBrimhall, 60*1000);

useLocal = typeof(Storage)!=="undefined";


if(localStorage.timp_src == null || localStorage.timp_src == '')
	localStorage.timp_src = "http://marvin.byu.edu/Weather/tmp/w16361-134532371.jpeg";

getUpdatedSource(); //update source of marvin src
setInterval(getUpdatedSource, 10 * 1 * 1000);
setInterval(updateMtTimp, 1000);

function getUpdatedSource()
{
	$.ajax({
		type: "GET",
		url: 'http://students.cs.byu.edu/~bean5/webcam_helpers/marvin_timp.php',
		success:function(data){
			localStorage.timp_src = data;
			updateMtTimp();
		}
	});
}

function updateKimballTower()
{
	document.getElementById("kimballTower").src = "http://psych.byu.edu/files/Picture1.jpg" + getTimeStampString();
}

function updateMtTimp()
{	
	if(localStorage.timp_src == '')
	{
		document.getElementById('timpArea').style.display = 'none';
	}
	else
		document.getElementById('timpArea').style.display = '';
	
	document.getElementById("mtTimp").src = localStorage.timp_src + getTimeStampString();
}

function updateBroadcasting()
{
	document.getElementById("broadcasting").src = "http://byubwc.byu.edu/building/live/readImage2.asp" + getTimeStampString();
}

function updateConstruction()
{
	document.getElementById("construction1").src = "http://lswebcam1.byu.edu/cam/cam_1.jpg" + getTimeStampString();
	document.getElementById("construction2").src = "http://lswebcam1.byu.edu/cam/bnsn/bnsn1.jpg" + getTimeStampString();
}

function updateTestingCenter()
{
	document.getElementById("testing_center").src = "http://testing.byu.edu/images/conditions/axiscam.jpg" + getTimeStampString();
}

function updateCardCenter()
{
	document.getElementById("card_center").src = "http://10.25.116.231/axis-cgi/jpg/image.cgi?resolution=640x480" + getTimeStampString();
}

function updateBrimhall()
{
	document.getElementById("brim").src = "http://newsline.byu.edu/webcam/brmb-e/brmb-e.jpg" + getTimeStampString();
}

function getTimeStampString()
{
	return "?timestamp=" + Date();
}