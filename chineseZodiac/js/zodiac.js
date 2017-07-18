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
var largeImage = document.getElementById("largeImage");
var chinCharPic = document.getElementById("chinCharacter");
var chinCharDiv = document.getElementById("char");
var quizMe = document.getElementById("quiz");
var turnOffQuiz = document.getElementById("no-quiz");

var audio = new Audio();
var randomAudio = new Audio();
var randomNum;
var buttonID;
var randomID;
var arrayLength = 11;
var isQuiz = false;

quizMe.addEventListener("click", play_random);
turnOffQuiz.addEventListener("click", turnOff);

/* Counter variable declared */
var i = 0;

function initialize() {
	largeImage.src = 'images/zodiac-animal-wheel.png';
	bigPic.appendChild(largeImage);
	
		for(i=0; i<objArray.length; i++) {
		engRecording = new Audio();
		engRecording.src = "audio/" + objArray[i].eng + ".mp3";
		chinRecording = new Audio();
		chinRecording.src = "audio/" + objArray[i].chin + ".mp3";
		chinChar = new Image();
		chinChar.src = "images/char-" + objArray[i].chin + ".jpg";
		customArray[i] = new Image();
		customArray[i].src = "images/" + objArray[i].eng + ".jpg";
		customArray[i].chinChar = chinChar;
		customArray[i].engRec = engRecording;
		customArray[i].chinRec = chinRecording;
		customArray[i].eng = objArray[i].eng;
		customArray[i].pin = objArray[i].pin;
		customArray[i].chin = objArray[i].chin;
		customArray[i].addEventListener("click", swap);
		thumbnails.appendChild(customArray[i]);
		}
}

initialize();

function swap() {
	if (isQuiz == false) {
		audio.pause();
		bigPic.innerHTML = "";
		bigPic.appendChild(largeImage);
		largeImage.src = this.src;
		chinCharPic.src = this.chinChar.src;
		bigPic.innerHTML += "<br>" + this.eng + " - " + this.pin;
		audio = this.engRec;
		audio.play();
	}
	else {
		if (randomID == this) {
			alert("Great Job!");
			this.parentNode.removeChild(this);
			var index = customArray.indexOf(this);
			customArray.splice(index, 1);
			arrayLength--;
			play_random();
		}
		else {
			alert("Nope. That's Incorrect.");
		}
	}
}

/* This function plays a random animal in Chinese
The user then clicks the corresponding animal.
If the animal chosen matches the Chinese audio, the element is removed from the array
and the element is dropped from the div
*/
function play_random() {
	isQuiz = true;
	bigPic.innerHTML = "What animal name did I just say in Chinese?";
	randomAudio.pause();
	randomNum = loadrandom();
	this = customArray[randomNum];
	this.chinRec.play();
	randomID = this;
	chinCharDiv.innerHTML = "";
	chinCharDiv.appendChild(this.chinChar);
	chinCharDiv.style.display = "block";
}

function loadrandom() {
	var number = Math.round(Math.random() * arrayLength);
	return parseInt(number);
}

function turnOff() {
	bicPic.innerHTML = '';
	isQuiz = false;
	thumbnails.innerHTML = '';
	initialize();
}