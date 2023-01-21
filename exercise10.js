/*
    This is exercise 10 for lab 4.
    The slide for this exercise is slide 86 in the Module 4 slides.

    Using the moment.js library, calculate the number of days between your birthdate and the current date,
    and then console.log the value

    To run your code, in your terminal type "node exercise10.js" without the quotation marks
*/

var moment = require('moment'); // require
moment().format(); 

var NowMoment = moment();
let bd = moment ([1997, 2, 10]);
let diffinDays = NowMoment.diff(bd, 'days')
console.log(diffinDays);