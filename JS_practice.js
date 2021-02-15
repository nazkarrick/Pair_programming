////////JAVASCRIPT EXERCISE LIST//////////
//======================================//
//////////////////////////////////////////

/*
///////////////////
//write a javascript program to check two numbers and return true if one of the numbers 100 or if the sum of the two numbers is 100
/////////////////

const numbers = () => {
    let x = 100;
    if (x === 100) {
        return true;
    } else {
        return false;
    }
}
console.log(numbers());
//OPTION 2
const isEqual = (x,y) => x === 100 || y === 100 || (x + y) === 100;
console.log(isEqual(100, 0));
console.log(isEqual(0, 100));
console.log(isEqual(50, 50)); // returns? 

/////////////////
//write a javascript program to get the extension of a file name.
/////////////////

let file1 = "Buu Like Chocolate";
let file2 = "testSubj.txt";
let fileArr = file1 + file2;
//console.log(fileArr); // verify variable is workable.

const fileExtension = () => {
    return fileArr.split('.').pop();
}
console.log(fileExtension()); // returns txt..use different built in JS objects to get different results

//OPTION 2
const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));
console.log(getFileExtension('Buu.html'));

///////////////////////
//Write a Javascript program to replace every character in a given string with the character following it in the alphabet
//////////////////////

//String.fromCharCode
const moveCharsForward = (str) => str.split('').map(char => String.fromCharCode(char.charCodeAt(0) +1)).join('');

console.log(moveCharsForward('abcde'));
console.log(moveCharsForward('yz')); // what conditions can be used?

/////////////
//Write a Javascript program to get the current date. Expected Output: mm-dd-yyy, mm/dd/yyy
////////////

let currentDate = new Date();
let format = currentDate.getFullYear() + ' / ' + currentDate.getDate() + ' / ' + (currentDate.getMonth() + 1);
let getTime = currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds();

console.log(currentDate);
console.log(format); // prints Current Date
console.log(getTime); //prints Current Time

//OPTION 2
const formatDate = (date = new Date()) => {
    const days = date.getDay() + 1; //zero index
    const month = date.geMonth() + 1; //starts at zero index
    const years = date.getFullYear();
    return `${days}/${month}/${years}`;
}
console.log(formatDate());

///////////////
//Write a javascript program to create a new string adding "New!" in front of a given string. If the given string begins with "New!" already then return the original string.
//////////////

const addNew = (str) => `New! ${str}`;
console.log(addNew('Cheaper Offers'));   
//OPTION 2///
const addNew = (str) => str.indexOf('New!') === 0 ? str : `New! ${str}`;
console.log(addNew('Cheaper Offers'))
*/