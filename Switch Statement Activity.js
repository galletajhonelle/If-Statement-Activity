// taskCalendar.js

// Prompt the user to enter a day of the week
let day = prompt("Enter a day of the week:");

// Convert the input to lowercase to make it case-insensitive
day = day.toLowerCase();

// Use a switch statement to assign tasks for each day
switch (day) {
    case "monday":
        console.log("Your task for Monday is: Finish your assignments.");
        break;
    case "tuesday":
        console.log("Your task for Tuesday is: Attend team meetings.");
        break;
    case "wednesday":
        console.log("Your task for Wednesday is: Submit project updates.");
        break;
    case "thursday":
        console.log("Your task for Thursday is: Review reports.");
        break;
    case "friday":
        console.log("Your task for Friday is: Plan for the next week.");
        break;
    case "saturday":
        console.log("Your task for Saturday is: Enjoy a family day.");
        break;
    case "sunday":
        console.log("Your task for Sunday is: Relax and prepare for the week ahead.");
        break;
    default:
        console.log("Invalid input. Please enter a valid day of the week.");
}
