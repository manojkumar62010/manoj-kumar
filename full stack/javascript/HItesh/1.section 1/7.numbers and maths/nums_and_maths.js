// numbers

const score =400;
console.log(score)

const balance = new Number(100)
console.log(balance);
 console.log(balance.toString().length); //toString() in JavaScript receives an argument and returns the object's text representation as a string value. The returned string value depends upon the type of argument that is being converted to string.

 console.log(balance.toFixed(1)) // The toFixed() method converts a number to a string.
//  The toFixed() method rounds the string to a specified number of decimals.

 const otherNumber = 123.23;

 console.log(otherNumber.toPrecision(3)) //The toPrecision() method formats a number to a specified length.
//  A decimal point and nulls are added (if needed), to create the specified length


 const hundreds = 100000;
 console.log(hundreds.toLocaleString('en-IN')); //The toLocaleString() method returns a Date object as a string, using locale settings.
//  The default language depends on the locale setup on your compute


//  ************************************ maths*************
console.log(Math);
console.log(Math.abs(-4)); //The Math.abs() method returns the absolute value of a number.
console.log(Math.round(4.6));//The Math.round() method rounds a number to the nearest integer.
// 2.49 will be rounded down (2), and 2.5 will be rounded up (3).

console.log(Math.ceil(4.2)); //The Math.ceil() method rounds a number rounded UP to the nearest integer.
console.log(Math.floor(4.2)); //The Math.floor() method rounds a number DOWN to the nearest integer.
console.log(Math.min(4,3,2,8,)); //The Math.min() method returns the number with the lowest value.
console.log(Math.max(8,9,7,6,)); //The Math.max() method returns the number with the highest value.

console.log(Math.random()); //Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1); //Math.random() used with Math.floor() can be used to return random integers.

const min =10;
const max =20;

console.log(Math.floor(Math.random() * (max-min+1))+min) // most important topic this .




