"use strict";
//BREAK AND CONTINUE
//1. Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

let userOddNumber = prompt('Enter an odd number between 1 and 50: ');

while(Number(isNaN(userOddNumber) || Math.abs(userOddNumber % 2) !== 1)) {
    userOddNumber = prompt('You did not enter an odd number. Please enter an odd number between 1 and 50: ');
            break; //breaking out of the code will not read any other code beneath
}    
console.log('Number to skip is: ' + userOddNumber )                 
for (let i = 0; i <= 50; i++) {
        //We are looking to print i now so the condition should check the i NOT the userOddNumber. IMPORTANT: the first condition will not continue (skip) if using '===', instead of '==' because it checks for stricter condition that userOddNumber is equal in value AND data type to i.
              
    if (i == userOddNumber || i % 2 === 0) {
        continue;
    }  
    console.log(i)
}

