// input declarations

const not_for_profit = document.getElementById('not_for_profit');

const employees_ny = document.getElementById('employees_ny');
const employees_sc = document.getElementById('employees_sc');
const employees_ms = document.getElementById('employees_ms');
const employees_nm = document.getElementById('employees_nm');
const employees_ks = document.getElementById('employees_ks');
const employees_ri = document.getElementById('employees_ri');
const employees_other = document.getElementById('employees_other');
const employees_total_display = document.getElementById('employees_total_display');

const coverage_zero_to_five = document.getElementById('coverage_zero_to_five');
const coverage_six_to_thirteen = document.getElementById('coverage_six_to_thirteen');
const coverage_daycare = document.getElementById('coverage_daycare');
const coverage_nanny = document.getElementById('coverage_nanny');
const coverage_babysitter = document.getElementById('coverage_babysitter');
const coverage_summer_camp = document.getElementById('coverage_summer_camp');

const contribution_pppm = document.getElementById('contribution_pppm');

// output declarations

const contribution_pppm_display = document.getElementById('contribution_pppm_display');
const tax_benefit_display = document.getElementById('tax_benefit_display');
const tax_benefit_modal = document.getElementById('tax_benefit_modal');
const contribution_pppm_modal = document.getElementById('contribution_pppm_modal');
const federal_tax_savings_modal = document.getElementById('federal_tax_savings_modal');
const state_tax_savings_modal = document.getElementById('state_tax_savings_modal');
const net_cost_pppm_modal = document.getElementById('net_cost_pppm_modal');
const salary_equivalent_pppm_modal = document.getElementById('salary_equivalent_pppm_modal');

// not used for now

// state_tax_credit_ny
// state_tax_shield_ny

// contribution_monthly
// contribution_yearly
// federal_tax_credit
// federal_tax_shield
// federal_payroll_tax
// state_tax_credit
// state_tax_shield
// state_payroll_tax
// net_cost_monthly
// net_cost_yearly
// salary_equivalent_monthly
// salary_equivalent_yearly
// parent_usage
// parents_participating
// daycare_share

// default values

employees_ny.value = '0';
employees_sc.value = '0';
employees_ms.value = '0';
employees_nm.value = '0';
employees_ks.value = '0';
employees_ri.value = '0';
employees_other.value = '0';
employees_total_display.value = '0';

coverage_daycare.disabled = true;
coverage_nanny.disabled = true;
coverage_babysitter.disabled = true;
coverage_summer_camp.disabled = true;

contribution_pppm.value = '50';

contribution_pppm_display.innerHTML = contribution_pppm.value;
tax_benefit_display.innerHTML = '0';

tax_benefit_modal.innerHTML =  '0';
contribution_pppm_modal.innerHTML =  '0';
federal_tax_savings_modal.innerHTML =  '0';
state_tax_savings_modal.innerHTML =  '0';
net_cost_pppm_modal.innerHTML =  '0';
salary_equivalent_pppm_modal.innerHTML =  '0';

// interaction functions

// not_for_profit.onchange = function() {
// 	if (not_for_profit.checked) {
// 		employees_ny.disabled = true;
// 		employees_sc.disabled = true;
// 		employees_ms.disabled = true;
// 		employees_nm.disabled = true;
// 		employees_ks.disabled = true;
// 		employees_ri.disabled = true;
// 		employees_other.disabled = true;
// 		coverage_zero_to_five.disabled = true;
// 		coverage_six_to_thirteen.disabled = true;
// 		coverage_zero_to_five.checked = false;
// 		coverage_six_to_thirteen.checked = false;
// 		contribution_pppm.disabled = true;
// 	} else {
// 		employees_ny.disabled = false;
// 		employees_sc.disabled = false;
// 		employees_ms.disabled = false;
// 		employees_nm.disabled = false;
// 		employees_ks.disabled = false;
// 		employees_ri.disabled = false;
// 		employees_other.disabled = false;
// 		coverage_zero_to_five.disabled = false;
// 		coverage_six_to_thirteen.disabled = false;
// 		contribution_pppm.disabled = false;
// 	}
// }

function employees() {
	const a = parseInt(employees_ny.value, 10);
	const b = parseInt(employees_sc.value, 10);
	const c = parseInt(employees_ms.value, 10);
	const d = parseInt(employees_nm.value, 10);
	const e = parseInt(employees_ks.value, 10);
	const f = parseInt(employees_ri.value, 10);
	const g = parseInt(employees_other.value, 10);
	const h = a + b + c + d + e + f + g;
	
	employees_total_display.value = h;

	calcTudo();
}

coverage_zero_to_five.onchange = function() {
	if (coverage_zero_to_five.checked) {
		coverage_daycare.disabled = false;
		coverage_nanny.disabled = false;
		coverage_babysitter.disabled = false;
	} else {
		coverage_daycare.disabled = true;
		coverage_nanny.disabled = true;
		coverage_babysitter.disabled = true;

		coverage_daycare.checked = false;
		coverage_nanny.checked = false;
		coverage_babysitter.checked = false;
	}
	
	calcTudo();
}

coverage_six_to_thirteen.onchange = function() {
	if (coverage_six_to_thirteen.checked) {
		coverage_nanny.disabled = false;
		coverage_babysitter.disabled = false;
		coverage_summer_camp.disabled = false;
	} else {
		coverage_nanny.disabled = true;
		coverage_babysitter.disabled = true;
		coverage_summer_camp.disabled = true;

		coverage_nanny.checked = false;
		coverage_babysitter.checked = false;
		coverage_summer_camp.checked = false;
	}
	
	calcTudo();
}

coverage_daycare.onchange = function() {
	calcTudo();
}

coverage_nanny.onchange = function() {
	calcTudo();
}

coverage_babysitter.onchange = function() {
	calcTudo();
}

coverage_summer_camp.onchange = function() {
	calcTudo();
}

contribution_pppm.oninput = function() {
	contribution_pppm_display.innerHTML = this.value;
	
	calcTudo();
}

function calcTudo() {

	// employees

	let employees_total = parseInt(employees_total_display.value, 10);

	// coverage

	

	// contribution



	// FORMULAS

	// parents_usage =SUM(IF(coverage_zero_to_five=1;0,1;0);IF(coverage_six_to_thirteen=1;0,1;0))

	let parent_usage;

	if (coverage_zero_to_five.checked && coverage_six_to_thirteen.checked) {
		parent_usage = .2;
	} else if (coverage_zero_to_five.checked || coverage_six_to_thirteen.checked) {
		parent_usage = .1;
	} else {
		parent_usage = 0;
	}

	console.log('parent_usage: ' + parent_usage);

	// parents_participating =parent_usage*employees_total

	let parents_participating = parent_usage * employees_total;
	
	console.log('parents_participating: ' + parents_participating);

	// daycare_share =IF(coverage_daycare=0;0;IF(AND(coverage_nanny=0;coverage_babysitter=0;coverage_summer_camp=0);1;IF(AND(coverage_nanny=1;coverage_babysitter=1;coverage_summer_camp=1);0,3;IF(AND(coverage_nanny=0;coverage_babysitter=0;coverage_summer_camp=1);0,5;IF(AND(coverage_nanny=1;coverage_babysitter=1;coverage_summer_camp=0);0,5;IF(coverage_summer_camp=1;0,4;0,6))))))

	let daycare_share;

	if (!coverage_daycare.checked) {
		daycare_share = 0;
		console.log('share of daycare: ' + daycare_share);
	} else if (!coverage_nanny.checked && !coverage_babysitter.checked && !coverage_summer_camp.checked) {
		daycare_share = 1;
		console.log('share of daycare: ' + daycare_share);
	} else if (coverage_nanny.checked && coverage_babysitter.checked && coverage_summer_camp.checked) {
		daycare_share = .3;
		console.log('share of daycare: ' + daycare_share);
	} else if (!coverage_nanny.checked && !coverage_babysitter.checked && coverage_summer_camp.checked) {
		daycare_share = .5;
		console.log('share of daycare: ' + daycare_share);
	} else if (coverage_nanny.checked && coverage_babysitter.checked && !coverage_summer_camp.checked) {
		daycare_share = .5;
		console.log('share of daycare: ' + daycare_share);
	} else if (coverage_summer_camp.checked) {
		daycare_share = .4;
		console.log('share of daycare: ' + daycare_share);
	} else {
		daycare_share = .6;
		console.log('share of daycare: ' + daycare_share);
	};

	// contribution_monthly = parents_participating * contribution_pppm

	// contribution_yearly = parents_participating * contribution_pppm * 12

	// federal_tax_credit =IF(not_for_profit=1;0;MIN(daycare_share*parents_participating*contribution_pppm*12*0,25;150000))

	// federal_tax_shield =IF(not_for_profit=1;0;(daycare_share*parents_participating*contribution_pppm*12-federal_tax_credit)*0,21)

	// federal_tax_savings =(federal_tax_credit + federal_tax_shield) / contribution_yearly

	// state_tax_credit_ny =IF(not_for_profit=1;0;MIN(daycare_share*employees_ny*parents_usage*contribution_pppm*12*0,25;150000))

	// state_tax_shield_ny =IF(not_for_profit=1;0;(daycare_share*employees_ny*parents_usage*contribution_pppm*12-state_tax_credit_ny)*0,071)

	// state_tax_credit =state_tax_credit_ny+state_tax_credit_sc+state_tax_credit_ms+state_tax_credit_mn+state_tax_credit_nks+state_tax_credit_ri+state_tax_credit_other

	// state_tax_shield =state_tax_shield_ny+state_tax_shield_sc+state_tax_shield_ms+state_tax_shield_mn+state_tax_shield_ks+state_tax_shield_ri+state_tax_shield_other

	// state_tax_savings =(state_tax_credit+state_tax_shield)/contribution_yearly

	// const tax_benefit = federal_tax_savings + state_tax_savings

	// net_cost_pppm =contribution_pppm*(1-tax_benefit)

	// net_cost_monthly =parents_participating*net_cost_pppm

	// net_cost_yearly =+parents_participating*net_cost_pppm*12

	// salary_equivalent_pppm =contribution_pppm*(1+0,0665)

	// salary_equivalent_monthly =salary_equivalent_pppm*parents_participating

	// salary_equivalent_yearly =salary_equivalent_pppm*parents_participating*12
	
	//

	let display = 'display';

	// display
	tax_benefit_display.innerHTML = display;

	// modal
	tax_benefit_modal.innerHTML = display;
	contribution_pppm_modal.innerHTML =  contribution_pppm.value;
	federal_tax_savings_modal.innerHTML =  display;
	state_tax_savings_modal.innerHTML =  display;
	net_cost_pppm_modal.innerHTML =  display;
	salary_equivalent_pppm_modal.innerHTML =  display;

}

// interaction experience fixes

employees_ny.onfocus = function() { if (this.value == 0) { this.value = ''; }; };
employees_sc.onfocus = function() { if (this.value == 0) { this.value = ''; }; };
employees_ms.onfocus = function() { if (this.value == 0) { this.value = ''; }; };
employees_nm.onfocus = function() { if (this.value == 0) { this.value = ''; }; };
employees_ks.onfocus = function() { if (this.value == 0) { this.value = ''; }; };
employees_ri.onfocus = function() { if (this.value == 0) { this.value = ''; }; };
employees_other.onfocus = function() { if (this.value == 0) { this.value = ''; }; };

employees_ny.onblur = function() { if (this.value == '') { this.value = 0; }; };
employees_sc.onblur = function() { if (this.value == '') { this.value = 0; }; };
employees_ms.onblur = function() { if (this.value == '') { this.value = 0; }; };
employees_nm.onblur = function() { if (this.value == '') { this.value = 0; }; };
employees_ks.onblur = function() { if (this.value == '') { this.value = 0; }; };
employees_ri.onblur = function() { if (this.value == '') { this.value = 0; }; };
employees_other.onblur = function() { if (this.value == '') { this.value = 0; }; };