"use strict";

//Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
function showMultiplicationTable(x) {
    for (let i = 1; i <= 10; i++) {
        console.log('The number ' + x + ' times ' + i + ' = ' + (x*i))
    }
   
}
showMultiplicationTable(10)