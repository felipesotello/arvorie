var slider1 = document.getElementById("pppm-range");
var output1 = document.getElementById("pppm");
output1.innerHTML = slider1.value;

slider1.oninput = function() {
	output1.innerHTML = this.value;
}

var slider2 = document.getElementById("sswd-range");
var output2 = document.getElementById("sswd");
output2.innerHTML = slider2.value;

slider2.oninput = function() {
	output2.innerHTML = this.value;
}
