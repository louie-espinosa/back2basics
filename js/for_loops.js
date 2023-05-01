"use strict";

//1. Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
function showMultiplicationTable(x) {
    for (let i = 1; i <= 10; i++) {
        console.log( x + ' x ' + i + ' = ' + (x*i))
    }
}
//showMultiplicationTable(10)

//2. Use a for-loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.

//Note: Initializing luckyNumber Math.random outside the for-loop will generate ONE random number ten times, but moving it INSIDE the for-loop will generate ten DIFFERENT random numbers
function randomTwentyToTwoHundred() {
    for (let i = 1; i <= 10; i++) {
        
        let luckyNumber = Math.floor(Math.random() * 183) + 20;
        
        if(Math.abs(luckyNumber % 2) === 1) {
            console.log( luckyNumber + ' is odd')
        } else {
            console.log( luckyNumber + ' is even')
        }
       
    }
}
//randomTwentyToTwoHundred();

//3. Make this with for loop:
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// for (let i = 1; i <= 9; i++) {
//     console.log(i.toString().repeat(i));
// }


//4.
for (let i = 100; i >= 5; i--) {
    if (i % 5 === 0)
    console.log(i) 
}