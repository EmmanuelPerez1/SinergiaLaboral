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
	var h1p = document.getElementsByClassName("sm-size");
	for (var i = 0; i < h1p.length; i++) {
		h1p[i].style.textAlign = "center";
		h1p[i].style.fontSize = "1.8em";
	}
}


window.onresize = changeTextAlingClassToSm;
