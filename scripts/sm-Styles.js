var	heightWindow = document.querySelector('#height');
var widthWindow = document.querySelector('#width');
const smSize = 576;

function changeTextAlingClassToSm() {
	if(heightWindow <= smSize || widthWindow <= smSize){
		document.getElementById("footer").classList.add("text-center");
		removeEspacesForSm();
		changeAligntoTextForSm();
	}
}

function removeEspacesForSm(){
	var espaces = document.getElementsByClassName("espaces-to-remove");
	for (var i = 0; i < espaces.length; i++) {
		espaces[i].remove("espaces-to-remove");
	}
}

function changeAligntoTextForSm(){
	var headersAndParagraphs = document.getElementsByClassName("sm-size");
	for (var i = 0; i < headersAndParagraphs.length; i++) {
		headersAndParagraphs[i].style.textAlign = "center";
		headersAndParagraphs[i].style.fontSize = "1.8em";
	}
}


window.onresize = changeTextAlingClassToSm;
