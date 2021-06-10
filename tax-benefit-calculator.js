<style>
.radio-input:checked + .radio-label {
	color: #D90A2C;
	background-color: #FFF0F4;
}
</style>

<script>
let totals = {
	planing: 600,
	design: 2500,
	development: 3200,
	testing: 500,
	seo: 0,
	time: 4,
	total: 6800
}

const keys = Object.keys(totals);

function updateTotals() {
	for(let i = 0; i < keys.length; i++) {
		if (keys[i] === 'time') {
			$('#total-' + keys[i]).text(totals[keys[i]] + ' weeks');
		} else {
			$('#total-' + keys[i]).text('$' + totals[keys[i]]);
		}
	}
}

function addToTotals(planing, design, development, testing, seo, time) {
	totals.planing += parseInt(planing);
	totals.design += parseInt(design);
	totals.development += parseInt(development);
	totals.testing += parseInt(testing);
	totals.seo += parseInt(seo);
	totals.time += parseInt(time);
	let total = parseInt(planing) + parseInt(design) + parseInt(development) + parseInt(testing) + parseInt(seo); 
	totals.total += parseInt(total);
	updateTotals();
}

function removeFromTotals(planing, design, development, testing, seo, time) {
	totals.planing -= planing;
	totals.design -= design;
	totals.development -= development;
	totals.testing -= testing;
	totals.seo -= seo;
	totals.time -= time;
	let total = parseInt(planing) + parseInt(design) + parseInt(development) + parseInt(testing) + parseInt(seo); 
	totals.total -= total;
	updateTotals();
}

function parseTotals(radio, mode) {
	let planing = radio.getAttribute('planing');
	let design = radio.getAttribute('design');
	let development = radio.getAttribute('development');
	let testing = radio.getAttribute('testing');
	let seo = radio.getAttribute('seo');
	let time = radio.getAttribute('time');
	if (mode === 'remove') {
		removeFromTotals(planing, design, development, testing, seo, time);
	} else {
		addToTotals(planing, design, development, testing, seo, time);
	}
}

$(document).ready(function() {
	updateTotals();
	var radios = document.querySelectorAll('input[type=radio]');
	var labels = document.querySelectorAll('label');
	let currentCheck;
	var previousCheck;

	radios.forEach(radio => radio.addEventListener('change', () => {
		currentCheck = radio;
		if ((radio.name === 'seo' && radio.value === 'Yes') || (radio.name === 'analytics' && radio.value === 'Yes')) {
			$('#seo-text').fadeIn(400);
		}
		if (radio.name === 'seo' && radio.value === 'No') {
			if($('#analytics2').is(':checked')) {
				$('#seo-text').fadeOut(400); 
			}
		}
		if (radio.name === 'analytics' && radio.value === 'No') {
			if($('#seo2').is(':checked')) {
				$('#seo-text').fadeOut(400); 
			}
		}
		if (currentCheck !== previousCheck) {
			parseTotals(previousCheck, 'remove');
		}
			parseTotals(radio, 'add');
	}));

	radios.forEach(radio => radio.addEventListener('mouseup', () => {
		previousCheck = document.querySelector('input[type=radio][name=' + radio.name + ']:checked');
	}));

	labels.forEach(label => label.addEventListener('mouseup', () => {
		previousCheck = document.querySelector('input[type=radio][name=' + label.getAttribute('for').slice(0, -1) + ']:checked');
	}));
});
</script>