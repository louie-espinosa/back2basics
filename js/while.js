"use strict";

//Create a while loop that uses console.log() to create the output shown below:
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

// let x = 2
// while (x <= 65536) {
//     console.log((x))
//     x += x*2 - x
// }

//DO WHILE LOOP
//An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.

//5 cones sold... if there are enough cones

//Cannot sell you 6 cones I only have 3... If there are not enough cones

//Yay! I sold them all... If there are no more cones

let allCones = Math.floor(Math.random() * 50) + 50;
do {
   const announcement = console.log('I have a total of ' + allCones + ' ice-cream cones avaialable for sale today!') ;

    let conesSold = Math.floor(Math.random() * 5) + 1;
    let conesRemaining = allCones - conesSold;
    console.log('I just sold ' + conesSold + ' cones!')
    console.log(' and I now have ' + conesRemaining + ' cones remaining for sale!')

} while (0);
