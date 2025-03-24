// passwordPrompt.js

const correctPassword = "correctPassword";

let userPassword;

do {
    userPassword = prompt("Enter your password:");

    // Check if the password is correct
    if (userPassword !== correctPassword) {
        console.log("Incorrect, try again.");
    }
} while (userPassword !== correctPassword);

console.log("Access granted.");
