// Day 8 - JavaScript Basics Practice
// Frontend Development Internship - NexaSecure Tech

// Variables
let name = "Muzalfa";
let age = 21;
const country = "Pakistan";

console.log("Name:", name);
console.log("Age:", age);
console.log("Country:", country);

//Conditions
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are under 18.");
}

// Functions
function greet(userName) {
    console.log("Hello, " + userName + "! Welcome to JavaScript.");
}

greet(name);

// Loops

// For Loop
for (let i = 1; i <= 5; i++) {
    console.log("For Loop Number:", i);
}

// While Loop
let num = 1;
while (num <= 3) {
    console.log("While Loop Number:", num);
    num++;
}

// Debugging Practice
console.log("JavaScript Day 8 Practice Completed Successfully!");