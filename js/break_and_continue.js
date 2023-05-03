"use strict";
//BREAK AND CONTINUE
//1. Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

let userOddNumber = prompt('Enter an odd number between 1 and 50: ');

let output = ""
for (let i = 0; i <= 50; i++) {
    if (Math.abs(userOddNumber % 2) !== 1 || isNaN(userOddNumber) || userOddNumber < 1 || userOddNumber > 50) {
        
        let UserOddNumber = prompt('You did not enter an odd number. Please enter an odd number between 1 and 50: ');
        break;

    } else {
        output += i;
        continue;
    }
}

