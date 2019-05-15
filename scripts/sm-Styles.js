var	heightWindow = document.querySelector('#height');
var widthWindow = document.querySelector('#width');
const smSize = 576;

function changeTextAlingClassToSm() {
	if(heightWindow <= smSize || widthWindow <= smSize){
		document.getElementById("footer").classList.add("text-center");
		removeEspacesForSm();
		// removeJumbotronForSm();
	}
}

function removeEspacesForSm(){
	var espaces = document.getElementsByClassName("espaces-to-remove");
	for (var i = 0; i < espaces.length; i++) {
		espaces[i].remove("espaces-to-remove")
	}
}

function removeJumbotronForSm(){
	var jumbotron = document.getElementsByClassName("j-color")
	jumbotron[0].remove("j-color")
}

// function resizeVideoMainPage(){
// 	var video = document.getElementsByTagName("iframe")
// 	video.
// }

window.onresize = changeTextAlingClassToSm;
