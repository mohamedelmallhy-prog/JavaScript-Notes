// ==========================================
// Challenge 1 - Even or Odd
// ==========================================

const isEven = (num) => {
    return num % 2 === 0 ? "Even" : "Odd";
};

console.log(isEven(10));
console.log(isEven(7));


// ==========================================
// Challenge 2 - Rectangle Area
// ==========================================

const rectangleArea = (width, height) => {
    return width * height;
};

console.log(rectangleArea(10, 5));


// ==========================================
// Challenge 3 - Find Smallest Number
// ==========================================

const findSmallest = (num1, num2) => {
    return num1 < num2 ? num1 : num2;
};

console.log(findSmallest(20, 10));


// ==========================================
// Challenge 4 - Temperature Converter
// ==========================================

const temperature = (celsius) => {
    return (celsius * 9) / 5 + 32;
};

console.log(temperature(20));


// ==========================================
// Challenge 5 - Average
// ==========================================

const average = (num1, num2, num3) => {
    return (num1 + num2 + num3) / 3;
};

console.log(average(10, 20, 30));


// ==========================================
// Challenge 6 - Word Length
// ==========================================

const wordLength = (word) => {
    return word.length;
};

console.log(wordLength("Mohamed"));


// ==========================================
// Challenge 7 - Greeting
// ==========================================

const greet = (name) => {
    return `Hello ${name} `;
};

console.log(greet("Mohamed"));


// ==========================================
// Challenge 8 - Calculator Using Switch
// ==========================================

const calculatorSwitch = (num1, num2, operation) => {

    switch (operation) {

        case "+":
            return num1 + num2;

        case "-":
            return num1 - num2;

        case "*":
            return num1 * num2;

        case "/":
            return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";

        default:
            return "Invalid Operation";
    }

};

console.log(calculatorSwitch(10, 5, "+"));
console.log(calculatorSwitch(10, 5, "-"));
console.log(calculatorSwitch(10, 5, "*"));
console.log(calculatorSwitch(10, 5, "/"));


// ==========================================
// Challenge 9 - Maximum Of Three Numbers
// ==========================================

const maxOfThree = (num1, num2, num3) => {

    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }

};

console.log(maxOfThree(10, 30, 20));


// ==========================================
// Challenge 10 - Grade System
// ==========================================

const grade = (score) => {

    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }

};

console.log(grade(95));
console.log(grade(82));
console.log(grade(74));
console.log(grade(65));
console.log(grade(40));