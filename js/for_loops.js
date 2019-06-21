"use strict";
(function () {
    var showMultiplicationTable = function (num) {
        for (var i = 1; i <= 10; i++) {
            console.log(num + "x" + i + "=" + (i * parseInt(num)));
        }
    }
    showMultiplicationTable(7);

    for (var j = 1; j < 11; j++) {

        var randomNum = Math.floor(Math.random() * 180) + 20;
        var remainderNum = randomNum % 2;
        if (remainderNum === 0) {
            console.log(randomNum + " is even");
        } else {
            console.log(randomNum + " is odd");
        }
    }
    var chri = function () {
        for (var out = 1; out <= 9; out++) {
            var output = '';
            for (var inn = 1; inn <= out; inn++) {
                output += out;
            }
            console.log(output)
        }
    }
    chri();

    for(var q=100;q>=5;q-=5)
        console.log(q);

})();