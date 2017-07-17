var customArray = [];

var objArray = 
		[
			{eng: "chicken", chin:"ji", pin:"ji&#772;" },
			{eng: "cow", chin:"niu", pin:"niu&#769;" },
			{eng: "dog", chin:"gou", pin:"gou&#780;" },
			{eng: "dragon", chin:"long", pin:"lo&#769;" },
			{eng: "goat", chin:"yang", pin:"ya&#769;ng" },
			{eng: "horse", chin:"ma", pin:"ma&#780;" },
			{eng: "monkey", chin:"hou", pin:"ho&#769;uzi" },
			{eng: "pig", chin:"zhu", pin:"zhu&#772;" },
			{eng: "rabbit", chin:"tu", pin:"tu&#768;zi" },
			{eng: "rat", chin:"shu", pin:"la&#780;oshu&#780;" },
			{eng: "snake", chin:"she", pin:"she&#769;" },
			{eng: "tiger", chin:"hu", pin:"la&#780;ohu&#780;" },
		];

/* Variable Declarations */
var thumbnails = document.getElementById("thumbnails");
var bicPic = document.getElementById("bigPic");
var charPic = document.getElementById("chinCharacter");
var chineseCharDiv = document.getElementById("char");

/* Counter variable declared */
var i = 0;


function initialize() {
	largeImage = document.getElementById("largeImage");
	largeImage.src = 'images/zodiac-animal-wheel.png';
	bigPic.appendChild(largeImage);
	
		for(i=0; i<objArray.length; i++) {
		recording = new Audio();
		recording.src = "audio/" + objArray[i].eng + ".mp3";
		customArray[i] = new Image();
		customArray[i].src = "images/" + objArray[i].eng + ".jpg";
		customArray[i].rec = recording;
		customArray[i].eng = objArray[i].eng;
		customArray[i].pin = objArray[i].pin;
		customArray[i].chin = objArray[i].chin;
		customArray[i].addEventListener("click", swap);
		thumbnails.appendChild(customArray[i]);
		}
}

initialize();

function swap() {
	bigPic.innerHTML = "";
	bigPic.appendChild(largeImage);
	largeImage.src = this.src;
	chineseCharDiv.style.display = "block";
	charPic.src = "images/char-" + this.chin + ".jpg";
	sound = this.rec;
	bigPic.innerHTML += "<br>" + this.eng + " - " + this.pin;
	sound.play();
}