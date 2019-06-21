"use strict";

console.log("Hello from external JavaScript");

alert('Welcome to my Website!');
var userColor = prompt("What is your favorite color?");
alert("What a coincidence, " + userColor + " is my favorite color too!");

var pacificRimRental = Number(prompt("How many days are you renting Pacific Rim?"));
var avengersUltronRental = Number(prompt("How many days are you renting Avengers: Age of Ultron?"));
var fastAndFurious = Number(prompt("How many days are you renting Fast and Furious 12?"));

var total = (pacificRimRental + avengersUltronRental + fastAndFurious) * 3;

alert("You owe the Hollywood Video: $" + total.toFixed(2));

var favorRate = 320;
var uberRate = 400;
var writingCode = 200;

var favorHours = Number(prompt("How many hours did you deliver for Favor this week?"));
var uberHours = Number(prompt("How many hours did you drive Uber this week?"));
var codingHours = Number(prompt("How many hours did you freelance code this week?"));

alert("You earned $" + ((favorHours * favorRate) + (uberHours * uberRate) + (codingHours * writingCode)).toFixed(2));

var classTime = prompt("What time is the class?");
var noScheduleConflict = !confirm("Does the student have a class at " + classTime);

var maxClassSize = Number(prompt("What's the maximum class size?"));
var studentsEnrolled = Number(prompt("How many students are currently enrolled?"));
console.log(studentsEnrolled < maxClassSize);
alert("Student can enroll in class: " + (noScheduleConflict && (studentsEnrolled < maxClassSize)));
