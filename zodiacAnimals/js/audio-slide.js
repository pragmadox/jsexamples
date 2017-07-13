var imgArr = [];
var i = 0;

var thumbnails = document.getElementById("thumbnails");
var bicPic = document.getElementById("bigPic");
var selectColor = document.getElementById("pickedColor");
var selectFontSize = document.getElementById("fontSizeChooser");
var slideshow = document.getElementById("slideshow");
var example = document.getElementById("example_text");
var apdiv = document.getElementById("absolutediv");

selectColor.addEventListener("change", setColor);
selectFontSize.addEventListener("change", setSize);

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

//Populate your options in select with the values you want.

var min = 12;
var max = 30;

for (i = min; i<=max; i++){
    var opt = document.createElement('option');
    opt.value = i*2 + "px";
    opt.innerHTML = i*2 + "px";
    selectFontSize.appendChild(opt);
}

//Create an animation of a div that scrolls across the screen forever.

var leftPos = -250;

function animateDiv() {
	leftPos += 2.5;
	apdiv.style.left = leftPos + "px";
	if (leftPos > 1500) {
		leftPos = -250;
		animateDiv();
	}
}

setInterval(animateDiv, 20);

function swap() {
	largeImage.src = this.src;
}

function setColor() {
	slideshow.style.backgroundColor = this.value;
}

function setSize() {
	example.style.fontSize = this.value;
}

//Generate and Load Random Background colors.

function loadrandom() {
	var number = Math.round(Math.random()*255);
	return parseInt(number);
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

var R = loadrandom();
var G = loadrandom();
var B = loadrandom();
var new_color = rgbToHex(R, G, B);
slideshow.style.backgroundColor = new_color;

loadImages();

