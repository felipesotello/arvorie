function soma() {
	var a = parseInt(document.getElementById('NY').value, 10);
	var b = parseInt(document.getElementById('SC').value, 10);
	var c = parseInt(document.getElementById('MS').value, 10);
	var d = parseInt(document.getElementById('NM').value, 10);
	var e = parseInt(document.getElementById('KS').value, 10);
	var f = parseInt(document.getElementById('RI').value, 10);
	var g = parseInt(document.getElementById('OS').value, 10);
	
	document.getElementById('US').value = a + b + c + d + e + f + g;
}

// pppm

var pppmInput = document.getElementById('pppm-range');
var pppmOutput = document.getElementById('pppm');

pppmOutput.innerHTML = pppmInput.value;

pppmInput.oninput = function() {
	pppmOutput.innerHTML = this.value;
}

// sswd

var sswdInput = document.getElementById('sswd-range');
var sswdOutput = document.getElementById('sswd');

sswdOutput.innerHTML = sswdInput.value;

sswdInput.oninput = function() {
	sswdOutput.innerHTML = this.value;
}
