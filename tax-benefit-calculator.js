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
tax_benefit_display.innerHTML = '0.00';

tax_benefit_modal.innerHTML =  '0.00';
contribution_pppm_modal.innerHTML =  '0';
federal_tax_savings_modal.innerHTML =  '0.00';
state_tax_savings_modal.innerHTML =  '0.00';
net_cost_pppm_modal.innerHTML =  '0.00';
salary_equivalent_pppm_modal.innerHTML =  '0.00';

// interaction triggers

not_for_profit.onchange = function() {
	console.log('modo ONG mudou');
}

employees_ny.oninput = function() {
	employees();
	calcTudo();
}

employees_sc.oninput = function() {
	employees();
	calcTudo();
}

employees_ms.oninput = function() {
	employees();
	calcTudo();
}

employees_nm.oninput = function() {
	employees();
	calcTudo();
}

employees_ks.oninput = function() {
	employees();
	calcTudo();
}

employees_ri.oninput = function() {
	employees();
	calcTudo();
}

employees_other.oninput = function() {
	employees();
	calcTudo();
}

coverage_zero_to_five.onchange = function() {
	zero_to_five();
	calcTudo();
}

coverage_six_to_thirteen.onchange = function() {
	six_to_thirteen();
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

// interaction functions

function notforprofit() {
	if (not_for_profit.checked) {
		employees_ny.disabled = true;
		employees_sc.disabled = true;
		employees_ms.disabled = true;
		employees_nm.disabled = true;
		employees_ks.disabled = true;
		employees_ri.disabled = true;
		employees_other.disabled = true;
		coverage_zero_to_five.disabled = true;
		coverage_six_to_thirteen.disabled = true;
		coverage_zero_to_five.checked = false;
		coverage_six_to_thirteen.checked = false;
		contribution_pppm.disabled = true;
	} else {
		employees_ny.disabled = false;
		employees_sc.disabled = false;
		employees_ms.disabled = false;
		employees_nm.disabled = false;
		employees_ks.disabled = false;
		employees_ri.disabled = false;
		employees_other.disabled = false;
		coverage_zero_to_five.disabled = false;
		coverage_six_to_thirteen.disabled = false;
		contribution_pppm.disabled = false;
	}
}

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
}

function zero_to_five() {
	if (coverage_zero_to_five.checked) {
		coverage_daycare.disabled = false;
		coverage_nanny.disabled = false;
		coverage_babysitter.disabled = false;
	} else if (!coverage_six_to_thirteen.checked) {
		coverage_daycare.disabled = true;
		coverage_nanny.disabled = true;
		coverage_babysitter.disabled = true;
		coverage_daycare.checked = false;
		coverage_nanny.checked = false;
		coverage_babysitter.checked = false;
	} else {
		coverage_daycare.disabled = true;
		coverage_daycare.checked = false;
	}
}

function six_to_thirteen() {
	if (coverage_six_to_thirteen.checked) {
		coverage_nanny.disabled = false;
		coverage_babysitter.disabled = false;
		coverage_summer_camp.disabled = false;
	} else if (!coverage_zero_to_five.checked) {
		coverage_nanny.disabled = true;
		coverage_babysitter.disabled = true;
		coverage_summer_camp.disabled = true;
		coverage_nanny.checked = false;
		coverage_babysitter.checked = false;
		coverage_summer_camp.checked = false;
	} else {
		coverage_summer_camp.disabled = true;
		coverage_summer_camp.checked = false;
	}
}

// parseInt functions

function getEmployeesNy() {
	return parseInt(employees_ny.value, 10);
}

function getEmployeesSc() {
	return parseInt(employees_sc.value, 10);
}

function getEmployeesMs() {
	return parseInt(employees_ms.value, 10);
}

function getEmployeesNm() {
	return parseInt(employees_nm.value, 10);
}

function getEmployeesKs() {
	return parseInt(employees_ks.value, 10);
}

function getEmployeesRi() {
	return parseInt(employees_ri.value, 10);
}

function getEmployeesOther() {
	return parseInt(employees_other.value, 10);
}

function getContributionPppm() {
	return parseInt(contribution_pppm.value, 10);
}

// input variables

let employeesNy = getEmployeesNy();
let employeesSc = getEmployeesSc();
let employeesMs = getEmployeesMs();
let employeesNm = getEmployeesNm();
let employeesKs = getEmployeesKs();
let employeesRi = getEmployeesRi();
let employeesOther = getEmployeesOther();
let contributionPppm = getContributionPppm()

// calculation variables

let employees_total = employeesTotal();
let parent_usage = parentUsage();
let usageNy = getUsageNy();
let usageSc = getUsageSc();
let usageMs = getUsageMs();
let usageNm = getUsageNm();
let usageKs = getUsageKs();
let usageRi = getUsageRi();
let usageOther = getUsageOther();
let parents_participating = parentsParticipating();
let daycare_share = daycareShare();
let contribution_monthly = contributionMonthly();
let contribution_yearly = contributionYearly();
let federal_tax_credit = federalTaxCredit();
let federal_tax_shield = federalTaxShield();
let federal_tax_savings = federalTaxSavings();
let state_tax_credit_ny = stateTaxCreditNy();
let state_tax_credit_sc = stateTaxCreditSc();
let state_tax_credit_ms = stateTaxCreditMs();
let state_tax_credit_nm = stateTaxCreditNm();
let state_tax_credit_ks = stateTaxCreditKs();
let state_tax_credit_ri = stateTaxCreditRi();
let state_tax_shield_ny = stateTaxShieldNy();
let state_tax_shield_sc = stateTaxShieldSc();
let state_tax_shield_ms = stateTaxShieldMs();
let state_tax_shield_nm = stateTaxShieldNm();
let state_tax_shield_ks = stateTaxShieldKs();
let state_tax_shield_ri = stateTaxShieldRi();
let state_tax_shield_other = stateTaxShieldOther();
let state_tax_credit = stateTaxCredit();
let state_tax_shield = stateTaxShield();
let state_tax_savings = stateTaxSavings();
let tax_benefit = taxBenefit();
let net_cost_pppm = netCostPppm();
let net_cost_monthly = netCostMonthly();
let net_cost_yearly = netCostYearly();
let salary_equivalent_pppm = salaryEquivalentPppm();
let salary_equivalent_monthly = salaryEquivalentMonthly();
let salary_equivalent_yearly = salaryEquivalentYearly();

// calculation functions (v2)

function employeesTotal() {
	return parseInt(employees_total_display.value, 10);
}

function parentUsage() {
	if (coverage_zero_to_five.checked && coverage_six_to_thirteen.checked) {
		return .2;
	} else if (coverage_zero_to_five.checked || coverage_six_to_thirteen.checked) {
		return .1;
	} else {
		return 0;
	}
}

function getUsageNy() {
	return Math.round(employeesNy * parent_usage);
}

function getUsageSc() {
	return Math.round(employeesSc * parent_usage);
}

function getUsageMs() {
	return Math.round(employeesMs * parent_usage);
}

function getUsageNm() {
	return Math.round(employeesNm * parent_usage);
}

function getUsageKs() {
	return Math.round(employeesKs * parent_usage);
}

function getUsageRi() {
	return Math.round(employeesRi * parent_usage);
}

function getUsageOther() {
	return Math.round(employeesOther * parent_usage);
}

function parentsParticipating() {
	return usageNy + usageSc + usageMs + usageNm + usageKs + usageRi + usageOther;
}

function daycareShare() {
	if (!coverage_daycare.checked) {
		return 0;
	} else if (!coverage_nanny.checked && !coverage_babysitter.checked && !coverage_summer_camp.checked) {
		return 1;
	} else if (coverage_nanny.checked && coverage_babysitter.checked && coverage_summer_camp.checked) {
		return .3;
	} else if (!coverage_nanny.checked && !coverage_babysitter.checked && coverage_summer_camp.checked) {
		return .5;
	} else if (coverage_nanny.checked && coverage_babysitter.checked && !coverage_summer_camp.checked) {
		return .5;
	} else if (coverage_summer_camp.checked) {
		return .4;
	} else {
		return .6;
	};
}

function contributionMonthly() {
	return parents_participating * contributionPppm;
}

function contributionYearly() {
	return parents_participating * contributionPppm * 12;
}

function federalTaxCredit() {
	if (not_for_profit.checked) {
		return 0;
	} else {
		return Math.min(daycare_share * parents_participating * contributionPppm * 12 * .25, 150000);
	};
}

function federalTaxShield() {
	if (not_for_profit.checked) {
		return 0;
	} else {
		return (daycare_share * parents_participating * contributionPppm * 12 - federal_tax_credit) * .21;
	}
}

function federalTaxSavings() {
	if (contribution_yearly == 0) {
		return 0;
	} else {
		return (federal_tax_credit + federal_tax_shield) / contribution_yearly;
	}
}



// ----------------------------------------------------------------------------------------------------
// STATE TAX SAVINGS
// ----------------------------------------------------------------------------------------------------

function stateTaxCreditNy() {
	if (not_for_profit.checked) {
		return 0;
	} else {
		return Math.min(daycare_share * usageNy * contributionPppm * 12 * .25, 150000);
	}
}

function stateTaxShieldNy() {
	if (not_for_profit.checked) {
		return 0;
	} else {
		return (daycare_share * usageNy * contributionPppm * 12 - state_tax_credit_ny) * .071;
	}
}

function stateTaxCreditSc() {
	if (not_for_profit.checked) {
		return 0;
	} else {
		return Math.min(daycare_share * usageSc * contributionPppm * 12 * .5, daycare_share * usageSc * 3000);
	}
}

function stateTaxShieldSc() {
	if (not_for_profit.checked) {
		return 0;
	} else {
		return (daycare_share * usageSc * contributionPppm * 12 - state_tax_credit_sc) * .05;
	}
}

function stateTaxCreditMs() {
	if (not_for_profit.checked) {
		return 0;
	} else {
		return daycare_share * usageMs * contributionPppm * 12 * .5;
	}
}

function stateTaxShieldMs() {
	if (not_for_profit.checked) {
		return 0;
	} else {
		return (daycare_share * usageMs * contributionPppm * 12 - state_tax_credit_ms) * .05;
	}
}

function stateTaxCreditNm() {
	if (not_for_profit.checked) {
		return 0;
	} else {
		return Math.min(daycare_share * usageNm * contributionPppm * 12 * .3, 30000);
	}
}

function stateTaxShieldNm() {
	if (not_for_profit.checked) {
		return 0;
	} else {
		return (daycare_share * usageNm * contributionPppm * 12 - state_tax_credit_nm) * .076;
	}
}

function stateTaxCreditKs() {
	if (not_for_profit.checked) {
		return 0;
	} else {
		return Math.min(daycare_share * usageKs * contributionPppm * 12 * .3, 30000);
	}
}

function stateTaxShieldKs() {
	if (not_for_profit.checked) {
		return 0;
	} else {
		return (daycare_share * usageKs * contributionPppm * 12 - state_tax_credit_ks) * .07;
	}
}

function stateTaxCreditRi() {
	if (not_for_profit.checked) {
		return 0;
	} else {
		return Math.min(daycare_share * usageRi * contributionPppm * 12 * .3, 30000);
	}
}

function stateTaxShieldRi() {
	if (not_for_profit.checked) {
		return 0;
	} else {
		return (daycare_share * usageRi * contributionPppm * 12 - state_tax_credit_ri) * .07;
	}
}

function stateTaxShieldOther() {
	if (not_for_profit.checked) {
		return 0;
	} else {
		return (daycare_share * usageOther * contributionPppm * 12) * .05;
	}
}

// ----------------------------------------------------------------------------------------------------



function stateTaxCredit() {
	return state_tax_credit_ny + state_tax_credit_sc + state_tax_credit_ms + state_tax_credit_nm + state_tax_credit_ks + state_tax_credit_ri;
}

function stateTaxShield() {
	return state_tax_shield_ny + state_tax_shield_sc + state_tax_shield_ms + state_tax_shield_nm + state_tax_shield_ks + state_tax_shield_ri + state_tax_shield_other;
}

function stateTaxSavings() {
	if (contribution_yearly == 0) {
		return 0;
	} else {
		return (state_tax_credit + state_tax_shield) / contribution_yearly;
	}
}

function taxBenefit() {
	return federal_tax_savings + state_tax_savings;
}

function netCostPppm() {
	return contributionPppm * (1 - tax_benefit);
}

function netCostMonthly() {
	return parents_participating * net_cost_pppm;
}

function netCostYearly() {
	return parents_participating * net_cost_pppm * 12;
}

function salaryEquivalentPppm() {
	return contributionPppm * (1 + .0665);
}

function salaryEquivalentMonthly() {
	return salary_equivalent_pppm * parents_participating;
}

function salaryEquivalentYearly() {
	return salary_equivalent_pppm * parents_participating * 12;
}

function atualiza() {
	//
	employeesNy = getEmployeesNy();
	employeesSc = getEmployeesSc();
	employeesMs = getEmployeesMs();
	employeesNm = getEmployeesNm();
	employeesKs = getEmployeesKs();
	employeesRi = getEmployeesRi();
	employeesOther = getEmployeesOther();
	contributionPppm = getContributionPppm()

	//
	employees_total = employeesTotal();
	parent_usage = parentUsage();
	usageNy = getUsageNy();
	usageSc = getUsageSc();
	usageMs = getUsageMs();
	usageNm = getUsageNm();
	usageKs = getUsageKs();
	usageRi = getUsageRi();
	usageOther = getUsageOther();
	parents_participating = parentsParticipating();
	daycare_share = daycareShare();
	contribution_monthly = contributionMonthly();
	contribution_yearly = contributionYearly();
	federal_tax_credit = federalTaxCredit();
	federal_tax_shield = federalTaxShield();
	federal_tax_savings = federalTaxSavings();
	state_tax_credit_ny = stateTaxCreditNy();
	state_tax_shield_ny = stateTaxShieldNy();
	state_tax_credit = stateTaxCredit();
	state_tax_shield = stateTaxShield();
	state_tax_savings = stateTaxSavings();
	tax_benefit = taxBenefit();
	net_cost_pppm = netCostPppm();
	net_cost_monthly = netCostMonthly();
	net_cost_yearly = netCostYearly();
	salary_equivalent_pppm = salaryEquivalentPppm();
	salary_equivalent_monthly = salaryEquivalentMonthly();
	salary_equivalent_yearly = salaryEquivalentYearly();
}

function calcTudo() {
	atualiza();
	tax_benefit_display.innerHTML = parseInt(tax_benefit * 100);
	tax_benefit_modal.innerHTML = parseInt(tax_benefit * 100);
	contribution_pppm_modal.innerHTML =  contributionPppm;
	federal_tax_savings_modal.innerHTML =  parseInt(federal_tax_savings * 100);
	state_tax_savings_modal.innerHTML =  parseInt(state_tax_savings * 100);
	net_cost_pppm_modal.innerHTML =  parseInt(net_cost_pppm);
	salary_equivalent_pppm_modal.innerHTML =  parseInt(salary_equivalent_pppm);
}

function printa() {
	atualiza();

	//
	console.log('employeesNy: ' + employeesNy);
	console.log('employeesSc: ' + employeesSc);
	console.log('employeesMs: ' + employeesMs);
	console.log('employeesNm: ' + employeesNm);
	console.log('employeesKs: ' + employeesKs);
	console.log('employeesRi: ' + employeesRi);
	console.log('employeesOther: ' + employeesOther);
	console.log('contributionPppm: ' + contributionPppm);

	//
	console.log('employees_total: ' + employees_total);
	console.log('parent_usage: ' + parent_usage);
	console.log('parents_participating: ' + parents_participating);
	console.log('daycare_share: ' + daycare_share);
	console.log('contribution_monthly: ' + contribution_monthly);
	console.log('contribution_yearly: ' + contribution_yearly);
	console.log('federal_tax_credit: ' + federal_tax_credit);
	console.log('federal_tax_shield: ' + federal_tax_shield);
	console.log('federal_tax_savings: ' + federal_tax_savings);
	console.log('state_tax_credit_ny: ' + state_tax_credit_ny);
	console.log('state_tax_shield_ny: ' + state_tax_shield_ny);
	console.log('state_tax_credit: ' + state_tax_credit);
	console.log('state_tax_shield: ' + state_tax_shield);
	console.log('state_tax_savings: ' + state_tax_savings);
	console.log('tax_benefit: ' + tax_benefit);
	console.log('net_cost_pppm: ' + net_cost_pppm);
	console.log('net_cost_monthly: ' + net_cost_monthly);
	console.log('net_cost_yearly: ' + net_cost_yearly);
	console.log('salary_equivalent_pppm: ' + salary_equivalent_pppm);
	console.log('salary_equivalent_monthly: ' + salary_equivalent_monthly);
	console.log('salary_equivalent_yearly: ' + salary_equivalent_yearly);
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