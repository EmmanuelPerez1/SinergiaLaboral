var	heightWindow = document.querySelector('#height');
var widthWindow = document.querySelector('#width');
const smSize = 576;

function changeTextAlingClassToSm() {
	if(heightWindow <= smSize || widthWindow <= smSize){
		document.getElementById("footer").classList.add("text-center");
		document.getElementById("espaces-to-remove").remove();
	}
}

window.onresize = changeTextAlingClassToSm;
