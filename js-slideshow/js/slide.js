var imgArr = new Array();
var i = 0;

var thumbnails = document.getElementById("thumbnails");

function loadImages() {
	for(i=1; i<20; i++) {
	imgArr[i] = new Image();
	imgArr[i].src = 'images/eagle_rock20161105-' + i + '-.jpeg';
	imgArr[i].addEventListener("click", swap);
	thumbnails.appendChild(imgArr[i]);
  }
	
}

function swap() {
	var actual = new Image();
	document.getElementById("bigPic").innerHTML = '<img src="' + this.src + '">';
}

loadImages();

