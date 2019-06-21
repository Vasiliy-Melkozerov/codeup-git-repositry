"use strict";
(function(){
var product=2;
while (product <= 65536) {
    console.log(product);
    product=product * 2;
}
var allCones = Math.floor(Math.random() * 50) + 50;

do {
    var cones = Math.ceil(Math.random() * 5) ;
    allCones = allCones - cones;
    console.log( cones + " cones sold.");
    if (cones > allCones)
    {console.log("I cannot sell you " + cones + ", I only have " + allCones + " left.")
    }

} while (allCones > 0);
console.log("Yay! I sold them all!")
}());