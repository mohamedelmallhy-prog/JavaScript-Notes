// ==========================================
// After - Before - Append
// ==========================================


// Get Elements
const after = document.getElementById("after");
const before = document.getElementById("before");
const append = document.getElementById("append");

const content = document.getElementById("content");
const container = document.getElementById("container");


// Container Style
container.style.backgroundColor = "#FFA";
container.style.height = "50px";


// Move Content After Container
after.onclick = function () {
    container.after(content);
};


// Move Content Before Container
before.onclick = function () {
    container.before(content);
};


// Move Content Inside Container
append.onclick = function () {
    container.append(content);
};