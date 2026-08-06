// ==========================================
// Get Elements
// ==========================================

const txt = document.getElementById("txt");
const myBtn = document.getElementById("btn");


// ==========================================
// Auto Event - Page Load
// ==========================================

window.onload = function () {

    // Focus on the input
    txt.focus();

    // Click the button automatically
    myBtn.click();

    // Change placeholder text
    txt.placeholder = "Test";

    // Or set input value
    // txt.value = "Test";

};


// ==========================================
// Right Click Event
// ==========================================

txt.oncontextmenu = function () {

    // Remove focus from input
    txt.blur();

};


// ==========================================
// Button Click Event
// ==========================================

myBtn.onclick = function () {

    // Change button background color
    myBtn.style.backgroundColor = "#ffa";

};