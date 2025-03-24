// ageCheck.js
let age = prompt("Enter your age:");
age = Number(age);

if (age < 13) {
    console.log("You are a child.");
} else if (age >= 13 && age <= 19) {
    console.log("You are a teenager.");
} else if (age >= 20) {
    console.log("You are an adult.");
} else {
    console.log("Invalid input. Please enter a valid age.");
}
