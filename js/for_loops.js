"use strict";

//1. Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
function showMultiplicationTable(x) {
    for (let i = 1; i <= 10; i++) {
        console.log( x + ' x ' + i + ' = ' + (x*i))
    }
}
//showMultiplicationTable(10)

//2. Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.
let luckyNumber = Math.floor(Math.random() * 182) + 19;

function randomTwentyToTwoHundred() {
  
    for (let i = 1; i <= 10; i++) {
        console.log(luckyNumber)
        if(Math.abs(luckyNumber[i] % 2) === 1) {
            console.log( luckyNumber[i] + ' is odd')
        } else {
            console.log( luckyNumber[i] + ' is even')
        }
       
    }
}
randomTwentyToTwoHundred();
