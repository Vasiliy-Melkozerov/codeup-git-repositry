"use strict";

console.log("Hello from external JavaScript");

alert('Welcome to my Website!');
let userColor = prompt("What is your favorite color?");
alert("What a coincidence, " + userColor + " is my favorite color too!");

let theLittleMermaid = Number(prompt("How many days are you renting the Little Mermaid?"));
let brotherBear = Number(prompt("How many days are you renting Brother Bear?"));
let hercules = Number(prompt("How many days are you renting Hercules?"));

let total = (theLittleMermaid + brotherBear + hercules) * 3;

alert("You owe the Hollywood Video: $" + total.toFixed(2));

let googleRate = 400;
let amazonRate = 380;
let facebookRate = 350;

let google = Number(prompt("How many hours did you work for Google this week?"));
let amazon = Number(prompt("How many hours did you work for Amazon this week?"));
let facebook = Number(prompt("How many hours did you work for Facebook this week?"));

alert("You earned $" + ((google * googleRate) + (amazon * amazonRate) + (facebook * facebookRate)).toFixed(2));

let classTime = prompt("What time is the class?");
let noScheduleConflict = confirm("Is the student available at " + classTime + "?");

let maxClassSize = Number(prompt("What's the maximum class size?"));
let studentsEnrolled = Number(prompt("How many students are currently enrolled?"));
console.log(studentsEnrolled <= maxClassSize);

alert("Student can enroll in class: " + (noScheduleConflict && (studentsEnrolled < maxClassSize)));
