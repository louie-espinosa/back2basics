"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(color) { 
//     if (color === "red") {
//         console.log("To show the world the blood we shed!")
//     } else if (color === "gold") {
//         console.log("To show the world that we are bold!")
//     } else if (color === "blue") {
//         console.log("To show the world that we are true")
//     } else {
//         console.log("I dont know anything about " + color);
//     }
    
// }

//console.log(analyzeColor("green"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
//console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
// function analyzeColor(color) {
//     switch(color) {
//         case 'red':
//             console.log('To show the world the blood we shed')
//             break;
//         case 'gold':
//             console.log('To show the world that we are bold')
//             break;
//         case 'blue':
//             console.log('To show the world that we are true')
//             break;
//         default:
//             console.log('I dont know anything about ' + color
//             break;
//     }
// }
//console.log(analyzeColor(randomColor))
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */
// let userChoice = prompt("What color is your favorite flower?");
// function analyzeColor(color) {
//     switch(color) {
//         case 'red':
//             alert('To show the world the blood we shed')
//             break;
//         case 'gold':
//             alert('To show the world that we are bold')
//             break;
//         case 'blue':
//             alert('To show the world that we are true')
//             break;
//         default:
//             alert('I dont know anything about ' + color)
//             break;
//     }
    
// }
//analyzeColor(userChoice);
/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(l, t) {
    if (l == 1) {
        l = .10
        console.log('You qualified for a 10% discount.')
    } else if (l == 2) {
        l = .25
        console.log('You qualified for a 25% discount!')
    } else if (l == 3) {
        l = .35
        console.log('You qualified for a 35% discount!')
    } else if (l == 4) {
        l = .50
        console.log('You qualified for a 50% discount!')
    } else if (l == 5) {
        l = 1
        console.log('You qualified for a 100% discount!')
    } else console.log('Sorry you did not qualify for a discount today.')

    return t- (t * l);
}
//console.log(calculateTotal(5, 100));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// let luckyNumber = Math.floor(Math.random() * 6);
// let billTotal = prompt('You may qualify for a discount today. Please let us know what your total bill is:');

// (calculateTotal(luckyNumber, billTotal)) >= billTotal ? alert('Were sorry, but you did not qualify for a discount today. Youre total is: $' + billTotal) : alert( 'Great, your total after your discount is: $' +(calculateTotal(luckyNumber, billTotal)).toFixed(2));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

//I want to run this until the user sees all information in this function
//do {
let userAgrees = confirm('try your luck and enter a number?')

if (userAgrees) {
    let userNumber = askUser();
    console.log(userNumber)
    //Show the user the alerts ONLY if they enter a number
    if (isNaN(userNumber)) {
        alert('Please enter ONLY a number')
    } else {
        alert('The number you entered is: ' + userNumber);
        //Need conditions for the next two 'alerts'
        if (Math.abs(userNumber % 2) == 1) {
            alert('The number ' + userNumber + ' is odd')
        } else {
            alert('The number ' + userNumber + ' is even')
        }
        // alert('Your number is positive or negative')
        if (userNumber >= 0) {
            alert('The number ' + userNumber + ' is positive')
        } else {
            alert('The number ' + userNumber + ' is negative')
        }
    }
}
//refactor when prompting for given data
function askUser () {
    return prompt('Please enter a number: ');
}


//} while () 

