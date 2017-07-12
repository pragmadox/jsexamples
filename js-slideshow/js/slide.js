var imgArr = [];
var i = 0;

var thumbnails = document.getElementById("thumbnails");
var bicPic = document.getElementById("bigPic");

function loadImages() {
	largeImage = new Image();
	largeImage.src = 'images/eagle_rock20161105-' + 1 + '-.jpeg';
	bigPic.appendChild(largeImage);
	
		for(i=1; i<20; i++) {
		imgArr[i] = new Image();
		imgArr[i].src = 'images/eagle_rock20161105-' + i + '-.jpeg';
		imgArr[i].addEventListener("click", swap);
		thumbnails.appendChild(imgArr[i]);
		}
}

function swap() {
	largeImage.src = this.src;
}

loadImages();

