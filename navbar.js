// ==========================================
// Get Elements
// ==========================================

const btnOpen = document.getElementById("open");
const btnClose = document.getElementById("close");
const container = document.querySelector(".container");


// ==========================================
// Close Sidebar
// ==========================================

btnClose.onclick = function () {

    // Hide Sidebar
    container.classList.add("hide");

    // Hide Close Button
    this.classList.add("hide");

    // Show Open Button
    btnOpen.classList.remove("hide");

};


// ==========================================
// Open Sidebar
// ==========================================

btnOpen.onclick = function () {

    // Hide Open Button
    this.classList.add("hide");

    // Show Close Button
    btnClose.classList.remove("hide");

    // Show Sidebar
    container.classList.remove("hide");

};