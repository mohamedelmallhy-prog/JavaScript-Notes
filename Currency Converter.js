// ==========================================
// Currency Converter
// USD <=> EGP
// ==========================================


// Get Elements
const dollar = document.getElementById("dollar");
const pound = document.getElementById("pound");


// Exchange Rate
const exchangeRate = 50.12;


// Convert USD To EGP
dollar.onkeyup = function () {

    pound.value = dollar.value * exchangeRate;

};


// Convert EGP To USD
pound.onkeyup = function () {

    dollar.value = pound.value / exchangeRate;

};