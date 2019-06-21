"use strict";
(function () {
    var numberPicked;
    do {
        numberPicked = Number(prompt("Pick an odd number between 1 and 50."));
        if (numberPicked % 2 === 0)
            alert(numberPicked + " is not an odd number, please pick again.");
        else if (numberPicked < 1 || numberPicked > 50)
            alert(numberPicked + " is not between 1 and 50");
        else if (typeof Number(numberPicked) != "number" && Number(numberPicked) == NaN);
            alert(numberPicked + " is not a number");
        else
        {
            alert("you picked the right number");
            break;
        }
    } while (true)

    var kerime = function (skip) {
        for (var i = 1; 1 < 50; i += 2) {
            if (i === skip) {
                console.log("Yikes skipping number:" + i);
                continue;
            }
            console.log("Here is an odd number:" + i)
        }
    }
        var userEntered = Number(prompt("Enter a number"));
        kerime(userEntered);
} ) () ;