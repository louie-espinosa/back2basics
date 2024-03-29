(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
const person = {}
    person.firstName = 'Louie'
    person.lastName = 'Espinosa'
    //console.log('My first name is ' + person.firstName)
    //console.log('My last name is ' + person.lastName)
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
person.sayHello = function () {
    return "Hello from " + person.firstName + " " + person.lastName + "!"
}
//Note to self when printing/calling functions do NOT forget the paranthesis
console.log(person.sayHello())
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    //I spent an hour attempting to nest a forEach for the amount, but the amount isnt an array of amounts(values)...Smacks own head!!!
shoppers.hebRewards = function() {
    shoppers.forEach(function(shopper) {
        let discount = shopper.amount *.12;
        let final = shopper.amount - discount;
        if (shopper.amount > 200) {
            console.log('You\'ve spent $' + shopper.amount + ', Congrats you\'ve earned a twelve percent discount, or $' + discount.toFixed(2) + ' off your bill! Your new total is: $' + final.toFixed(2))
        } else {
            console.log('You\'ve spent $' + shopper.amount + ', Unfortunately you did not qualify for the discount today. Your total is $' + shopper.amount.toFixed(2))
        }
    })
}
//shoppers.hebRewards();
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
let books =  [];
// let books = [
//     { 
//         title: 'Revelation', 
//         author: {firstName: 'John', lastName: 'The Revelator'}
//     },
//     {
//         title: 'It\'s Dangerous to be Right When the Government is Wrong',
//         author: {firstName: 'Andrew', lastName: 'Napolitano'}
//     },
//     {
//         title: 'Build: An Unorthodox Guide to Making Things Worth Making',
//         author: {firstName: 'Tony', lastName: 'Fadell'}
//     },
//     {
//         title: '12 Rules For Life',
//         author: {firstName: 'Jordan', lastName: 'Peterson'}
//     },
//     {
//         title: 'Black Rednecks and White Liberals',
//         author: {firstName: 'Thomas', lastName: 'Sowell'}
//     }
// ]
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

//Reactored loop and moved to L153 for use in function, per bonus.
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    books.createBook = function(title, firstName, lastName) {
        let newBook = {
            title: title,
            author: {firstName, lastName}
        }
        
        return books.push(newBook)
    }
    books.createBook('Brave New World', 'Aldous',  'Huxley')
    books.createBook('Revelation', 'John', 'The Revelator')
    books.createBook('It\s Dangerous to be Right When the Government is Wrong', 'Andrew', 'Napolitano')
    books.createBook('Build: An Unorthodox Guide to Making Things Worth Making', 'Tony', 'Fadell')
    books.createBook('12 Rules for Life', 'Jordan', 'Peterson')
    books.createBook('Black Rednecks and White Liberals', 'Thomas', 'Sowell')
    //console.log(books);
    //Part 2 of Bonus
    books.showBookInfo = function(bookObj) {
        const index = books.map(function(book) {
            return book.id;
        }).indexOf() + 1

        const titles = books.map(function(book) {
            return book.title;
      });
        console.log(titles)
      
        const authors = books.map(function(book) {
            return Object.values(book.author);
      })
        console.log(authors)
      
        return books.forEach(function(book, i) {

    console.log('Book # ' + parseInt(i + 1),'\nTitle: ' + book.title,'\nAuthor: ' + book.author.firstName, book.author.lastName)
})
    }
   console.log(books.showBookInfo(books.at(-1)))
})();