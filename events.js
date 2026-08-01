// let btn = document.getElementById("btn");

// btn.addEventListener("click", function() {
//     document.body.style.backgroundColor = "red";
// });

// btn.addEventListener("click", function() {
//     btn.style.backgroundColor = "blue";
// });

// btn.addEventListener("click", function() {
//     btn.style.color = "white";
// });

// السؤال الأول 
let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    console.log("hello");
});

// السؤال الثاني
let btn2 = document.querySelector(".btn");

btn2.addEventListener("click", function() {
    document.body.style.backgroundColor = "green";
});

// السؤال الثالث
let btn3 = document.querySelector(".btn3");
let isBlack = false;

btn3.addEventListener("click", function () {

    if (isBlack) {
        document.body.style.backgroundColor = "white";
        isBlack = false;
    } else {
        document.body.style.backgroundColor = "black";
        isBlack = true;
    }

});

// السؤال الرابع
let btn4 = document.querySelector(".btn4");

let colors = [
    "red",
    "blue",
    "green",
    "orange",
    "black"
];

let index = 0;

btn4.addEventListener("click", function () {

    document.body.style.backgroundColor = colors[index];

    index++;

    if (index == colors.length) {
        index = 0;
    }

});