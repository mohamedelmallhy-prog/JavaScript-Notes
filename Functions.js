// ==========================================
// 1. Basic Function
// ==========================================

function sayWelcome() {
    console.log("Welcome Mohamed");
}

sayWelcome();


// ==========================================
// 2. Function with Parameters
// ==========================================

function sayHello(name) {
    console.log("Hello " + name);
}

for (let i = 1; i <= 3; i++) {
    sayHello("Mohamed");
}


// ==========================================
// 3. Multiple Parameters
// ==========================================

function studentInfo(name, age, country) {
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Country: " + country);
}

studentInfo("Mohamed", 19, "Egypt");


// ==========================================
// 4. Function Without Return
// console.log() only prints the value
// ==========================================

function number() {
    console.log(5);
}

let x = number();

console.log(x);


// ==========================================
// 5. Calculator Using Return
// ==========================================

function calculator(num1, num2, operation) {

    if (operation === "+") {
        return num1 + num2;
    }

    if (operation === "-") {
        return num1 - num2;
    }

    if (operation === "*") {
        return num1 * num2;
    }

    if (operation === "/") {
        return num1 / num2;
    }

    return "Invalid Operation";
}

console.log(calculator(10, 5, "+"));
console.log(calculator(10, 5, "-"));
console.log(calculator(10, 5, "*"));
console.log(calculator(10, 5, "/"));


// ==========================================
// 6. Return أكبر رقم
// ==========================================

function maxNumber(num1, num2) {

    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }

}

console.log(maxNumber(10, 5));
console.log(maxNumber(7, 20));