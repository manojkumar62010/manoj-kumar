const reName = "manoj"
const repCount = 50;

// console.log(reName + repCount +  "value");  don`t use this syntax
console.log(`Hello my name is ${reName} and my repo count is ${repCount}`); // morden time period use it
 const gameName = new String('manojktr')
 console.log(gameName[0]);
 console.log(gameName.__proto__);// for finding the object
//  The __proto__ accessor property of Object instances exposes the [[Prototype]] (either an object or null) of this object.

 console.log(gameName.length); //The length data property of an Array instance represents the number of elements in that array.

 console.log(gameName.toUpperCase());
 console.log(gameName.charAt(2));// The charAt() method returns the character at a specified index (position) in a string.
//  The index of the first character is 0, the second 1, ...

 console.log(gameName.indexOf('t'));// The indexOf() method returns the position of the first occurrence of a value in a string.
//  The indexOf() method returns -1 if the value is not found.
//  The indexOf() method is case sensitive.

// find method of string // homework

const newString = gameName.substring(0,4); // The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.
// The substring() method extracts characters from start to end (exclusive).
// The substring() method does not change the original string.
// If start is greater than end, arguments are swapped: (4, 1) = (1, 4).
// Start or end values less than 0, are treated as 0.

console.log(newString);

const anotherString =gameName.slice(-8,4); // The slice() method returns selected elements in an array, as a new array.
// The slice() method selects from a given start, up to a (not inclusive) given end.
// The slice() method does not change the original array.

console.log(anotherString);



const newStringOne = "    manoj  "
console.log(newStringOne)
console.log(newStringOne.trim()) // it work for white space and line terminate


const url =" https://manoj.com/manoj%20kumar"

console.log(url.replace('%20','_'))
// The replace() method searches a string for a value or a regular expression.
// The replace() method returns a new string with the value(s) replaced.
// The replace() method does not change the original string.

console.log(url.includes('vikas')) //The includes() method returns true if a string contains a specified string. Otherwise it returns false . The includes() method is case sensitive

console.log(gameName.split('_')); //The split() method splits a string into an array of substrings. The split() method returns the new array. The split() method does not change the original string. If (" ") is used as separator, the string is split between words.