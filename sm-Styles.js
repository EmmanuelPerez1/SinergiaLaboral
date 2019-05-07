var	heightWindow = document.querySelector('#height');
var widthWindow = document.querySelector('#width');
const smSize = 576;

function changeTextAlingClassToSm() {
	if(heightWindow <= smSize || widthWindow <= smSize){
		document.getElementById("footer").classList.add("text-center");
	}
}
window.onresize = changeTextAlingClassToSm;