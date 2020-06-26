var linearCss = document.querySelector('.cpLinear');
var radialCss = document.querySelector('.cpRadial');
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var color4 = document.querySelector(".color4");
var range1 = document.querySelector(".range1");
var range2 = document.querySelector(".range2");
var gradient = document.getElementById('gradient');
var radial= document.getElementById('radial');

// Linear Gradient
//placeholders
//linear-gradient(to right, rgb(29, 132, 150), rgb(52, 23, 115));
//radial-gradient(47% 100%, rgb(29, 132, 150), rgb(52, 23, 115));
function setGradient() {
	gradient.style.background = 
		'linear-gradient(to right, ' 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";

		linearCss.textContent = gradient.style.background + ";";
}

linearCss.appendChild(document.createTextNode(setGradient()));

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

// Radial Gradient (Color 3 and 4)

//radial-gradient(80% 40%, red, yellow);

function setRadial() {
	radial.style.background =
		'radial-gradient(' + range1.value + "% " + range2.value + "%, "  
		+ color3.value 
		+ ', ' 
		+ color4.value 
		+ ')';

		radialCss.textContent = radial.style.background + ";";
}

radialCss.appendChild(document.createTextNode(setRadial()));

range1.addEventListener('input', setRadial);
range2.addEventListener('input', setRadial);
color3.addEventListener('input', setRadial);
color4.addEventListener('input', setRadial);