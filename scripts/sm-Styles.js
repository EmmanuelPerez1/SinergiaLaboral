var	heightWindow = document.querySelector('#height');
var widthWindow = document.querySelector('#width');
const smSize = 576;

function changeTextAlingClassToSm() {
	if(heightWindow <= smSize || widthWindow <= smSize){
		document.getElementById("footer").classList.add("text-center");
		var espaces = document.getElementsByClassName("espaces-to-remove");

		for (var i = 0; i < espaces.length; i++) {
			espaces[i].remove("espaces-to-remove")
		}

	}
}

window.onresize = changeTextAlingClassToSm;
